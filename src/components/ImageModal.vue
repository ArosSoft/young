<template>
  <div>
    <!-- Изображение, которое можно кликнуть -->
    <img
      :src="imageSrc"
      alt="Click to enlarge"
      :style="{ width: imageWidth }"
      class="clickable-image"
      @click="openModal"
    />

    <!-- Модальное окно -->
    <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
      <div class="modal-content">
        <img :src="imageSrc" alt="Full size" class="full-size-image" />
        <button class="close-button" @click.stop="closeModal">×</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    imageWidth: {
      type: String,
      default: "200px",
    },
  },
  data() {
    return {
      isModalOpen: false,
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
      document.body.style.overflow = 'hidden'; // Блокируем скролл страницы
    },
    closeModal() {
      this.isModalOpen = false;
      document.body.style.overflow = ''; // Восстанавливаем скролл страницы
    },
  },
};
</script>

<style scoped>
.clickable-image {
  cursor: pointer;
  height: auto;
  transition: transform 0.2s;
}

.clickable-image:hover {
  transform: scale(1.03);
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  position: relative;
  max-width: 95vw;
  max-height: 95vh;
  margin: 20px;
}

.full-size-image {
  max-width: 95vw;
  max-height: 95vh;
  object-fit: contain;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}

.close-button {
  position: absolute;
  top: -15px;
  right: -15px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  color: #000;
  font-size: 24px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  transition: all 0.2s;
}

.close-button:hover {
  background-color: #f0f0f0;
  transform: scale(1.1);
}
</style>