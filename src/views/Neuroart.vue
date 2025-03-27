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
        <MoreButton fileName="./young/text/t1.txt" imageSrc="./images/Image.jpg" />
        <!-- Можно использовать другой файл -->
        <MoreButton fileName="./young/text/t2.txt" imageSrc="./images/Image1.jpg" />
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

        <div class="image-container">
            <ImageModal imageSrc="./images/10.jpeg" imageWidth="150px" />
            in the style of ck-mgs, nistyle, Special Ink-drawing mode, intricate linework with expressive contrasts, Mh1$AgThS2, Inkplash art on rice paper, sepia, henna , Silhouette Art, magnificent, inksplash closeup portrait of stunning japanese female sc-fi soldier, helmet, mirrored visor reflecting jungle environment

        </div>
        <div class="image-container">
            <ImageModal imageSrc="./images/11.png" imageWidth="150px" />
            bmstyle anime "A human head made of translucent, crystallized material shatters outward, with shards transforming into a burst of vibrant flowers. The flowers are varied in color and species, blooming mid-air as if born from the explosion. Soft light refracts through the crystal fragments, creating a surreal, dreamlike atmosphere."

        </div>
        <div class="image-container">
            <ImageModal imageSrc="./images/12.jpeg" imageWidth="150px" />
            Masterpiece, absurdres, best quality, 1boy, solo, Scrat, long snout, bushy tail, bulging eyes, striped tail, space marine, power armor, firing gun, heavy bolter, battlefield background, closeup, UltraM40k, no helmet, acorn insignia,

        </div>
        <div class="image-container">
            <ImageModal imageSrc="./images/15.jpeg" imageWidth="150px" />
            Masterpiece, absurdres, best quality, 1boy, solo, ch1ken, chicken, long beak, cartoon, space marine, power armor, firing gun, heavy bolter, battlefield background, closeup, UltraM40k, no helmet,

        </div>
        <div class="image-container">
            <ImageModal imageSrc="./images/16.jpeg" imageWidth="150px" />

        </div>
        <div class="image-container">
            <ImageModal imageSrc="./images/17.jpeg" imageWidth="150px" />

        </div>
        <div class="image-container">
            <ImageModal imageSrc="./images/18.png" imageWidth="150px" />
            
        </div>

<div class="image-container">
  <div class="content-wrapper">
    <ImageModal imageSrc="./images/12.jpeg" imageWidth="150px" />
    <div class="text-content">
      Masterpiece, absurdres, best quality, 1boy, solo, Scrat, long snout, bushy tail, 
      bulging eyes, striped tail, space marine, power armor, firing gun, heavy bolter, 
      battlefield background, closeup, UltraM40k, no helmet, acorn insignia
    </div>
  </div>
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

  margin: 20px 0;
}

.content-wrapper {
  display: flex;
  align-items: flex-start; /* Выравнивание по верхнему краю */
  gap: 20px; /* Расстояние между изображением и текстом */
}

.text-content {
  flex: 1; /* Текст занимает все оставшееся пространство */
  text-align: left;
  word-wrap: break-word; /* Перенос длинных слов */
}

</style>
