<script setup>
// Импорт компонентов и иконок, используемых в этом файле
import WelcomeItem from './WelcomeItem.vue' // Компонент для отображения элементов приветствия
import DocumentationIcon from './icons/IconDocumentation.vue' // Иконка для документации
import ToolingIcon from './icons/IconTooling.vue' // Иконка для инструментов
import EcosystemIcon from './icons/IconEcosystem.vue' // Иконка для экосистемы
import CommunityIcon from './icons/IconCommunity.vue' // Иконка для сообщества
import SupportIcon from './icons/IconSupport.vue' // Иконка для поддержки


import ImageModal from './ImageModal.vue';
import MoreButton from './MoreButton.vue';

</script>

<template>

    <div id="morebutton">
        <!-- Используем компонент с указанием файла -->
        <MoreButton fileName="./text/описание.txt" imageSrc="./images/Image.jpg" />
        <!-- Можно использовать другой файл -->
        <MoreButton fileName="./text/другое-описание.txt" imageSrc="./images/Image1.jpg" />
    </div>

    <div class="container">
        <div class="image-container">
            <ImageModal imageSrc="./images/Image.jpg" imageWidth="150px" />
        </div>
        <div class="image-container">
            <ImageModal imageSrc="./images/Imagevag.jpg" imageWidth="150px" />
        </div>
        <div class="image-container">
            <ImageModal imageSrc="./images/Image1.jpg" imageWidth="150px" />
        </div>
    </div>

    <!-- Компонент WelcomeItem для отображения раздела "Documentation" -->
    <WelcomeItem>
        <!-- Иконка для раздела "Documentation" -->
        <template #icon>
            <DocumentationIcon />
        </template>
        <!-- Заголовок раздела -->
        <template #heading>
            Documentation
        </template>

        <!-- Текст с ссылкой на официальную документацию Vue.js -->
        Vue’s
        <a target="_blank" href="https://vuejs.org/">official documentation</a>
        provides you with all information you need to get started.
    </WelcomeItem>


</template>

<style>
    #morebutton {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

  
    .container {
        display: flex;
        justify-content: space-around; /* Равномерное распределение пространства между элементами */
        align-items: center; /* Выравнивание элементов по центру по вертикали */
        flex-wrap: wrap; /* Позволяет элементам переноситься на следующую строку, если не хватает места */
    }

    .image-container {
        margin: 10px; /* Отступы между изображениями */
    }

</style>
