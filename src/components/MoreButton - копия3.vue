<template>
    <div class="more-button">
        <div class="content">
            <!-- Изображение -->
            <img :src="imageSrc" alt="Image" class="image" v-if="imageSrc" />
            <div class="text">
                <!-- Первый абзац текста в формате markdown -->
                <div v-if="firstParagraph" v-html="firstParagraph"></div>
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
      firstParagraph: '', // Первый абзац текста в формате HTML
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
    // Загрузка первого абзаца при монтировании компонента
    async loadFirstParagraph() {
      try {
        const response = await fetch(`/${this.fileName}`);
        if (!response.ok) throw new Error('Ошибка загрузки файла');
        const text = await response.text();
        // Извлекаем первый абзац и преобразуем его в markdown
        const firstParagraphText = this.extractFirstParagraph(text);
        this.firstParagraph = marked(firstParagraphText); // Преобразуем в HTML
      } catch (error) {
        console.error('Ошибка:', error);
        this.firstParagraph = marked('Не удалось загрузить описание.'); // Преобразуем в HTML
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
    // Метод для извлечения первого абзаца
    extractFirstParagraph(text) {
      // Ищем первый абзац (текст до двух переносов строк)
      const firstParagraphMatch = text.match(/^(.*?)\n\n/s);
      return firstParagraphMatch ? firstParagraphMatch[1].trim() : text.trim();
    }
  },
  // Загружаем первый абзац при монтировании компонента
  mounted() {
    this.loadFirstParagraph();
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