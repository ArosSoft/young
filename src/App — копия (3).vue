<template>
    <header>
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
            padding-left: 2rem; /* Отступ от левой части */
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
</script>