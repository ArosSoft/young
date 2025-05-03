<script setup>
import { ref, onMounted } from 'vue';
import { auth, db, ref as dbRef, push, onValue, remove, update } from '../firebase';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css'; // Или другой стиль из https://highlightjs.org/static/demo/

// Инициализация Markdown с подсветкой кода
const md = new MarkdownIt({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value;
      } catch (__) {}
    }
    return ''; // Используем кавычки по умолчанию для кода без указания языка
  }
});

const projectForm = ref({
    title: '',
    description: '',
    image: null,
    links: '',
    tools: '',
    materials: ''
});
const projects = ref([]);
const user = ref(null);
const isAdmin = ref(false);
const storage = getStorage();
const imagePreview = ref(null);

onMounted(() => {
    auth.onAuthStateChanged(async (authUser) => {
        user.value = authUser;

        if (authUser) {
            isAdmin.value = authUser.email === 'admin@example.com'; // Замените на ваш админ email
        } else {
            isAdmin.value = false;
        }
    });

    const projectsRef = dbRef(db, 'projects');
    onValue(projectsRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
            projects.value = Object.entries(data).map(([id, project]) => ({
                id,
                ...project
            })).sort((a, b) => {
                // Сначала одобренные, затем по времени (новые выше)
                if (a.approved === b.approved) {
                    return b.timestamp - a.timestamp;
                }
                return a.approved ? -1 : 1;
            });
        } else {
            projects.value = [];
        }
    });
});

const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
        projectForm.value.image = file;
        
        // Создаем превью изображения
        const reader = new FileReader();
        reader.onload = (e) => {
            imagePreview.value = e.target.result;
        };
        reader.readAsDataURL(file);
    }
};

const deleteProject = (projectId, projectAuthorId) => {
    if (!user.value) return;

    if (isAdmin.value || user.value.uid === projectAuthorId) {
        if (confirm('Вы уверены, что хотите удалить этот проект?')) {
            remove(dbRef(db, `projects/${projectId}`));
        }
    }
};

const approveProject = (projectId) => {
    if (!isAdmin.value) return;
    
    update(dbRef(db, `projects/${projectId}`), {
        approved: true
    });
};

const addProject = async () => {
    if (!user.value) return;
    
    // Проверяем обязательные поля
    if (!projectForm.value.title.trim() || !projectForm.value.description.trim()) {
        alert('Пожалуйста, заполните название и описание проекта');
        return;
    }

    try {
        let imageUrl = '';
        
        if (projectForm.value.image) {
            const imageRef = storageRef(storage, `project-images/${Date.now()}_${projectForm.value.image.name}`);
            await uploadBytes(imageRef, projectForm.value.image);
            imageUrl = await getDownloadURL(imageRef);
        }

        const newProject = {
            title: projectForm.value.title,
            description: projectForm.value.description,
            imageUrl: imageUrl,
            links: projectForm.value.links.split(',').map(link => link.trim()).filter(link => link),
            tools: projectForm.value.tools.split(',').map(tool => tool.trim()).filter(tool => tool),
            materials: projectForm.value.materials.split(',').map(mat => mat.trim()).filter(mat => mat),
            author: user.value.displayName || user.value.email,
            authorId: user.value.uid,
            timestamp: Date.now(),
            approved: isAdmin.value
        };

        push(dbRef(db, 'projects'), newProject);

        projectForm.value = {
            title: '',
            description: '',
            image: null,
            links: '',
            tools: '',
            materials: ''
        };
        imagePreview.value = null;

        if (!isAdmin.value) {
            alert('Ваш проект отправлен на модерацию. Он появится после проверки администратором.');
        }
    } catch (error) {
        console.error('Ошибка при добавлении проекта:', error);
        alert('Произошла ошибка при сохранении проекта');
    }
};

// Добавляем computed-свойство для рендеринга описания
const renderMarkdown = (text) => {
    return md.render(text || '');
};

</script>

