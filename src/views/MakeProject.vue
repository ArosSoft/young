<script setup>
import { ref, onMounted } from 'vue';
import { auth, db, ref as dbRef, push, onValue, remove, update } from '../firebase';
import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

const IMGBB_API_KEY = 'b360c6df64de404cbb27ca4079327252'; // Получите бесплатный ключ на https://api.imgbb.com/

    const md = new MarkdownIt({
  breaks: true, // Эта опция преобразует переводы строк в <br> теги
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value;
      } catch (__) {}
    }
    return '';
  }
});

const showForm = ref(false);
const toggleForm = () => {
    showForm.value = !showForm.value;
};

const projectForm = ref({
    title: '',
    description: '',
    image: null,
    links: '',
    tools: '',
    materials: '',
    grade: null // Добавляем поле для хранения выбранного квантума
});

const gradeOptions = ["IT", "РОБО", "БИО", "ХАЙТЕК", "НАНО", "АЭРО", "ГЕО", "МЕДИА", "НЕТ" ]; // Список доступных квантумов

const projects = ref([]);
const user = ref(null);
const isAdmin = ref(false);
const imagePreview = ref(null);
const isLoading = ref(false);
const expandedProjects = ref(new Set()); // Добавляем состояние для отслеживания развернутых проектов

onMounted(() => {
    auth.onAuthStateChanged(async (authUser) => {
        user.value = authUser;
        isAdmin.value = authUser?.email === 'admin@example.com';
    });

    const projectsRef = dbRef(db, 'projects');
    onValue(projectsRef, (snapshot) => {
        const data = snapshot.val();
        projects.value = data ? Object.entries(data).map(([id, project]) => ({
            id,
            ...project
        })).sort((a, b) => {
            if (a.approved === b.approved) return b.timestamp - a.timestamp;
            return a.approved ? -1 : 1;
        }) : [];
    });
});

const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.size > 5 * 1024 * 1024) {
        alert('Размер изображения не должен превышать 5MB');
        return;
    }
    
    if (file) {
        projectForm.value.image = file;
        const reader = new FileReader();
        reader.onload = (e) => imagePreview.value = e.target.result;
        reader.readAsDataURL(file);
    }
};

const uploadImageToImgBB = async (file) => {
    if (!file) return null;
    
    const formData = new FormData();
    formData.append('image', file);
    
    try {
        const response = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
            method: 'POST',
            body: formData
        });
        
        const data = await response.json();
        if (data.success) {
            return data.data.url;
        } else {
            console.error('Ошибка загрузки изображения:', data.error);
            return null;
        }
    } catch (error) {
        console.error('Ошибка при загрузке изображения:', error);
        return null;
    }
};

const deleteProject = async (projectId, projectAuthorId) => {
    if (!user.value || !(isAdmin.value || user.value.uid === projectAuthorId)) return;
    
    if (confirm('Вы уверены, что хотите удалить этот проект?')) {
        try {
            await remove(dbRef(db, `projects/${projectId}`));
        } catch (error) {
            console.error('Ошибка при удалении:', error);
            alert('Не удалось удалить проект');
        }
    }
};

const approveProject = async (projectId) => {
    if (!isAdmin.value) return;
    
    try {
        await update(dbRef(db, `projects/${projectId}`), { approved: true });
    } catch (error) {
        console.error('Ошибка при одобрении:', error);
        alert('Не удалось одобрить проект');
    }
    };

    const addProject = async () => {
        if (!user.value || isLoading.value) return;

        if (!projectForm.value.title.trim() || !projectForm.value.description.trim() || !projectForm.value.grade) {
            alert('Пожалуйста, заполните название, описание проекта и укажите класс');
            return;
        }

        isLoading.value = true;

        try {
            let imageUrl = '';

            if (projectForm.value.image) {
                imageUrl = await uploadImageToImgBB(projectForm.value.image);
                if (!imageUrl) {
                    alert('Не удалось загрузить изображение. Попробуйте другое изображение.');
                    return;
                }
            }

            const newProject = {
                title: projectForm.value.title,
                description: projectForm.value.description,
                grade: projectForm.value.grade, // Добавляем квантуи в проект
                imageUrl,
                links: projectForm.value.links.split(',').map(link => link.trim()).filter(link => link),
                tools: projectForm.value.tools.split(',').map(tool => tool.trim()).filter(tool => tool),
                materials: projectForm.value.materials.split(',').map(mat => mat.trim()).filter(mat => mat),
                author: user.value.displayName || user.value.email,
                authorId: user.value.uid,
                timestamp: Date.now(),
                approved: isAdmin.value
            };

            await push(dbRef(db, 'projects'), newProject);

            projectForm.value = {
                title: '',
                description: '',
                grade: null,
                image: null,
                links: '',
                tools: '',
                materials: ''
            };
            imagePreview.value = null;
            showForm.value = false;

            if (!isAdmin.value) {
                alert('Ваш проект отправлен на модерацию. Он появится после проверки администратором.');
            }
        } catch (error) {
            console.error('Ошибка при добавлении проекта:', error);
            alert('Произошла ошибка при сохранении проекта');
        } finally {
            isLoading.value = false;
        }
    };

