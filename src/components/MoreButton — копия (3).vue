<template>
  <div class="page-wrapper">
    <div class="more-button">
      <div class="content">
        <img :src="imageSrc" alt="Image" class="image" v-if="imageSrc" />
        <div class="text">
          <div v-if="initialText" v-html="initialText"></div>
          <button @click="toggleDetails">
            {{ buttonText }}
          </button>
        </div>
      </div>
      <div v-if="showDetails" class="details">
        <div v-html="formattedDescription"></div>
      </div>
    </div>
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

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
      default: ''
    }
  },
  data() {
    return {
      showDetails: false,
      description: '',
      initialText: '',
      buttonText: 'подробнее',
      md: new MarkdownIt({
        highlight: function (str, lang) {
          if (lang && hljs.getLanguage(lang)) {
            try {
              return hljs.highlight(str, { language: lang }).value;
            } catch (__) {}
          }
          return '';
        }
      })
    };
  },
  computed: {
    formattedDescription() {
      return this.md.render(this.description);
    }
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
      this.buttonText = this.showDetails ? 'свернуть' : 'подробнее';

      if (this.showDetails && !this.description) {
        this.loadFullDescription();
      }
    },
    async loadInitialText() {
      try {
        const response = await fetch(`/${this.fileName}`);
        if (!response.ok) throw new Error('Ошибка загрузки файла');
        const text = await response.text();
        const initialText = this.extractInitialText(text);
        this.initialText = this.md.render(initialText);
      } catch (error) {
        console.error('Ошибка:', error);
        this.initialText = this.md.render('Не удалось загрузить описание.');
      }
    },
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
    extractInitialText(text) {
      const secondHeaderIndex = this.findNthOccurrence(text, '#', 2);
      if (secondHeaderIndex !== -1) {
        return text.slice(0, secondHeaderIndex).trim();
      }
      return text.trim();
    },
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
      return -1;
    }
  },
  mounted() {
    this.loadInitialText();
  }
};
</script>

<style scoped>
/* Глобальные стили */
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #f5f5f5;
  font-family: Arial, sans-serif;
}

.page-wrapper {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 6px;
  box-sizing: border-box;
}

.more-button {
  width: 100%;
  background: white;
  border-radius: 4px;
  padding: 12px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}

.image {
  width: 100%;
  height: auto;
  border-radius: 2px;
  object-fit: contain;
}

.text {
  width: 100%;
  text-align: left;
  padding: 0 2px;
}

button {
  padding: 6px 12px;
  background: #4285f4;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 14px;
  margin-top: 8px;
  transition: background-color 0.2s;
}

button:hover {
  background: #3367d6;
}

.details {
  width: 100%;
  margin-top: 8px;
  padding: 8px;
  border: 1px solid #e0e0e0;
  border-radius: 3px;
  background: #fafafa;
}

.details >>> pre {
  overflow-x: auto;
  padding: 8px;
  background: #f5f5f5;
  border-radius: 2px;
  margin: 4px 0;
}

/* Адаптация для планшетов */
@media (min-width: 768px) {
  .page-wrapper {
    padding: 8px;
  }
  
  .more-button {
    padding: 16px;
  }
  
  .content {
    flex-direction: row;
    gap: 12px;
  }
  
  .image {
    width: 45%;
    max-width: 280px;
  }
  
  .text {
    width: 55%;
  }
}

/* Адаптация для десктопов */
@media (min-width: 1024px) {
  .page-wrapper {
    max-width: 1200px;
    padding: 10px;
  }
  
  .more-button {
    padding: 20px;
  }
  
  .content {
    gap: 16px;
  }
  
  .image {
    max-width: 320px;
  }
}
</style>