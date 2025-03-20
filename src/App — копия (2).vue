<template>
  <header>
    <!-- Логотип сайта -->
    <img alt="logo" class="logo" src="./assets/logo.jfif" width="320" height="250" />

    <div class="wrapper">
      <!-- Компонент HelloWorld с заголовком "ИДЕИ МОЛОДЕЖИ" -->
      <HelloWorld msg="ИДЕИ МОЛОДЕЖИ" />

      <!-- Навигационное меню -->
      <nav>
        <router-link to="/">Домой</router-link> |
        <router-link to="/about">О нас</router-link> |
        <router-link to="/welcome">Идеи молодежи</router-link> |
        <router-link to="/neuroart">Нейро-Арт</router-link> |
        <router-link to="/graffiti">Граффити</router-link>
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

<style scoped>
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
  border-left: 1px solid var(--color-border);
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
    flex-direction: column;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
  }

  main {
    flex: 1;
  }
}

/* Определение кастомных CSS переменных */
:root {
  --color-background-soft: #f0f0f0;
  --color-border: #ddd;
  --color-text: #333;
}
</style>

<script setup>
// Импорт компонентов
import HelloWorld from './components/HelloWorld.vue'
import TheFooter from './components/TheFooter.vue'
//import Neuroart from './components/Neuroart.vue'
</script>