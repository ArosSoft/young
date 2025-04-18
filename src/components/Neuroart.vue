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
Странно...
    <div id="morebutton">
        <!-- Используем компонент с указанием файла -->
        <MoreButton fileName="./text/t1.txt" imageSrc="./images/Image.jpg" />
        <!-- Можно использовать другой файл -->
        <MoreButton fileName="./text/t2.txt" imageSrc="./images/Image1.jpg" />
    </div>

    <div class="container">
        <!-- Одиночные изображения -->
        <div class="single-image">
            <ImageModal imageSrc="./images/Image.jpg" imageWidth="150px" />
        </div>
        <div class="single-image">
            <ImageModal imageSrc="./images/Imagevag.jpg" imageWidth="150px" />
        </div>
        <div class="single-image">
            <ImageModal imageSrc="./images/Image1.jpg" imageWidth="150px" />
        </div>
        <div class="single-image">
            <ImageModal imageSrc="./images/16.jpeg" imageWidth="150px" />
        </div>
        <div class="single-image">
            <ImageModal imageSrc="./images/17.jpeg" imageWidth="150px" />
        </div>
        <div class="single-image">
            <ImageModal imageSrc="./images/18.png" imageWidth="150px" />
        </div>
        <div class="single-image">
            <ImageModal imageSrc="./images/1.jpg" imageWidth="150px" />
        </div>

        <!-- Изображения с текстом (промпты) -->
        <div class="prompt-item">
            <ImageModal imageSrc="./images/10.jpeg" imageWidth="150px" />
            <div class="prompt-text">
                in the style of ck-mgs, nistyle, Special Ink-drawing mode, intricate linework with expressive contrasts, Mh1$AgThS2, Inkplash art on rice paper, sepia, henna , Silhouette Art, magnificent, inksplash closeup portrait of stunning japanese female sc-fi soldier, helmet, mirrored visor reflecting jungle environment
            </div>
        </div>
        
        <div class="prompt-item">
            <ImageModal imageSrc="./images/11.png" imageWidth="150px" />
            <div class="prompt-text">
                bmstyle anime "A human head made of translucent, crystallized material shatters outward, with shards transforming into a burst of vibrant flowers. The flowers are varied in color and species, blooming mid-air as if born from the explosion. Soft light refracts through the crystal fragments, creating a surreal, dreamlike atmosphere."
            </div>
        </div>
        
        <div class="prompt-item">
            <ImageModal imageSrc="./images/12.jpeg" imageWidth="150px" />
            <div class="prompt-text">
                Masterpiece, absurdres, best quality, 1boy, solo, Scrat, long snout, bushy tail, bulging eyes, striped tail, space marine, power armor, firing gun, heavy bolter, battlefield background, closeup, UltraM40k, no helmet, acorn insignia
            </div>
        </div>
        
        <div class="prompt-item">
            <ImageModal imageSrc="./images/15.jpeg" imageWidth="150px" />
            <div class="prompt-text">
                Masterpiece, absurdres, best quality, 1boy, solo, ch1ken, chicken, long beak, cartoon, space marine, power armor, firing gun, heavy bolter, battlefield background, closeup, UltraM40k, no helmet
            </div>
        </div>
        
        <div class="prompt-item">
            <ImageModal imageSrc="./images/2.jpg" imageWidth="150px" />
            <div class="prompt-text">
                A dove stands on two legs in an aristocratic coat and spy glasses on the tenth street of a dark city in the middle of a dark night
            </div>
        </div>
    </div>

    <WelcomeItem>
        <template #icon>
            <DocumentationIcon />
        </template>
        <template #heading>
            Documentation
        </template>
        Vue's
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
        flex-wrap: wrap;
        justify-content: center;
        gap: 30px;
        padding: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }

    .single-image {
        margin: 10px;
        display: flex;
        justify-content: center;
        width: 150px;
    }

    .prompt-item {
        display: flex;
        align-items: flex-start;
        gap: 20px;
        width: 100%;
        max-width: 800px;
        margin: 15px 0;
        padding: 15px;
        background: #f8f8f8;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }

    .prompt-text {
        flex: 1;
        text-align: left;
        word-wrap: break-word;
        padding: 10px;
        font-size: 14px;
        color: #333;
        line-height: 1.5;
    }

    @media (max-width: 768px) {
        .prompt-item {
            flex-direction: column;
            align-items: center;
        }
        
        .prompt-text {
            max-width: 100%;
            padding: 10px 0;
        }
    }
</style>