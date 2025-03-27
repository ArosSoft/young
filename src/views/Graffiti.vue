<script setup>
// Импорт компонентов и иконок, используемых в этом файле
import WelcomeItem from './WelcomeItem.vue' // Компонент для отображения элементов приветствия
</script>

<template>
  <!-- Компонент WelcomeItem для отображения раздела "Tooling" -->
  <WelcomeItem>
    <!-- Иконка для раздела "Tooling" -->
    <template #icon>
      <ToolingIcon />
    </template>
    <!-- Заголовок раздела -->
    <template #heading>Граффити н1</template>

    <!-- Текст с описанием инструментов, используемых в проекте -->
    
    <a href="https://vk.com/savostadima" target="_blank">Автор (savostadima)</a> +
    
    <br />

    <!-- Указание на дополнительные инструкции в файле README.md -->
    More instructions are available in <code>README.md</code>.
  </WelcomeItem>
</template>