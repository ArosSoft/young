<template>
    <header>
        <!-- Кнопка входа в левом верхнем углу -->
        <div class="auth-button">
            <button v-if="!user" @click="signIn">Войти</button>
            <div v-else class="user-info">
                <span>{{ user.displayName }}</span>
                <button @click="signOut">Выйти</button>
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


    <!-- Основное содержимое страницы, которое будет меняться в зависимости от маршрута -->
    <main>
        <router-view />
    </main>

    <!-- Футер сайта -->
    <TheFooter />

</template>

<script setup>
    // Импорт компонентов

    import HelloWorld from './components/HelloWorld.vue'
    import TheFooter from './components/TheFooter.vue'

import { ref, onMounted } from 'vue';
import { auth, GoogleAuthProvider, signInWithPopup, signOut } from './firebase';

const user = ref(null);

onMounted(() => {
    auth.onAuthStateChanged((authUser) => {
        user.value = authUser;
    });
});

const signIn = async () => {
    try {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
    } catch (error) {
        console.error("Ошибка входа:", error);
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
</style>