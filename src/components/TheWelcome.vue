<script setup>
import WelcomeItem from './WelcomeItem.vue' 
import { ref, onMounted } from 'vue';
import { auth, db, ref as dbRef, push, onValue, remove } from '../firebase';

const commentText = ref('');
const comments = ref([]);
const user = ref(null);
const isAdmin = ref(false);

onMounted(() => {
    auth.onAuthStateChanged(async (authUser) => {
        user.value = authUser;
        
        if (authUser) {
            // Проверяем, является ли пользователь администратором
            isAdmin.value = authUser.email === 'admin@example.com';
        } else {
            isAdmin.value = false;
        }
    });
    
    // Загрузка комментариев из базы данных
    const commentsRef = dbRef(db, 'comments');
    onValue(commentsRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
            // Преобразуем объект в массив и сохраняем id комментария
            comments.value = Object.entries(data).map(([id, comment]) => ({
                id,
                ...comment
            }));
        } else {
            comments.value = [];
        }
    });
});

const addComment = () => {
    if (!commentText.value.trim() || !user.value) return;
    
    push(dbRef(db, 'comments'), {
        text: commentText.value,
        author: user.value.displayName || user.value.email,
        authorId: user.value.uid,
        timestamp: Date.now()
    });
    
    commentText.value = '';
};

const deleteComment = (commentId) => {
    if (!isAdmin.value) return;
    
    if (confirm('Вы уверены, что хотите удалить этот комментарий?')) {
        remove(dbRef(db, `comments/${commentId}`));
    }
};
</script>

<template>
  <div class="comments-section">
    <h2>Идеи молодежи</h2>
    
    <div v-if="user" class="comment-form">
      <textarea v-model="commentText" placeholder="Поделитесь своей идеей..."></textarea>
      <button @click="addComment">Отправить</button>
    </div>
    <div v-else class="auth-prompt">
      <p>Чтобы оставить комментарий, пожалуйста, войдите в систему.</p>
    </div>
    
    <div class="comments-list">
      <div v-for="comment in comments" :key="comment.id" class="comment">
        <div class="comment-header">
          <strong>{{ comment.author }}:</strong>
          <button 
            v-if="isAdmin" 
            @click="deleteComment(comment.id)"
            class="delete-button"
          >
            Удалить
          </button>
        </div>
        <p>{{ comment.text }}</p>
        <small>{{ new Date(comment.timestamp).toLocaleString() }}</small>
      </div>
    </div>
  </div>
</template>

<style scoped>
.comments-section {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.comment-form {
  margin-bottom: 20px;
}

.comment-form textarea {
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.comment-form button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

.auth-prompt {
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 4px;
  margin-bottom: 20px;
  text-align: center;
}

.comments-list {
  margin-top: 20px;
}

.comment {
  background-color: #f8f9fa;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 4px;
  position: relative;
}

.comment-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.delete-button {
  background-color: #ff4444;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}

.delete-button:hover {
  background-color: #cc0000;
}

.comment p {
  margin: 10px 0;
}

.comment small {
  color: #6c757d;
}
</style>