<template>
    <div class="projects-section">
        <h2>Детские проекты</h2>

        <div v-if="user" class="project-form">
            <div class="form-group">
                <label>Название проекта*</label>
                <input v-model="projectForm.title" placeholder="Введите название проекта">
            </div>
            
            <div class="form-group">
                <label>Описание проекта*</label>
                <textarea v-model="projectForm.description" placeholder="Опишите ваш проект..."></textarea>
            </div>
            
            <div class="form-group">
                <label>Изображение проекта</label>
                <input type="file" @change="handleImageUpload" accept="image/*">
                <div v-if="imagePreview" class="image-preview">
                    <img :src="imagePreview" alt="Превью изображения">
                </div>
            </div>
            
            <div class="form-group">
                <label>Ссылки (через запятую)</label>
                <input v-model="projectForm.links" placeholder="https://example.com, https://github.com/...">
            </div>
            
            <div class="form-group">
                <label>Инструменты (через запятую)</label>
                <input v-model="projectForm.tools" placeholder="3D-принтер, Arduino, Photoshop...">
            </div>
            
            <div class="form-group">
                <label>Материалы (через запятую)</label>
                <input v-model="projectForm.materials" placeholder="Дерево, пластик, картон...">
            </div>
            
            <button @click="addProject">Отправить проект</button>
        </div>
        
        <div v-else class="auth-prompt">
            <p>Чтобы добавить проект, пожалуйста, войдите в систему.</p>
        </div>

        <div class="projects-list">
            <template v-for="project in projects" :key="project.id">
                <div v-if="project.approved || isAdmin" 
                     class="project-card" 
                     :class="{ 'pending': !project.approved }">
                    <div class="project-header">
                        <h2>{{ project.title }}</h2>
                        <div class="project-actions">
                            <button v-if="isAdmin && !project.approved"
                                    @click="approveProject(project.id)"
                                    class="approve-button">
                                Одобрить
                            </button>
                            <button v-if="isAdmin || user?.uid === project.authorId"
                                    @click="deleteProject(project.id, project.authorId)"
                                    class="delete-button">
                                Удалить
                            </button>
                        </div>
                    </div>
                    
                    <div v-if="project.imageUrl" class="project-image">
                        <img :src="project.imageUrl" :alt="project.title">
                    </div>
                    
                    <p class="project-description" v-html="renderMarkdown(project.description)"></p>

                    <div v-if="project.links && project.links.length" class="project-links">
                        <h4>Ссылки:</h4>
                        <ul>
                            <li v-for="(link, index) in project.links" :key="index">
                                <a :href="link" target="_blank">{{ link }}</a>
                            </li>
                        </ul>
                    </div>
                    
                    <div v-if="project.tools && project.tools.length" class="project-tools">
                        <h4>Инструменты:</h4>
                        <ul>
                            <li v-for="(tool, index) in project.tools" :key="index">{{ tool }}</li>
                        </ul>
                    </div>
                    
                    <div v-if="project.materials && project.materials.length" class="project-materials">
                        <h4>Материалы:</h4>
                        <ul>
                            <li v-for="(material, index) in project.materials" :key="index">{{ material }}</li>
                        </ul>
                    </div>
                    
                    <div class="project-footer">
                        <small>Автор: {{ project.author }}</small>
                        <small>{{ new Date(project.timestamp).toLocaleString() }}</small>
                    </div>
                    
                    <div v-if="!project.approved" class="moderation-notice">
                        [На модерации]
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<style scoped>
/* Добавляем стили для подсветки кода */
.project-description >>> pre {
    background: #f6f8fa;
    padding: 16px;
    border-radius: 6px;
    overflow: auto;
    margin: 15px 0;
}

.project-description >>> code {
    font-family: 'Courier New', Courier, monospace;
    background: #f6f8fa;
    padding: 0.2em 0.4em;
    border-radius: 3px;
    font-size: 85%;
}

.project-description >>> pre code {
    padding: 0;
    background: transparent;
}

.project-description >>> .hljs {
    background: #f6f8fa;
}

.projects-section {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

.project-form {
    margin-bottom: 20px;
    background-color: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
}

.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.form-group textarea {
    height: 100px;
}

.image-preview {
    margin-top: 10px;
}

.image-preview img {
    max-width: 100%;
    max-height: 200px;
    border-radius: 4px;
}

button {
    background-color: #42b983;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 10px;
}

button:hover {
    background-color: #369f6e;
}

.auth-prompt {
    background-color: #f8f9fa;
    padding: 15px;
    border-radius: 4px;
    margin-bottom: 20px;
    text-align: center;
}

.projects-list {
    margin-top: 30px;
}

.project-card {
    background-color: #f8f9fa;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 8px;
    position: relative;
}

.project-card.pending {
    background-color: #fff3cd;
    border-left: 4px solid #ffc107;
}

.project-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
}

.project-header h3 {
    margin: 0;
    color: #2c3e50;
}

.project-actions {
    display: flex;
    gap: 5px;
}

.delete-button {
    background-color: #ff4444;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
}

.approve-button {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
}

.delete-button:hover {
    background-color: #cc0000;
}

.approve-button:hover {
    background-color: #218838;
}

.project-image {
    margin-bottom: 15px;
}

.project-image img {
    max-width: 100%;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.project-description {
    margin: 15px 0;
    line-height: 1.6;
}

.project-links,
.project-tools,
.project-materials {
    margin-bottom: 15px;
}

.project-links ul,
.project-tools ul,
.project-materials ul {
    padding-left: 20px;
    margin: 5px 0;
}

.project-links a {
    color: #42b983;
    text-decoration: none;
}

.project-links a:hover {
    text-decoration: underline;
}

.project-footer {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    color: #6c757d;
    font-size: 0.9em;
}

.moderation-notice {
    color: #856404;
    font-size: 0.8em;
    margin-top: 10px;
    font-style: italic;
}
</style>