const renderMarkdown = (text) => md.render(text || '');

const toggleProject = (projectId) => {
    if (expandedProjects.value.has(projectId)) {
        expandedProjects.value.delete(projectId);
    } else {
        expandedProjects.value.add(projectId);
    }
};
</script>

<template>
    <div class="projects-section">
        <h1>Детские проекты</h1>

        <div v-if="user" class="form-toggle">
            <button @click="toggleForm" class="toggle-button">
                {{ showForm ? 'Скрыть форму' : 'Добавить проект' }}
            </button>
        </div>

        <div v-if="user && showForm" class="project-form">
            <div class="form-group">
                <label>Название проекта*</label>
                <input v-model="projectForm.title" placeholder="Введите название проекта">
            </div>

            <div class="form-group">
                <label>Описание проекта*</label>
                <textarea v-model="projectForm.description" placeholder="Опишите ваш проект..."></textarea>
                <small>Поддерживается Markdown и код</small>
            </div>

            <div class="form-group">
                <label>Изображение проекта (макс. 5MB)</label>
                <input type="file" @change="handleImageUpload" accept="image/*">
                <div v-if="imagePreview" class="image-preview">
                    <img :src="imagePreview" alt="Превью изображения">
                </div>
            </div>

            <div class="form-group">
                <label>Ссылки (через запятую) на презентацию, сайт, телеграм, Вконтакте и т.п. </label>
                <input v-model="projectForm.links" placeholder="https://github.com/..., https://vk.com/...">
            </div>

            <div class="form-group">
                <label>Инструменты (через запятую)</label>
                <input v-model="projectForm.tools" placeholder="3D-принтер, Arduino, Photoshop...">
            </div>

            <div class="form-group">
                <label>Материалы (через запятую)</label>
                <input v-model="projectForm.materials" placeholder="Дерево, пластик, картон...">
            </div>

            <div class="form-group">
                <label>Квантум</label>
                <div class="grade-buttons">
                    <button v-for="grade in gradeOptions"
                            :key="grade"
                            @click.prevent="projectForm.grade = grade"
                            :class="{ active: projectForm.grade === grade }"
                            class="grade-button">
                        {{ grade }}
                    </button>
                </div>
            </div>

            <button @click="addProject" :disabled="isLoading">
                {{ isLoading ? 'Отправка...' : 'Отправить проект' }}
            </button>
        </div>
        
        <div v-else-if="!user" class="auth-prompt">
            <p>Чтобы добавить проект, пожалуйста, войдите в систему.</p>
        </div>

        <div v-if="projects.length === 0" class="no-projects">
            Пока нет добавленных проектов
        </div>

        <div v-else class="projects-list">
            <div v-for="project in projects" :key="project.id" class="project-card">
                <div class="project-header">
                    <div class="project-title-section">
                        <div v-if="project.imageUrl && !expandedProjects.has(project.id)" class="project-thumbnail">
                            <img :src="project.imageUrl" :alt="project.title">
                        </div>
                        <h3>{{ project.title }}</h3>
                    </div>
                    <div class="project-actions">
                        <button @click="toggleProject(project.id)" class="toggle-project-btn">
                            {{ expandedProjects.has(project.id) ? '🔼' : '🔽' }}
                        </button>
                        <button v-if="isAdmin || user?.uid === project.authorId" 
                                @click="deleteProject(project.id, project.authorId)"
                                class="delete-btn">
                            Удалить
                        </button>
                        <button v-if="isAdmin && !project.approved" 
                                @click="approveProject(project.id)"
                                class="approve-btn">
                            Одобрить
                        </button>
                    </div>
                </div>

                <div v-if="expandedProjects.has(project.id)" class="project-content">
                    <div v-if="project.imageUrl" class="project-image">
                        <img :src="project.imageUrl" :alt="project.title">
                    </div>

                    <div class="project-description" v-html="renderMarkdown(project.description)"></div>

                    <div v-if="project.links && project.links.length" class="project-links">
                        <h4>Ссылки:</h4>
                        <ul>
                            <li v-for="(link, index) in project.links" :key="index">
                                <a :href="link" target="_blank" rel="noopener noreferrer">{{ link }}</a>
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
                        <span>Автор: {{ project.author }}</span>
                        <span>Квантум: {{ project.grade }}</span>
                        <span v-if="!project.approved" class="moderation-notice">
                            На модерации
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

    .grade-buttons {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-top: 8px;
    }

    .grade-button {
        width: 80px;
        height: 40px;
        border-radius: 10px;
        background-color: #c0c0c0;
        border: 1px solid #ddd;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s;
    }

        .grade-button:hover {
            background-color: #e0e0e0;
        }

        .grade-button.active {
            background-color: #42b983;
            color: white;
            border-color: #42b983;
        }

