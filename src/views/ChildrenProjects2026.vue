<template>
  <div class="children-projects-2026">
    <div class="hero-section">
      <!-- Шапка с фоновым изображением -->
      <header>
        <div class="title-container">
          <h1 class="main-title">Scratch проекты</h1>
          <p class="subtitle">группы И 1.0</p>
        </div>
      </header>

      <!-- Секция с проектами — одна карточка -->
      <section class="projects-section">
        <div class="carousel-wrapper">
          <!-- Кнопка "Назад" -->
          <button class="carousel-btn carousel-btn--prev" @click="prevProject" :disabled="currentIndex === 0">
            ‹
          </button>

          <!-- Карточка текущего проекта -->
          <transition name="card-slide" mode="out-in">
            <div class="project-card" :key="currentIndex">
              <div class="project-icon">{{ projects[currentIndex].icon }}</div>
              <h3 class="project-title">{{ projects[currentIndex].title }}</h3>
              <p class="project-description">{{ projects[currentIndex].description }}</p>
              <div class="project-authors">👨‍💻 Авторы: {{ projects[currentIndex].authors }}</div>
              <iframe
                :src="projects[currentIndex].scratchEmbed"
                class="scratch-embed"
                allowtransparency="true"
                frameborder="0"
                scrolling="no"
                allowfullscreen
              ></iframe>
              <div class="project-links">
                <a :href="projects[currentIndex].scratchUrl" target="_blank" class="btn-scratch btn-play">🎮 Играть на Scratch</a>
                <a :href="basePath + projects[currentIndex].detailPath" class="btn-scratch" :style="{ background: projects[currentIndex].detailColor, color: 'white' }">📄 Подробнее</a>
              </div>
            </div>
          </transition>

          <!-- Кнопка "Вперёд" -->
          <button class="carousel-btn carousel-btn--next" @click="nextProject" :disabled="currentIndex === projects.length - 1">
            ›
          </button>
        </div>

        <!-- Индикаторы (точки) -->
        <div class="carousel-dots">
          <button
            v-for="(project, index) in projects"
            :key="index"
            class="dot"
            :class="{ 'dot--active': index === currentIndex }"
            @click="currentIndex = index"
          ></button>
        </div>

        <!-- Счётчик -->
        <div class="carousel-counter">{{ currentIndex + 1 }} / {{ projects.length }}</div>
      </section>

      <footer>
        <p>✨ Сделано с ❤️ и блоками Scratch | Кванториум © 2026 ✨</p>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const basePath = '/young/detskie-proekty-2026/'
const currentIndex = ref(0)

const projects = [
  {
    icon: '🏃‍♂️',
    title: 'Minecraft Platformer',
    description: 'Паркур-платформер, где Деш преодолевает препятствия и отвечает на вопросы после каждого уровня!',
    authors: 'Фролов Максим, Папанов Пётр, Дубров Максим',
    scratchEmbed: 'https://scratch.mit.edu/projects/1269467595/embed',
    scratchUrl: 'https://scratch.mit.edu/projects/1269467595',
    detailPath: 'Minecraft_Platformer/m.html',
    detailColor: 'var(--scratch-green)'
  },
  {
    icon: '👷',
    title: 'Nagenial',
    description: 'Космический кликер про выживание! Уничтожай демонов, улучшай союзников и спасай галактику!',
    authors: 'Сергей К, Пётр М',
    scratchEmbed: 'https://scratch.mit.edu/projects/1291843805/embed',
    scratchUrl: 'https://scratch.mit.edu/projects/1291843805',
    detailPath: 'nagenial/n.html',
    detailColor: 'var(--scratch-orange)'
  },
  {
    icon: '🚀',
    title: 'Ракета',
    description: 'Космическая аркада! Управляй ракетой, уклоняйся от астероидов и собирай монетки.',
    authors: 'Чирков Дмитрий, Колосов Михаил',
    scratchEmbed: 'https://scratch.mit.edu/projects/1298542077/embed',
    scratchUrl: 'https://scratch.mit.edu/projects/1298542077',
    detailPath: 'Rocket/r.html',
    detailColor: 'var(--scratch-blue)'
  },
  {
    icon: '🛡️',
    title: 'Защита башни спецназа',
    description: 'Стратегия в стиле детских рисунков. Защищай башню от волн террористов!',
    authors: 'Команда спецназа',
    scratchEmbed: 'https://scratch.mit.edu/projects/1297244057/embed',
    scratchUrl: 'https://scratch.mit.edu/projects/1297244057',
    detailPath: 'Special_forces_Tower_Defens/s.html',
    detailColor: 'var(--scratch-pink)'
  }
]

function nextProject() {
  if (currentIndex.value < projects.length - 1) {
    currentIndex.value++
  }
}

function prevProject() {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}
</script>

<style scoped>
/* ===== Цветовая схема в стиле Scratch ===== */
.children-projects-2026 {
  --scratch-orange: #FFAB19;
  --scratch-blue: #4C97FF;
  --scratch-green: #0FBD8C;
  --scratch-pink: #FF6680;
  --scratch-purple: #A66CFF;
  --scratch-yellow: #FFD500;
  --bg-light: #F9F7FF;
  --text-dark: #2D2B3A;
  --card-bg: #FFFFFF;
}

