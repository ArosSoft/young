<template>
    <div class="more-button">
        <div class="content">
            <!-- Изображение -->
            <img :src="imageSrc" alt="Image" class="image" v-if="imageSrc" />
            <div class="text">
                <!-- Текст от начала до второго # -->
                <div v-if="initialText" v-html="initialText"></div>
                <!-- Кнопка -->
                <button @click="toggleDetails">
                    {{ buttonText }}
                </button>
            </div>
        </div>
        <!-- Подробное описание -->
        <div v-if="showDetails" class="details">
            <div v-html="formattedDescription"></div>
        </div>
    </div>
</template>

<script>
import { marked } from 'marked';

export default {
  name: 'MoreButton',
  props: {
    fileName: {
      type: String,
      required: true,
      default: 'описание.txt'
    },
    imageSrc: {
      type: String,
      default: '' // Путь к изображению (необязательный параметр)
    }
  },
  data() {
    return {
      showDetails: false,
      description: '', // Полный текст из файла
      initialText: '', // Текст от начала до второго #
      buttonText: 'подробнее'
    };
  },
  computed: {
    // Преобразуем markdown в HTML для полного описания
    formattedDescription() {
      return marked(this.description);
    }
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
      this.buttonText = this.showDetails ? 'свернуть' : 'подробнее';

      // Загружаем полное описание только при первом нажатии
      if (this.showDetails && !this.description) {
        this.loadFullDescription();
      }
    },
    // Загрузка текста от начала до второго # при монтировании компонента
    async loadInitialText() {
      try {
        const response = await fetch(`/${this.fileName}`);
        if (!response.ok) throw new Error('Ошибка загрузки файла');
        const text = await response.text();
        // Извлекаем текст от начала до второго #
        const initialText = this.extractInitialText(text);
        this.initialText = marked(initialText); // Преобразуем в HTML
      } catch (error) {
        console.error('Ошибка:', error);
        this.initialText = marked('Не удалось загрузить описание.'); // Преобразуем в HTML
      }
    },
    // Загрузка полного описания
    async loadFullDescription() {
      try {
        const response = await fetch(`/${this.fileName}`);
        if (!response.ok) throw new Error('Ошибка загрузки файла');
        this.description = await response.text();
      } catch (error) {
        console.error('Ошибка:', error);
        this.description = 'Не удалось загрузить описание.';
      }
    },
    // Метод для извлечения текста от начала до второго #
    extractInitialText(text) {
      // Ищем второе вхождение #
      const secondHeaderIndex = this.findNthOccurrence(text, '#', 2);
      // Если второе вхождение найдено, берем текст до него
      if (secondHeaderIndex !== -1) {
        return text.slice(0, secondHeaderIndex).trim();
      }
      // Если второго # нет, возвращаем весь текст
      return text.trim();
    },
    // Метод для поиска n-го вхождения символа
    findNthOccurrence(text, char, n) {
      let count = 0;
      for (let i = 0; i < text.length; i++) {
        if (text[i] === char) {
          count++;
          if (count === n) {
            return i;
          }
        }
      }
      return -1; // Если n-ное вхождение не найдено
    }
  },
  // Загружаем текст от начала до второго # при монтировании компонента
  mounted() {
    this.loadInitialText();
  }
};
</script>

<style scoped>
    .more-button {
        text-align: center;
        margin-top: 50px;
    }

    .content {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px; /* Расстояние между изображением и текстом */
    }

    .image {
        max-width: 100px; /* Размер изображения */
        height: auto;
        border-radius: 5px;
    }

    .text {
        text-align: left;
    }

    button {
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        margin-top: 10px; /* Отступ между текстом и кнопкой */
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