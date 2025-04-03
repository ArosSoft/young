<script setup>
import WelcomeItem from './WelcomeItem.vue' 
import { ref, onMounted } from 'vue';
import { auth, db, ref as dbRef, push, onValue } from 'firebase/database';

const commentText = ref('');
const comments = ref([]);
const user = ref(null);

onMounted(() => {
    auth.onAuthStateChanged((authUser) => {
        user.value = authUser;
    });
    
    // Загрузка комментариев из базы данных
    const commentsRef = dbRef(db, 'comments');
    onValue(commentsRef, (snapshot) => {
        const data = snapshot.val();
        comments.value = data ? Object.values(data) : [];
    });
});

const addComment = () => {
    if (!commentText.value.trim() || !user.value) return;
    
    push(dbRef(db, 'comments'), {
        text: commentText.value,
        author: user.value.displayName,
        authorId: user.value.uid,
        timestamp: Date.now()
    });
    
    commentText.value = '';
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
      <div v-for="(comment, index) in comments" :key="index" class="comment">
        <strong>{{ comment.author }}:</strong>
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
}

.comment p {
  margin: 10px 0;
}

.comment small {
  color: #6c757d;
}
</style>