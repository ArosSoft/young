<template>
  <!-- Основной блок футера с классом "footer" -->
  <footer class="footer">
    <!-- Контент футера -->
    <div class="footer-content">
      <!-- Параграф с указанием текущего года и копирайта -->
      <p>&copy; {{ currentYear }} Сделано кванторианцами</p>
      <!-- Блок с ссылками на дополнительные страницы -->
      <div class="footer-links">
          <a href="https://vk.com/arossoft">Контакты</a> |
          <a href="https://vk.com/codimai">Нейроарт</a> |
          <a href="https://vk.com/itkvant">Программирование для детей</a> 
      </div>
    </div>
  </footer>
</template>

<script setup>
// Используем переменную currentYear для получения текущего года
const currentYear = new Date().getFullYear();
</script>

<style scoped>
/* Стили для футера */
.footer {
  margin-top: 2rem; /* Отступ сверху */
  padding: 1.5rem 0; /* Внутренние отступы сверху и снизу */
  background-color: var(--color-background-soft); /* Цвет фона, используя CSS переменную */
  border-top: 1px solid var(--color-border); /* Верхняя граница с использованием CSS переменной */
}

/* Стили для контента футера */
.footer-content {
  text-align: center; /* Выравнивание текста по центру */
}

/* Стили для блока с ссылками */
.footer-links {
  margin-top: 0.5rem; /* Отступ сверху */
}

/* Стили для ссылок внутри футера */
.footer-links a {
  color: var(--color-text); /* Цвет текста ссылок, используя CSS переменную */
  padding: 0 0.5rem; /* Внутренние отступы слева и справа */
}

/* Адаптивные стили для экранов с шириной более 1024px */
@media (min-width: 1024px) {
  .footer {
    padding: 2rem 0; /* Увеличение внутренних отступов на больших экранах */
  }
}
</style>