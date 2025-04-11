<template>
    <div class="volonter-container">
        <h1>Привет, волонтер!</h1>

        <div class="ai-interface">
            <div class="request-section">
                <textarea v-model="userRequest"
                          placeholder="Введите ваш запрос для Mistral..."
                          class="request-input"></textarea>
                <button @click="sendRequestToMistral"
                        :disabled="isLoading"
                        class="send-button">
                    {{ isLoading ? 'Отправка...' : 'Отправить запрос' }}
                </button>
            </div>

            <div class="response-section" v-if="response">
                <h3>Ответ от Mistral:</h3>
                <div class="response-content">
                    <pre>{{ formattedResponse }}</pre>
                </div>
            </div>

            <div v-if="error" class="error-message">
                Ошибка: {{ error }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Volonter',
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
                    this.error = 'Пожалуйста, введите запрос';
                    return;
                }

                this.isLoading = true;
                this.error = null;
                this.response = null;

                try {
                    const apiKey = import.meta.env.VITE_MISTRAL_API_KEY;
                    if (!apiKey) throw new Error('API-ключ не найден');

                    // Форматируем запрос пользователя по шаблону
                    const formattedUserRequest = this.formatUserRequest(this.userRequest);

                    const response = await fetch('https://api.mistral.ai/v1/chat/completions', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${apiKey}`
                        },
                        body: JSON.stringify({
                            model: "mistral-medium", // mistral-tiny
                            messages: [
                                {
                                    role: "system",
                                    content: `Ты помощник для волонтеров. Отвечай строго по следующему шаблону:

                ### Шаблон ответа:
                {
                  "answer": "четкий ответ на вопрос",
                  "suggestions": ["список", "рекомендаций"],
                  "sources": ["источники", "информации"],
                  "warning": "предупреждение или ограничения ответа (если есть)"
                }`
                                },
                                { role: "user", content: formattedUserRequest }
                            ],
                            temperature: 0.7,
                            response_format: {
                                type: "json_object"
                            }
                        })
                    });

                    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

                    const data = await response.json();
                    this.response = this.formatMistralResponse(data);

                } catch (err) {
                    this.error = `Ошибка: ${err.message}`;
                    console.error('Mistral API error:', err);
                } finally {
                    this.isLoading = false;
                }
            },

            // Форматирование запроса пользователя по шаблону
            formatUserRequest(request) {
                return `Запрос волонтера:

      Тема: ${request}

      Прошу предоставить информацию по указанной теме в строгом соответствии с шаблоном ответа.
      Ответ должен быть структурированным, точным и полезным для волонтерской деятельности.`;
            },

            // Форматирование ответа от Mistral
            formatMistralResponse(data) {
                try {
                    const content = data.choices[0]?.message?.content;
                    if (!content) throw new Error('Пустой ответ от API');

                    // Пытаемся распарсить JSON
                    const parsed = JSON.parse(content);

                    // Стандартизируем ответ по шаблону
                    return {
                        answer: parsed.answer || "Нет ответа по указанной теме",
                        suggestions: Array.isArray(parsed.suggestions) ? parsed.suggestions : [],
                        sources: Array.isArray(parsed.sources) ? parsed.sources : [],
                        warning: parsed.warning || null,
                        raw: data // Сохраняем оригинальный ответ для отладки
                    };
                } catch (e) {
                    console.error('Ошибка форматирования ответа:', e);
                    return {
                        answer: "Не удалось обработать ответ от Mistral",
                        suggestions: [],
                        sources: [],
                        warning: "Ответ не соответствует ожидаемому формату",
                        raw: data
                    };
                }
            }
        },

        computed: {
            formattedResponse() {
                if (!this.response) return '';

                // Красивое форматирование ответа для отображения
                let result = `📌 Ответ:\n${this.response.answer}\n`;

                if (this.response.suggestions.length > 0) {
                    result += `\n💡 Рекомендации:\n${this.response.suggestions.map(s => `• ${s}`).join('\n')}`;
                }

                if (this.response.sources.length > 0) {
                    result += `\n\n📚 Источники:\n${this.response.sources.map(s => `• ${s}`).join('\n')}`;
                }

                if (this.response.warning) {
                    result += `\n\n⚠️ Внимание: ${this.response.warning}`;
                }

                return result;
            }
        }
    }
</script>

<style scoped>
    .volonter-container {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        font-family: Arial, sans-serif;
    }

    .ai-interface {
        margin-top: 30px;
        border: 1px solid #eee;
        border-radius: 8px;
        padding: 20px;
        background-color: #f9f9f9;
    }

    .request-section {
        margin-bottom: 20px;
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

    pre {
        white-space: pre-wrap;
        word-wrap: break-word;
        font-family: inherit;
        line-height: 1.5;
    }
</style>