<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="ку" />

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
  <footer>
    <p>&copy; 2023 My Company</p>
  </footer>
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

footer {
  text-align: center;
  padding: 1rem 0;
  border-top: 1px solid #eee;
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
</style>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>