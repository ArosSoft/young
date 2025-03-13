<script setup>
// Импорт компонентов и иконок, используемых в этом файле
import WelcomeItem from './WelcomeItem.vue' // Компонент для отображения элементов приветствия
import DocumentationIcon from './icons/IconDocumentation.vue' // Иконка для документации
import ToolingIcon from './icons/IconTooling.vue' // Иконка для инструментов
import EcosystemIcon from './icons/IconEcosystem.vue' // Иконка для экосистемы
import CommunityIcon from './icons/IconCommunity.vue' // Иконка для сообщества
import SupportIcon from './icons/IconSupport.vue' // Иконка для поддержки
</script>

<template>
  <!-- Компонент WelcomeItem для отображения раздела "Documentation" -->
  <WelcomeItem>
    <!-- Иконка для раздела "Documentation" -->
    <template #icon>
      <DocumentationIcon />
    </template>
    <!-- Заголовок раздела -->
    <template #heading>Documentation</template>

    <!-- Текст с ссылкой на официальную документацию Vue.js -->
    Vue’s
    <a target="_blank" href="https://vuejs.org/">official documentation</a>
    provides you with all information you need to get started.
  </WelcomeItem>

  <!-- Компонент WelcomeItem для отображения раздела "Tooling" -->
  <WelcomeItem>
    <!-- Иконка для раздела "Tooling" -->
    <template #icon>
      <ToolingIcon />
    </template>
    <!-- Заголовок раздела -->
    <template #heading>Tooling</template>

    <!-- Текст с описанием инструментов, используемых в проекте -->
    This project is served and bundled with
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite</a>. The recommended IDE
    setup is <a href="https://code.visualstudio.com/" target="_blank">VSCode</a> +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>. If you need to test
    your components and web pages, check out
    <a href="https://www.cypress.io/" target="_blank">Cypress</a> and
    <a href="https://on.cypress.io/component" target="_blank"
      >Cypress Component Testing</a
    >.

    <br />

    <!-- Указание на дополнительные инструкции в файле README.md -->
    More instructions are available in <code>README.md</code>.
  </WelcomeItem>

  <!-- Компонент WelcomeItem для отображения раздела "Ecosystem" -->
  <WelcomeItem>
    <!-- Иконка для раздела "Ecosystem" -->
    <template #icon>
      <EcosystemIcon />
    </template>
    <!-- Заголовок раздела -->
    <template #heading>Ecosystem</template>

    <!-- Текст с описанием официальных инструментов и библиотек Vue.js -->
    Get official tools and libraries for your project:
    <a target="_blank" href="https://pinia.vuejs.org/">Pinia</a>,
    <a target="_blank" href="https://router.vuejs.org/">Vue Router</a>,
    <a target="_blank" href="https://test-utils.vuejs.org/">Vue Test Utils</a>, and
    <a target="_blank" href="https://github.com/vuejs/devtools">Vue Dev Tools</a>. If you need more
    resources, we suggest paying
    <a target="_blank" href="https://github.com/vuejs/awesome-vue">Awesome Vue</a>
    a visit.
  </WelcomeItem>

  <!-- Компонент WelcomeItem для отображения раздела "Community" -->
  <WelcomeItem>
    <!-- Иконка для раздела "Community" -->
    <template #icon>
      <CommunityIcon />
    </template>
    <!-- Заголовок раздела -->
    <template #heading>Community</template>

    <!-- Текст с описанием ресурсов сообщества Vue.js -->
    Got stuck? Ask your question on
    <a target="_blank" href="https://chat.vuejs.org">Vue Land</a>, our official Discord server, or
    <a target="_blank" href="https://stackoverflow.com/questions/tagged/vue.js">StackOverflow</a>.
    You should also subscribe to
    <a target="_blank" href="https://news.vuejs.org">our mailing list</a> and follow the official
    <a target="_blank" href="https://twitter.com/vuejs">@vuejs</a>
    twitter account for latest news in the Vue world.
  </WelcomeItem>

  <!-- Компонент WelcomeItem для отображения раздела "Support Vue" -->
  <WelcomeItem>
    <!-- Иконка для раздела "Support Vue" -->
    <template #icon>
      <SupportIcon />
    </template>
    <!-- Заголовок раздела -->
    <template #heading>Support Vue</template>

    <!-- Текст с призывом поддержать проект Vue.js -->
    As an independent project, Vue relies on community backing for its sustainability. You can help
    us by
    <a target="_blank" href="https://vuejs.org/sponsor/">becoming a sponsor</a>.
  </WelcomeItem>
</template>