<script setup>

import ImageModal from '/src/components/ImageModal.vue';
import MoreButton from '/src/components/MoreButton.vue';

</script>

<template>
    <div id="morebutton">
        <!-- Используем компонент с указанием файла -->
        <MoreButton fileName="./young/public/text/g1.txt" imageSrc="./images/cat.jpeg" />
    </div>
<div>
<h1>Сайты по граффити</h1>

<ol>
  <li>Сайт <a href="https://www.mage.space/" target="_blank" rel="noopener noreferrer">MAGE.SPACE</a> генерирует картинки и видео. Бесплатно!!!
</li>

</ol>
  <h1> Граффити г. Липецка </h1>

</div>

<div class="container">
    <!-- Одиночные изображения -->
    <div class="single-image">
        <ImageModal imageSrc="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/94f45c4a-cc69-4041-86af-90a7bf287110/original=true,quality=90/image%20(14).jpeg" imageWidth="150px" />
    </div>
</div>
    <h1> Художники г. Липецка </h1>
    <!-- Изображения с текстом (промпты) -->
    <div class="prompt-item">
        <ImageModal imageSrc="./images/10.jpeg" imageWidth="150px" />
        <div class="prompt-text">
            in the style of ck-mgs, nistyle, Special Ink-drawing mode, intricate linework with expressive contrasts, Mh1$AgThS2, Inkplash art on rice paper, sepia, henna , Silhouette Art, magnificent, inksplash closeup portrait of stunning japanese female sc-fi soldier, helmet, mirrored visor reflecting jungle environment
        </div>


</div>
</template>

<style>

h1 {
  text-align: center;
  margin: 20px 0;
}

ol {
  margin: 20px 0;
  padding-left: 40px;
}

ol li {
  margin: 10px 0;
  padding: 8px 0;
}

    #morebutton {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 0px;
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
        gap: 10px;
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