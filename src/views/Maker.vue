<script setup>
    import ImageModal from '/src/components/ImageModal.vue';
    import MoreButton from '/src/components/MoreButton.vue';
    import { ref } from 'vue';
    import { marked } from 'marked';

    const isArticleExpanded = ref(false);
    const toggleArticle = () => {
        isArticleExpanded.value = !isArticleExpanded.value;
    };

    // Добавляем обработчик Markdown
    const renderMarkdown = (text) => {
        return marked(text || '');
    };
</script>


<template>
    <div class="podelki-container">
        <h1>Мастерская мэйкера</h1>

        <!-- Компонент для общения с AI (адаптированный из Volonter.vue) -->
        <div class="ai-helper">
            <h3>Нужна помощь с поделками?</h3>
            <p>Задайте вопрос нашему помощнику:</p>

            <div class="request-section">
                <textarea v-model="userRequest"
                          placeholder="Например: Как сделать бумажный кораблик?"
                          class="request-input"></textarea>
                <button @click="sendRequestToMistral"
                        :disabled="isLoading"
                        class="send-button">
                    {{ isLoading ? 'Отправка...' : 'Спросить' }}
                </button>
            </div>

            <div class="response-section" v-if="response">
                <div class="response-content" v-html="renderMarkdown(formattedResponse)"></div>
            </div>

            <div v-if="error" class="error-message">
                Ошибка: {{ error }}
            </div>
        </div>
        <br />
        <div class="article-container">
            <!-- Статья о самолетике из бумаги -->
            <article class="craft-article">
                <div class="article-header" @click="toggleArticle" style="cursor: pointer;">
                    <h2>Бумажный самолетик</h2>
                    <button class="toggle-button">
                        {{ isArticleExpanded ? 'Свернуть' : 'Подробнее' }}
                    </button>
                </div>

                <div v-if="isArticleExpanded">
                    <div class="article-meta">
                        <span class="difficulty">Сложность: ★☆☆☆☆</span>
                        <span class="time">Время: 5 минут</span>
                    </div>

                    <div class="materials-section">
                        <h3>📦 Материалы</h3>
                        <ul>
                            <li>Лист бумаги А4 (можно цветной)</li>
                        </ul>
                    </div>

                    <div class="tools-section">
                        <h3>🛠️ Инструменты</h3>
                        <ul>
                            <li>Руки</li>
                            <li>Ровная поверхность для складывания</li>
                        </ul>
                    </div>

                    <div class="steps-section">
                        <h3>📝 Пошаговая инструкция</h3>
                        <ol>
                            <li>
                                Возьмите лист бумаги формата А4.
                                <div class="single-image">
                                    <ImageModal imageSrc="./images/1.jpg" alt="Шаг 1" imageWidth="100px" />
                                </div>
                            </li>
                            <li>Сложите лист пополам вдоль длинной стороны, затем разверните.</li>
                            <li>Верхние углы загните к центральной линии.</li>
                            <li>Снова загните новые углы к центру.</li>
                            <li>Сложите самолетик пополам по центральной линии.</li>
                            <li>Загните крылья, оставив примерно 1 см снизу для корпуса.</li>
                            <li>Расправьте крылья под прямым углом к корпусу.</li>
                        </ol>
                    </div>

                    <div class="images-section">
                        <h3>📷 Фотографии процесса</h3>
                        <div class="container">
                            <!-- Одиночные изображения -->
                            <div class="single-image">
                                <ImageModal imageSrc="./images/1.jpg" alt="Шаг 1" imageWidth="100px" />
                            </div>
                            <div class="single-image">
                                <ImageModal imageSrc="./images/2.jpg" alt="Шаг 2" imageWidth="100px" />
                            </div>
                            <div class="single-image">
                                <ImageModal imageSrc="./images/3.jpg" alt="Шаг 3" imageWidth="100px" />
                            </div>
                        </div>
                    </div>

                    <div class="video-section">
                        <h3>🎥 Видеоинструкция</h3>
                        <div class="video-wrapper">
                            <iframe width="720" height="405" src="https://rutube.ru/play/embed/e71e95f0b8fd215e7d3907daa2b563dd/"
                                    frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>
                        </div>
                    </div>

                    <div class="tips-section">
                        <h3>💡 Советы</h3>
                        <ul>
                            <li>Для лучшего полета делайте крылья узкими и длинными.</li>
                            <li>Попробуйте разные виды бумаги для сравнения результатов.</li>
                            <li>Добавьте небольшой вес в нос самолетика (скрепку) для стабильности.</li>
                        </ul>
                    </div>

                    <div class="thanks-section">
                        <h3>🙏 Благодарности</h3>
                        <p>Спасибо волонтерам детского центра "Солнышко" за идею и тестирование этой инструкции.</p>
                    </div>
                </div>
            </article>

            <!-- Дополнительные статьи можно добавить здесь -->
        </div>
    </div>
</template>

