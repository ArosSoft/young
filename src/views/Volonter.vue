<template>
    <div class="volonter-container">
        <h1>Привет, волонтер!</h1>

        <div class="file-upload-section">
            <input type="file" @change="handleFileUpload" accept=".json,.txt" class="file-input">
            <p v-if="organizations.length > 0" class="file-info">
                Загружено организаций: {{ organizations.length }}
            </p>
            <p v-else class="file-info">
                Используется стандартный список организаций
            </p>
        </div>

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
const DEFAULT_ORGANIZATIONS = [
    {
        name: "Добровольческий отряд Липецкого металлургического колледжа «От сердца к сердцу»",
        description: "Волонтерская деятельность в социальной сфере",
        contacts: ["Телефон: +7-474-274-28-86"]
    },
    {
        name: "Липецкая команда помощи бездомным животным 'Велес'",
        description: "Помощь бездомным животным",
        contacts: ["Телефон: +79119111111", "VK: https://vk.com/club13050764"]
    }
];

export default {
    name: 'Volonter',
    data() {
        return {
            userRequest: '',
            response: null,
            isLoading: false,
            error: null,
            organizations: [],
            loadingOrganizations: true
        }
    },
    async created() {
        await this.loadDefaultOrganizations();
    },
    methods: {
        async loadDefaultOrganizations() {
            try {
                const response = await fetch('./text/official.json');
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                
                const jsonData = await response.json();
                this.parseJsonOrganizations(jsonData);
            } catch (err) {
                console.error('Ошибка загрузки JSON:', err);
                this.error = 'Не удалось загрузить JSON. Используется стандартный список.';
                this.organizations = DEFAULT_ORGANIZATIONS;
            } finally {
                this.loadingOrganizations = false;
            }
        },

        parseJsonOrganizations(jsonData) {
            if (!jsonData.organizations || !Array.isArray(jsonData.organizations)) {
                throw new Error('Неверный формат JSON: ожидается ключ "organizations"');
            }

            this.organizations = jsonData.organizations.map(item => {
                const contacts = [];
                
                if (item.phone_number) {
                    contacts.push(`Телефон: ${item.phone_number}`);
                }
                
                if (item.social_media) {
                    if (item.social_media.vkontakte) {
                        contacts.push(`VK: ${item.social_media.vkontakte}`);
                    }
                    if (item.social_media.telegram) {
                        contacts.push(`Telegram: ${item.social_media.telegram}`);
                    }
                }
                
                if (item.email) {
                    contacts.push(`Email: ${item.email}`);
                }

                return {
                    name: item.name || 'Без названия',
                    description: item.activities || '',
                    contacts: contacts
                };
            });

            if (this.organizations.length === 0) {
                throw new Error('JSON файл не содержит организаций');
            }
        },

        handleFileUpload(event) {
            const file = event.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = async (e) => {
                try {
                    const content = e.target.result;
                    if (file.name.endsWith('.json')) {
                        const jsonData = JSON.parse(content);
                        this.parseJsonOrganizations(jsonData);
                    } else {
                        this.error = 'Поддерживаются только JSON файлы';
                    }
                } catch (err) {
                    console.error('Ошибка чтения файла:', err);
                    this.error = `Ошибка чтения файла: ${err.message}`;
                    this.organizations = DEFAULT_ORGANIZATIONS;
                }
            };
            reader.readAsText(file);
        },

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

                // Формируем системное сообщение с информацией об организациях
                const systemMessage = {
                    role: "system",
                    content: `Ты помощник для волонтеров. Отвечай на вопросы, используя информацию о волонтерских организациях. 
                    Доступные организации:\n${this.organizations.map(org => 
                        `- ${org.name}: ${org.description}${org.contacts.length > 0 ? ` (${org.contacts.join(', ')})` : ''}`
                    ).join('\n')}`
                };

                // Формируем сообщение пользователя
                const userMessage = {
                    role: "user",
                    content: this.userRequest
                };

                const response = await fetch('https://api.mistral.ai/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${apiKey}`
                    },
                    body: JSON.stringify({
                        model: "mistral-tiny",
                        messages: [systemMessage, userMessage],
                        temperature: 0.7
                    })
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.error?.message || `HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                this.response = this.formatMistralResponse(data);

            } catch (err) {
                this.error = `Ошибка: ${err.message}`;
                console.error('Mistral API error:', err);
            } finally {
                this.isLoading = false;
            }
        },

        formatMistralResponse(data) {
            try {
                const content = data.choices[0]?.message?.content;
                if (!content) throw new Error('Пустой ответ от API');

                return {
                    answer: content,
                    raw: data
                };
            } catch (e) {
                console.error('Ошибка форматирования ответа:', e);
                return {
                    answer: "Не удалось обработать ответ от Mistral",
                    warning: "Ответ не соответствует ожидаемому формату",
                    raw: data
                };
            }
        }
    },
    computed: {
        formattedResponse() {
            if (!this.response) return '';
            
            let result = `${this.response.answer}`;
            
            if (this.response.warning) {
                result += `\n\nВнимание: ${this.response.warning}`;
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

.file-upload-section {
    margin: 20px 0;
    padding: 15px;
    background-color: #f0f8ff;
    border-radius: 8px;
    border: 1px dashed #4CAF50;
}

.file-input {
    display: block;
    margin-bottom: 10px;
}

.file-info {
    color: #2e8b57;
    font-size: 14px;
    margin: 5px 0 0;
}

.ai-interface {
    margin-top: 20px;
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