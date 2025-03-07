<template>
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; {{ currentYear }} Моё приложение. Все права защищены.</p>
      <div class="footer-links">
        <a href="#">Условия использования</a> |
        <a href="#">Политика конфиденциальности</a> |
        <a href="#">Контакты</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>

<style scoped>
.footer {
  margin-top: 2rem;
  padding: 1.5rem 0;
  background-color: var(--color-background-soft);
  border-top: 1px solid var(--color-border);
}

.footer {
    margin-top: 2rem;
    padding: 1.5rem 0;
    background-color: var(--color-background-soft);
    border-top: 1px solid var(--color-border);
  }
  
.footer-content {
  text-align: center;
}

.footer-links {
  margin-top: 0.5rem;
}

.footer-links a {
  color: var(--color-text);
  padding: 0 0.5rem;
}

@media (min-width: 1024px) {
  .footer {
    padding: 2rem 0;
  }
}
</style>