<script>
    import { marked } from 'marked';

    export default {
        name: 'Podelki',
        data() {
            return {
                userRequest: '',
                response: null,
                isLoading: false,
                error: null
            }
        },
        methods: {
            async sendRequestToMistral() {
                if (!this.userRequest.trim()) {
                    this.error = 'Пожалуйста, введите ваш вопрос';
                    return;
                }

                this.isLoading = true;
                this.error = null;
                this.response = null;

                try {
                    const apiKey = import.meta.env.VITE_MISTRAL_API_KEY;
                    if (!apiKey) throw new Error('API-ключ не найден');

                    const response = await fetch('https://api.mistral.ai/v1/chat/completions', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${apiKey}`
                        },
                        body: JSON.stringify({
                            model: "mistral-medium",
                            messages: [
                                {
                                    role: "system",
                                    content: `Ты помощник для волонтеров, специализирующийся на простых поделках для детей.
                Отвечай подробно, с пошаговыми инструкциями и ссылками на фото и видео на rutube.ru. После каждого шага предложи фото. Если нужны материалы или инструменты - перечисли их в начале.
                Используй формат:

                ### Материалы:
                - список материалов

                ### Инструменты:
                - список инструментов

                ### Инструкция:
                1. Шаг 1
                2. Шаг 2
                ...

                ### Советы:
                - полезные советы

                Будь дружелюбным и поддерживающим!`
                                },
                                { role: "user", content: this.userRequest }
                            ],
                            temperature: 0.7
                        })
                    });

                    if (!response.ok) throw new Error(`Ошибка HTTP: ${response.status}`);

                    const data = await response.json();
                    this.response = data.choices[0]?.message?.content || "Не удалось получить ответ";

                } catch (err) {
                    this.error = `Ошибка: ${err.message}`;
                    console.error('Mistral API error:', err);
                } finally {
                    this.isLoading = false;
                }
            },
            renderMarkdown(text) {
                return marked(text || '');
            }
        },
        computed: {
            formattedResponse() {
                if (!this.response) return '';
                return this.response;
            }
        }
    }
</script>

<style scoped>
    .podelki-container {
        max-width: 1000px;
        margin: 0 auto;
        padding: 20px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
 
    }

    h1, h2, h3 {
        color: #2c3e50;
    }

    .craft-article {
        background-color: rgba(255, 255, 255, 0.9);
        border-radius: 10px;
        padding: 25px;
        margin-bottom: 30px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .article-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
    }

    .toggle-button {
        background-color: #3498db;
        color: white;
        border: none;
        padding: 8px 15px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
        transition: background-color 0.3s;
    }

        .toggle-button:hover {
            background-color: #2980b9;
        }

    .article-meta {
        display: flex;
        gap: 20px;
        margin-bottom: 20px;
        color: #7f8c8d;
        font-style: italic;
    }

    .materials-section, .tools-section, .steps-section,
    .tips-section, .thanks-section, .images-section,
    .video-section {
        margin-bottom: 25px;
        padding: 15px;
        border-radius: 8px;
    }

    .materials-section {
        background-color: #e8f4f8;
        border-left: 5px solid #3498db;
    }

    .tools-section {
        background-color: #f9f9f9;
        border-left: 5px solid #95a5a6;
    }

    .steps-section {
        background-color: #f0f7eb;
        border-left: 5px solid #2ecc71;
    }

        .steps-section ol {
            line-height: 1.8;
        }

    .tips-section {
        background-color: #fff8e1;
        border-left: 5px solid #f39c12;
    }

    .thanks-section {
        background-color: #f5e9f7;
        border-left: 5px solid #9b59b6;
        font-style: italic;
    }

    .images-section {
        background-color: #f0f0f0;
        border-left: 5px solid #e74c3c;
    }

    .image-gallery {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        margin-top: 15px;
    }

    .craft-image {
        max-width: 200px;
        height: auto;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s;
    }

        .craft-image:hover {
            transform: scale(1.05);
        }

    .video-section {
        background-color: #eaeaea;
        border-left: 5px solid #34495e;
    }

    .video-wrapper {
        position: relative;
        padding-bottom: 56.25%; /* 16:9 */
        height: 0;
        overflow: hidden;
        margin-top: 15px;
    }

        .video-wrapper iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 5px;
        }

    /* Стили для AI помощника (адаптированные из Volonter.vue) */
    .ai-helper {
        background-color: rgba(255, 255, 255, 0.9);
        border-radius: 10px;
        padding: 20px;
        margin-top: 30px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .request-input {
        width: 100%;
        min-height: 100px;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 16px;
        margin-bottom: 10px;
    }

    .send-button {
        background-color: #4CAF50;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
        transition: background-color 0.3s;
    }

        .send-button:hover {
            background-color: #45a049;
        }

        .send-button:disabled {
            background-color: #cccccc;
            cursor: not-allowed;
        }

    .response-section {
        margin-top: 20px;
        padding: 15px;
        background-color: white;
        border: 1px solid #ddd;
        border-radius: 4px;
    }

    .response-content {
        margin-top: 10px;
        padding: 10px;
        background-color: #f5f5f5;
        border-radius: 4px;
        overflow-x: auto;
    }

    .error-message {
        color: #d32f2f;
        margin-top: 15px;
        padding: 10px;
        background-color: #fde0e0;
        border-radius: 4px;
    }

    
    /* Добавьте эти стили для улучшенного отображения Markdown */
    /* Замените все вхождения > > > на :deep() */
    .response-content :deep(h1),
    .response-content :deep(h2),
    .response-content :deep(h3) {
        color: #2c3e50;
        margin: 1em 0 0.5em 0;
    }

    .response-content :deep(ul),
    .response-content :deep(ol) {
        margin: 0.5em 0;
        padding-left: 2em;
        line-height: 1.6;
    }

    .response-content :deep(li) {
        margin-bottom: 0.5em;
    }

    .response-content :deep(pre) {
        background-color: #f5f5f5;
        padding: 1em;
        border-radius: 4px;
        overflow-x: auto;
    }

    .response-content :deep(code) {
        font-family: monospace;
        background-color: #f5f5f5;
        padding: 0.2em 0.4em;
        border-radius: 3px;
    }

    .response-content :deep(blockquote) {
        border-left: 4px solid #ddd;
        padding-left: 1em;
        color: #777;
        margin: 1em 0;
    }

    .response-content :deep(a) {
        color: #3498db;
        text-decoration: none;
    }

    .response-content :deep(a:hover) {
        text-decoration: underline;
    }
</style>