.projects-section {
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
}

.project-form {
    margin-bottom: 30px;
    background-color: #f5f7fa;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: #2c3e50;
}

    .form-group input,
    .form-group textarea {
        width: 100%;
        padding: 12px;
        border: 1px solid #ddd;
        border-radius: 6px;
        font-size: 16px;
        transition: border-color 0.3s;
        white-space: pre-wrap; /* Сохраняет пробелы и переводы строк */
    }

.form-group input:focus,
.form-group textarea:focus {
    border-color: #42b983;
    outline: none;
}

.form-group textarea {
    min-height: 120px;
    resize: vertical;
}

.form-group small {
    color: #666;
    font-size: 0.85em;
}

.image-preview {
    margin-top: 15px;
}

.image-preview img {
    max-width: 100%;
    max-height: 300px;
    border-radius: 6px;
    border: 1px solid #eee;
}

button {
    background-color: #42b983;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #369f6e;
}

button:disabled {
    background-color: #a0d9bb;
    cursor: not-allowed;
}

.toggle-button {
    margin-bottom: 20px;
    background-color: #3498db;
}

.toggle-button:hover {
    background-color: #2980b9;
}

.auth-prompt {
    background-color: #f8f9fa;
    padding: 20px;
    border-radius: 6px;
    margin-bottom: 25px;
    text-align: center;
    border: 1px dashed #ccc;
}

.projects-list {
    margin-top: 40px;
}

.project-card {
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    margin-bottom: 20px;
    overflow: hidden;
}

.project-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background: #f8f9fa;
    border-bottom: 1px solid #eee;
}

.project-content {
    padding: 20px;
}

.project-actions {
    display: flex;
    gap: 10px;
}

.delete-btn {
    background-color: #dc3545;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s;
}

.delete-btn:hover {
    background-color: #c82333;
}

.approve-btn {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s;
}

.approve-btn:hover {
    background-color: #0056b3;
}

.project-image {
    margin-bottom: 20px;
    text-align: center;
}

.project-image img {
    max-width: 100%;
    max-height: 400px;
    border-radius: 8px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.1);
    object-fit: contain;
}

.project-description {
    margin: 20px 0;
    line-height: 1.7;
    color: #333;
}

.project-description :deep(pre) {
    background: #f6f8fa;
    padding: 16px;
    border-radius: 6px;
    overflow: auto;
    margin: 20px 0;
}

.project-description :deep(code) {
    font-family: 'Courier New', Courier, monospace;
    background: #f6f8fa;
    padding: 0.2em 0.4em;
    border-radius: 3px;
    font-size: 90%;
}

.project-links,
.project-tools,
.project-materials {
    margin-bottom: 20px;
}

.project-links h4,
.project-tools h4,
.project-materials h4 {
    margin-bottom: 10px;
    color: #2c3e50;
    font-size: 1.1em;
}

.project-links ul,
.project-tools ul,
.project-materials ul {
    padding-left: 25px;
    margin: 10px 0;
    list-style-type: disc;
}

.project-links a {
    color: #3498db;
    word-break: break-all;
}

    .project-footer {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 20px;
        color: #7f8c8d;
        font-size: 0.9em;
        padding-top: 15px;
        border-top: 1px solid #eee;
    }

.moderation-notice {
    color: #e67e22;
    font-size: 0.9em;
    margin-top: 15px;
    font-style: italic;
    text-align: center;
}

.no-projects {
    text-align: center;
    padding: 40px;
    color: #7f8c8d;
    font-size: 1.1em;
    background-color: #f9f9f9;
    border-radius: 8px;
    border: 1px dashed #ddd;
}

.toggle-project-btn {
    background-color: transparent;
    color: #666;
    border: 1px solid #ddd;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.3s;
}

.toggle-project-btn:hover {
    background-color: #f5f5f5;
    color: #333;
}

.project-title-section {
    display: flex;
    align-items: center;
    gap: 20px;
}

.project-thumbnail {
    width: 80px;
    height: 80px;
    border-radius: 8px;
    overflow: hidden;
    flex-shrink: 0;
}

.project-thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.project-header h3 {
    margin: 0;
    font-size: 1.3em;
    color: #2c3e50;
}

@media (max-width: 768px) {
    .project-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }
    
    .project-title-section {
        width: 100%;
    }
    
    .project-actions {
        width: 100%;
        justify-content: flex-end;
    }
}
</style>