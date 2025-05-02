import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue' // Компонент для отображения главной страницы
import AboutPage from '../views/AboutPage.vue' // Компонент для страницы "О нас"
import TheWelcome from '../components/TheWelcome.vue' // Компонент для страницы "Добро пожаловать"
import Neuroart from '../views/Neuroart.vue' // Компонент для страницы "Нейро-арт"
import Graffiti from '../views/Graffiti.vue' // Компонент для страницы "Граффити"
import Volonter from '../views/Volonter.vue' 
import Maker from '../views/Maker.vue' 
import MakeProject from '../views/MakeProject.vue' 

// Создание маршрутизатора с определением маршрутов для каждого пути
const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL), // Используется hash-режим для совместимости
    routes: [
        {
            path: '/', // Путь для главной страницы
            name: 'home', // Имя маршрута
            component: HomePage // Компонент, который будет отображаться
        },
        {
            path: '/about', // Путь для страницы "О нас"
            name: 'about', // Имя маршрута
            component: AboutPage // Компонент, который будет отображаться
        },
        {
            path: '/welcome', // Путь для страницы "Добро пожаловать"
            name: 'welcome', // Имя маршрута
            component: TheWelcome // Компонент, который будет отображаться
        },
        {
            path: '/neuroart', // Путь для страницы "Нейро-арт"
            name: 'neuroart', // Имя маршрута
            component: Neuroart // Компонент, который будет отображаться
        },
        {
            path: '/graffiti', // Путь для страницы "Граффити"
            name: 'graffiti', // Имя маршрута
            component: Graffiti // Компонент, который будет отображаться
        },
        {
            path: '/volonter', // Путь для страницы "Волонтер"
            name: 'volonter', // Имя маршрута
            component: Volonter // Компонент, который будет отображаться
        },
        {
            path: '/maker', // Путь для страницы "Волонтер"
            name: 'maker', // Имя маршрута
            component: Maker // Компонент, который будет отображаться
        },
        {
            path: '/makeProject', // Путь для страницы "Проекты"
            name: 'make', // Имя маршрута
            component: MakeProject // Компонент, который будет отображаться
        }
    ]
})

// Экспорт маршрутизатора для использования в приложении
export default router