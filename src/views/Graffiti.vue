<script setup>
// Импорт компонентов и иконок, используемых в этом файле
import ImageModal from '/src/components/ImageModal.vue';
import MoreButton from '/src/components/MoreButton.vue';
import WelcomeItem from '/src/components/WelcomeItem.vue';  
</script>

<template>
   <div id="morebutton">
        <!-- Используем компонент с указанием файла -->
        <MoreButton fileName="./young/public/text/t1.txt" imageSrc="./images/Image.jpg" />
        
    </div>


    <div class="image-container">
  <div class="content-wrapper">
    <ImageModal imageSrc="./images/Image.jpg" imageWidth="300px" />
    <div class="text-content">
      Вася Пупкин
    </div>
  </div>
</div>
 
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