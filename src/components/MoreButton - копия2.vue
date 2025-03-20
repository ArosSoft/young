<template>
    <div class="more-button">
        <div class="content">
            <!-- Изображение -->
            <img :src="imageSrc" alt="Image" class="image" v-if="imageSrc" />
            <div class="text">
                <!-- Кнопка -->
                <button @click="toggleDetails">
                    {{ buttonText }}
                </button>
                <!-- Первый абзац текста -->
                <p v-if="firstParagraph">{{ firstParagraph }}</p>
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
                firstParagraph: '', // Первый абзац текста
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
                    // Загружаем содержимое файла
                    const response = await fetch(`/${this.fileName}`);
                    if (!response.ok) throw new Error('Ошибка загрузки файла');
                    const text = await response.text();

                    // Сохраняем полный текст
                    this.description = text;

                    // Извлекаем первый абзац
                    this.firstParagraph = this.extractFirstParagraph(text);
                } catch (error) {
                    console.error('Ошибка:', error);
                    this.description = 'Не удалось загрузить описание.';
                    this.firstParagraph = 'Не удалось загрузить описание.';
                }
            },
            // Метод для извлечения первого абзаца
            extractFirstParagraph(text) {
                // Ищем первый абзац (текст до двух переносов строк)
                const firstParagraphMatch = text.match(/^(.*?)\n\n/s);
                return firstParagraphMatch ? firstParagraphMatch[1].trim() : text.trim();
            }
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
        margin-bottom: 10px;
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