.hero-section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  background: var(--bg-light);
}

/* Шапка (Header) с фоновым изображением на всю ширину */
header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 2rem;
  position: relative;
  z-index: 10;
  min-height: 90px;
}

header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 70%;
  background: url('/young/detskie-proekty-2026/дети2.jpg') center / cover no-repeat;
  z-index: -2;
}

header::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.45);
  z-index: -1;
}

.title-container {
  text-align: center;
}

.main-title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  color: white;
  text-shadow: 4px 4px 0 rgba(0,0,0,0.2);
  letter-spacing: 3px;
  margin-bottom: 0.3rem;
  animation: titlePop 1s ease-out;
}

.subtitle {
  font-size: clamp(1.2rem, 3vw, 2rem);
  color: var(--scratch-yellow);
  text-shadow: 2px 2px 0 rgba(0,0,0,0.3);
  font-weight: bold;
  letter-spacing: 2px;
}

@keyframes titlePop {
  0% { transform: scale(0.5); opacity: 0; }
  70% { transform: scale(1.1); }
  100% { transform: scale(1); opacity: 1; }
}

/* ===== Карусель — одна карточка ===== */
.projects-section {
  padding: 3rem 2rem;
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
  position: relative;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.carousel-wrapper {
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  justify-content: center;
}

/* Карточка проекта */
.project-card {
  background: white;
  border-radius: 25px;
  padding: 1.5rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
  border: 4px solid transparent;
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 550px;
  flex-shrink: 0;
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 8px;
  background: linear-gradient(90deg, var(--scratch-orange), var(--scratch-pink), var(--scratch-purple));
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 50px rgba(0,0,0,0.25);
}

.project-icon {
  font-size: 3rem;
  text-align: center;
  margin-bottom: 1rem;
}

.project-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.8rem;
  color: var(--text-dark);
  text-align: center;
}

.project-description {
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 1rem;
  text-align: center;
  line-height: 1.5;
}

.project-authors {
  background: #F0F0F0;
  padding: 0.6rem 1rem;
  border-radius: 15px;
  font-size: 0.85rem;
  margin-bottom: 1rem;
  text-align: center;
}

.scratch-embed {
  width: 100%;
  height: 302px;
  border-radius: 15px;
  border: 3px solid #E0E0E0;
  margin-bottom: 1rem;
}

.project-links {
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-scratch {
  padding: 0.6rem 1.2rem;
  border-radius: 20px;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.9rem;
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: none;
  cursor: pointer;
  font-family: inherit;
}

.btn-play {
  background: var(--scratch-orange);
  color: white;
}

.btn-scratch:hover {
  transform: scale(1.05);
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

/* ===== Кнопки навигации ===== */
.carousel-btn {
  font-size: 2.5rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background: white;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--text-dark);
  line-height: 1;
}

.carousel-btn:hover:not(:disabled) {
  background: var(--scratch-yellow);
  transform: scale(1.1);
}

.carousel-btn:disabled {
  opacity: 0.3;
  cursor: default;
}

/* ===== Точки-индикаторы ===== */
.carousel-dots {
  display: flex;
  gap: 0.6rem;
  margin-top: 1.5rem;
}

.dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid var(--scratch-orange);
  background: transparent;
  cursor: pointer;
  transition: all 0.2s;
  padding: 0;
}

.dot--active {
  background: var(--scratch-orange);
  transform: scale(1.2);
}

.dot:hover {
  background: var(--scratch-orange);
  opacity: 0.6;
}

/* ===== Счётчик ===== */
.carousel-counter {
  margin-top: 0.6rem;
  font-size: 0.9rem;
  color: #888;
  font-weight: bold;
}

/* ===== Анимация переключения ===== */
.card-slide-enter-active {
  animation: slideIn 0.35s ease-out;
}
.card-slide-leave-active {
  animation: slideOut 0.25s ease-in;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(60px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideOut {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-60px);
  }
}

/* Футер */
footer {
  text-align: center;
  padding: 2rem;
  background: rgba(0,0,0,0.2);
  color: white;
  margin-top: auto;
  position: relative;
  z-index: 5;
}

/* ===== Большие экраны (≥1200px) ===== */
@media (min-width: 1200px) {
  .projects-section {
    max-width: 1000px;
  }

  .project-card {
    max-width: 750px;
    padding: 2rem;
  }

  .scratch-embed {
    height: 380px;
  }

  .project-title {
    font-size: 1.8rem;
  }

  .project-description {
    font-size: 1.05rem;
  }
}

/* ===== Адаптивность ===== */
@media (max-width: 768px) {
  header {
    flex-direction: column;
    text-align: center;
    padding: 2rem 1rem;
    min-height: 260px;
  }

  .carousel-wrapper {
    gap: 0.5rem;
  }

  .project-card {
    padding: 1rem;
  }

  .scratch-embed {
    height: 250px;
  }

  .carousel-btn {
    width: 40px;
    height: 40px;
    font-size: 1.8rem;
  }
}

@media (max-width: 480px) {
  .hero-section {
    min-height: auto;
  }

  .main-title {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  .projects-section {
    padding: 2rem 1rem;
  }
}
</style>