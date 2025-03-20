<template>
    <div class="more-button">
      <button @click="toggleDetails">
        {{ buttonText }}
      </button>
      <div v-if="showDetails" class="details">
        <div v-html="formattedDescription"></div>
      </div>
    </div>
  </template>
  
  <script>
  import { marked } from 'marked';
  
  export default {
    name: 'MoreButton', // Название компонента
    props: {
      // Параметр для названия текстового файла
      fileName: {
        type: String,
        required: true,
        default: 'описание.txt' // Значение по умолчанию
      }
    },
    data() {
      return {
        showDetails: false,
        description: '', // Текст из файла
        buttonText: 'подробнее'
      };
    },
    computed: {
      // Преобразуем markdown в HTML
      formattedDescription() {
        return marked(this.description);
      }
    },
    methods: {
      toggleDetails() {
        this.showDetails = !this.showDetails;
        this.buttonText = this.showDetails ? 'свернуть' : 'подробнее';
  
        // Загружаем содержимое файла только при первом нажатии
        if (this.showDetails && !this.description) {
          this.loadDescription();
        }
      },
      async loadDescription() {
        try {
          // Загружаем содержимое файла, указанного в параметре fileName
          const response = await fetch(`/${this.fileName}`);
          if (!response.ok) throw new Error('Ошибка загрузки файла');
          this.description = await response.text();
        } catch (error) {
          console.error('Ошибка:', error);
          this.description = 'Не удалось загрузить описание.';
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .more-button {
    text-align: center;
    margin-top: 50px;
  }
  
  button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    margin-bottom: 20px;
  }
  
  .details {
    margin-top: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
    text-align: left;
  }
  </style>
  