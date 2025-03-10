<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="1 программист написал это" />

      <nav>
        <router-link to="/">Домой</router-link> |
        <router-link to="/about">О нас</router-link> |
        <router-link to="/welcome">Добро пожаловать</router-link>
      </nav>
    </div>
  </header>

  <main>
    <router-view />
  </main>
  <TheFooter />
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 16px;
  text-align: center;
  margin-top: 2rem;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

nav a.router-link-active {
  color: var(--color-text);
  font-weight: bold;
}

@media (min-width: 1024px) {
  body {
    min-height: 100vh;
  }

  #app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
  }

  main {
    flex: 1;
  }
}

  :root {
    --color-background-soft: #f0f0f0;
    --color-border: #ddd;
    --color-text: #333;
  }

  
</style>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheFooter from './components/TheFooter.vue'
</script>