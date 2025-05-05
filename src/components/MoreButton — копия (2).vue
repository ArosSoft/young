<template>
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
</template>

<script>
import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css'; // Стиль подсветки (можно выбрать другой)

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
                    return ''; // Используем кавычки по умолчанию для кода без указания языка
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
.more-button {
    text-align: center;
    margin-top: 10px;
}

.content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

.image {
    max-width: 300px;
    height: auto;
    border-radius: 10px;
}

.text {
    text-align: left;
}

button {
    padding: 10px 10px;
    font-size: 14px;
    cursor: pointer;
    margin-top: 10px;
}

.details {
    margin-top: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
    text-align: left;
}

/* Стили для подсветки синтаксиса */
.details pre code {
    border-radius: 5px;
    padding: 15px !important;
}
</style>