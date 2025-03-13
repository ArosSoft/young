import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue' // Импорт компонента для домашней страницы
import AboutPage from '../views/AboutPage.vue' // Импорт компонента для страницы "О нас"
import TheWelcome from '../components/TheWelcome.vue' // Импорт компонента для страницы "Добро пожаловать"
import Neuroart from '../components/Neuroart.vue' // Импорт компонента для страницы "Нейро-арт"
import Graffiti from '../components/Graffiti.vue' // Импорт компонента для страницы "Графити"

// Создание роутера с использованием истории на основе хэша
const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL), // Использование хэш-режима для истории маршрутов
    routes: [
        {
            path: '/', // Маршрут для домашней страницы
            name: 'home', // Имя маршрута
            component: HomePage // Компонент, который будет отображаться
        },
        {
            path: '/about', // Маршрут для страницы "О нас"
            name: 'about', // Имя маршрута
            component: AboutPage // Компонент, который будет отображаться
        },
        {
            path: '/welcome', // Маршрут для страницы "Добро пожаловать"
            name: 'welcome', // Имя маршрута
            component: TheWelcome // Компонент, который будет отображаться
        },
        {
            path: '/neuroart', // Маршрут для страницы "нейро-арт"
            name: 'neuroart', // Имя маршрута
            component: Neuroart // Компонент, который будет отображаться
        },
        {
            path: '/graffiti', // Маршрут для страницы "Граффити"
            name: 'graffiti', // Имя маршрута
            component: Graffiti // Компонент, который будет отображаться
        }
    ]
})

// Экспорт роутера для использования в приложении
export default router