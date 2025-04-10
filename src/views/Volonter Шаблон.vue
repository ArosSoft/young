<template>
  <div class="volonter-container">
    <h1>Привет, волонтер!</h1>
    
    <div class="ai-interface">
      <div class="request-section">
        <textarea 
          v-model="userRequest" 
          placeholder="Введите ваш запрос для Mistral..."
          class="request-input"
        ></textarea>
        <button 
          @click="sendRequestToMistral" 
          :disabled="isLoading"
          class="send-button"
        >
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
  computed: {
    formattedResponse() {
      if (!this.response) return '';
      return this.response.choices?.[0]?.message?.content || JSON.stringify(this.response, null, 2);
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
        
        const response = await fetch('https://api.mistral.ai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
          },
          body: JSON.stringify({
            model: "mistral-tiny",
            messages: [
              {
                role: "system",
                content: "Ты помощник для волонтеров. Отвечай структурированно, используя шаблон ответа."
              },
              { role: "user", content: this.userRequest }
            ],
            temperature: 0.7,
            response_format: {  // Требует Mistral Medium/Large
              type: "json_object"  // Для JSON-ответов
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
    
    formatMistralResponse(data) {
      // Базовый шаблон для ответа
      const template = {
        answer: data.choices[0]?.message?.content || "Нет ответа",
        suggestions: [],
        sources: [],
        warning: null
      };
      
      // Попробуем распарсить JSON, если ответ в формате
      try {
        const parsed = JSON.parse(template.answer);
        return {
          ...template,
          ...parsed
        };
      } catch {
        // Если не JSON, используем как есть
        return template;
      }
    }
  },
  
  computed: {
    formattedResponse() {
      if (!this.response) return '';
      
      // Кастомное форматирование для шаблона
      return `
Ответ:
${this.response.answer || 'Нет данных'}

${this.response.suggestions?.length ? 'Рекомендации:\n- ' + this.response.suggestions.join('\n- ') : ''}

${this.response.sources?.length ? 'Источники:\n- ' + this.response.sources.join('\n- ') : ''}

${this.response.warning ? '⚠️ ' + this.response.warning : ''}
      `.trim();
    }
  }
}
</script>

<style scoped>
/* Стили остаются без изменений (как в предыдущем коде) */
</style>

<style scoped>
.volonter-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.deepseek-interface {
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
}
</style>