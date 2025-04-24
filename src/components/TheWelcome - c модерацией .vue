<script setup>
    import { ref, onMounted } from 'vue';
    import { auth, db, ref as dbRef, push, onValue, remove, update } from '../firebase';

    const commentText = ref('');
    const comments = ref([]);
    const user = ref(null);
    const isAdmin = ref(false);

    onMounted(() => {
        auth.onAuthStateChanged(async (authUser) => {
            user.value = authUser;

            if (authUser) {
                isAdmin.value = authUser.email === 'admin@example.com'; // Замените на ваш админ email
            } else {
                isAdmin.value = false;
            }
        });

        const commentsRef = dbRef(db, 'comments');
        onValue(commentsRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                comments.value = Object.entries(data).map(([id, comment]) => ({
                id,
                ...comment
            })).sort((a, b) => {
                        // Сначала одобренные, затем по времени (новые выше)
                    if (a.approved === b.approved) {
                        return b.timestamp - a.timestamp;
                    }
                    return a.approved ? -1 : 1;
                });
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
            timestamp: Date.now(),
            approved: false // Новые комментарии не подтверждены по умолчанию
        });

        commentText.value = '';
        alert('Ваш комментарий отправлен на модерацию. Он появится после проверки администратором.');
    };

    const deleteComment = (commentId, commentAuthorId) => {
        if (!user.value) return;

        if (isAdmin.value || user.value.uid === commentAuthorId) {
            if (confirm('Вы уверены, что хотите удалить этот комментарий?')) {
                remove(dbRef(db, `comments/${commentId}`));
            }
        }
    };

    const approveComment = (commentId) => {
        if (!isAdmin.value) return;
        
        update(dbRef(db, `comments/${commentId}`), {
            approved: true
        });
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
            <div v-for="comment in comments" :key="comment.id" class="comment" :class="{ 'pending': !comment.approved }">
                <div class="comment-header">
                    <strong>{{ comment.author }}:</strong>
                    <div class="comment-actions">
                        <button v-if="isAdmin && !comment.approved"
                                @click="approveComment(comment.id)"
                                class="approve-button">
                            Одобрить
                        </button>
                        <button v-if="isAdmin || user?.uid === comment.authorId"
                                @click="deleteComment(comment.id, comment.authorId)"
                                class="delete-button">
                            Удалить
                        </button>
                    </div>
                </div>
                <p>{{ comment.text }}</p>
                <small>{{ new Date(comment.timestamp).toLocaleString() }}</small>
                <div v-if="!comment.approved" class="moderation-notice">
                    [На модерации]
                </div>
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

    .comment.pending {
        background-color: #fff3cd;
        border-left: 4px solid #ffc107;
    }

    .comment-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
    }

    .comment-actions {
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

    .comment p {
        margin: 10px 0;
    }

    .comment small {
        color: #6c757d;
    }

    .moderation-notice {
        color: #856404;
        font-size: 0.8em;
        margin-top: 5px;
        font-style: italic;
    }
</style>