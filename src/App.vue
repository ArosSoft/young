<template>
    <header>
        <!-- Кнопка входа в левом верхнем углу -->
        <div class="auth-button">
            <button v-if="!user" @click="showAuthModal = true">Войти</button>
            <div v-else class="user-info">
                <span>{{ user.displayName || user.email }}</span>
                <button @click="signOutUser">Выйти</button>
            </div>
        </div>
        
        <!-- Логотип сайта -->
        <img alt="logo" class="logo" src="./assets/logo.jfif" width="320" height="250" />
        
        <div class="wrapper">
            <!-- Компонент HelloWorld с заголовком "ИДЕИ МОЛОДЕЖИ" -->
            <HelloWorld msg="ИДЕИ МОЛОДЕЖИ" />

            <!-- Навигационное меню -->
            <nav>
                <router-link to="/">Домой</router-link> 
                <router-link to="/about">О нас</router-link> 
                <router-link to="/welcome">Идеи молодежи</router-link> 
                <router-link to="/neuroart">Нейро-Арт</router-link> 
                <router-link to="/graffiti">Граффити</router-link> 
                <router-link to="/volonter">Волонтёрство</router-link>
            </nav>
        </div>
    </header>

    <!-- Модальное окно авторизации -->
    <div v-if="showAuthModal" class="auth-modal">
        <div class="auth-modal-content">
            <span class="close" @click="showAuthModal = false">&times;</span>
            <h2>Вход</h2>
            <div class="auth-methods">
                <button @click="signInWithGoogle">Войти через Google</button>
                <div class="divider">или</div>
                <form @submit.prevent="signInWithEmail">
                    <input type="email" v-model="email" placeholder="Email" required>
                    <input type="password" v-model="password" placeholder="Пароль" required>
                    <button type="submit">Войти</button>
                </form>
            </div>
        </div>
    </div>

    <!-- Основное содержимое страницы -->
    <main>
        <router-view />
    </main>

    <!-- Футер сайта -->
    <TheFooter />
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheFooter from './components/TheFooter.vue'
import { ref, onMounted } from 'vue';
import { 
    auth, 
    GoogleAuthProvider, 
    signInWithPopup, 
    signOut,
    signInWithEmailAndPassword
} from './firebase';

const user = ref(null);
const showAuthModal = ref(false);
const email = ref('');
const password = ref('');

onMounted(() => {
    auth.onAuthStateChanged((authUser) => {
        user.value = authUser;
        if (authUser) {
            showAuthModal.value = false;
        }
    });
});

const signInWithGoogle = async () => {
    try {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
    } catch (error) {
        console.error("Ошибка входа через Google:", error);
    }
};

const signInWithEmail = async () => {
    try {
        await signInWithEmailAndPassword(auth, email.value, password.value);
    } catch (error) {
        console.error("Ошибка входа:", error);
        alert("Неверный email или пароль");
    }
};

const signOutUser = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error("Ошибка выхода:", error);
    }
};
</script>

<style scoped>
.auth-button {
    position: absolute;
    top: 1rem;
    left: 1rem;
    z-index: 100;
}

.user-info {
    display: flex;
    align-items: center;
    gap: 1rem;
}

/* Остальные стили без изменений */
    /* Стили для шапки сайта */
    header {
        line-height: 1.5;
    }

    /* Стили для логотипа */
    .logo {
        display: block;
        margin: 0 auto 1rem;
    }

    /* Стили для навигационного меню */
    nav {
        width: 100%;
        font-size: 16px;
        text-align: center;
        margin-top: 1rem;
    }

        /* Стили для ссылок в навигационном меню */
        nav a {
            display: inline-block;
            padding: 0 1rem;
            border-left: 3px solid black;
        }

            /* Убираем границу у первой ссылки */
            nav a:first-of-type {
                border: 0;
            }

            /* Стили для активной ссылки в навигационном меню */
            nav a.router-link-active {
                color: var(--color-text);
                font-weight: bold;
            }

    /* Адаптивные стили для экранов шириной более 1024px */
    @media (min-width: 1024px) {
        body {
            min-height: 100vh;
        }

        #app {
            min-height: 100vh;
            display: flex;
            flex-direction: row; /* Изменено на row для горизонтального расположения */
            padding: 0 1rem;
        }

        header {
            position: sticky; /* Фиксируем левую часть */
            top: 0; /* Прилипает к верхней части экрана */
            height: 100vh; /* Занимает всю высоту экрана */
            display: flex;
            flex-direction: column;
            justify-content: flex-start; /* Центрируем содержимое по вертикали */
            align-items: center; /* Центрируем содержимое по горизонтали */
            padding-right: calc(var(--section-gap) / 2);
            width: 90%; /* Левая часть занимает половину экрана */
        }

        .logo {
            margin: 1rem auto 1rem; /* Логотип остается по центру */
        }

        header .wrapper {
            display: flex;
            flex-direction: column;
            align-items: center; /* Центрируем содержимое по горизонтали */
        }

        nav {
            text-align: center; /* Навигационное меню по центру */
            margin-left: 0; /* Убрано смещение влево */
            font-size: 1rem;
        }

        main {
            flex: 1; /* Основное содержимое занимает оставшуюся часть экрана */
            padding-left: 0rem; /* Отступ от левой части */
        }
    }

    /* Определение кастомных CSS переменных */
    :root {
        --color-background-soft: #f0f0f0;
        --color-border: #ddd;
        --color-text: #333;
    }
    .auth-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.auth-modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    width: 400px;
    max-width: 90%;
    position: relative;
}

.close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 24px;
    cursor: pointer;
}

.auth-methods {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.auth-methods button {
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.auth-methods button:first-child {
    background-color: #4285F4;
    color: white;
}

.auth-methods form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.auth-methods input {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

.divider {
    text-align: center;
    margin: 10px 0;
    position: relative;
}

.divider::before, .divider::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid #ddd;
    position: absolute;
    top: 50%;
    width: 45%;
}

.divider::before {
    left: 0;
}

.divider::after {
    right: 0;
}
</style>