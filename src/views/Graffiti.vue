<script setup>

import ImageModal from '/src/components/ImageModal.vue';
import MoreButton from '/src/components/MoreButton.vue';

</script>

<template>
    <div id="morebutton">
        <!-- Используем компонент с указанием файла -->
        <MoreButton fileName="./young/text/g1.txt" imageSrc="./images/cat.jpeg" />
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
        <ImageModal imageSrc="./images/G101.jpg" imageWidth="150px" />
    </div>
</div>
    <h1> Художники г. Липецка </h1>
    <!-- Изображения с текстом (промпты) -->
    <div class="prompt-item">
        <ImageModal imageSrc="./images/G1.jpg" imageWidth="150px" />
        <div class="prompt-text">
            Дмитрий Савоста - уличный художник, создавший в Липецке много действительно достойных граффити. Если вы идете по улице и видите красивый рисунок на стене кафе или дома, вероятнее всего - это его работа.Дмитрий убежден, что стрит-арт — это тоже искусство, если к нему подходить разумно и творчески.

        </div> 
</div>

<div class="prompt-item">
        <ImageModal imageSrc="./images/G2.jpg" imageWidth="150px" />
        <div class="prompt-text">
            Владимир Кулик говорил: «В течение года чувствовал себя «звездой», обо мне писали мировые СМИ, пригласили в Индию, у меня появилась аудитория, коллаборация с брендами. Параллельно рисовал холсты, занимался одеждой».С подобным уровнем сложности (задействовано более 1000 элементов изображения) граффити с дополненной реальностью (AR) в России еще не было.

        </div> 
</div>
<div class="prompt-item">
        <ImageModal imageSrc="./images/G3.jpg" imageWidth="150px" />
        <div class="prompt-text">
            Данил Белый. При поддержке благотворительного фонда «Милосердие» на одной из центральных улиц Липецка открыли новое граффити с 13-метровым изображением бегущего легкоатлета. По замыслу авторов, оно пропагандирует здоровый образ жизни и призывает активно заниматься бегом.
        </div> 
</div>

<div class="prompt-item">
        <ImageModal imageSrc="./images/G4.jpg" imageWidth="150px" />
        <div class="prompt-text">
            Елизавета Рыжкова. Граффити на фасаде дома №30 по улице Космонавтов появилось в рамках проекта грантовой программы «Стальное дерево». Его авторы - липецкие художники Данил Белый и Елизавета Рыжкова

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