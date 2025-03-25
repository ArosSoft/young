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
      default: "200px", // Значение по умолчанию
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
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
};
</script>

<style scoped>
.clickable-image {
  cursor: pointer;
  max-width: 100%;
  height: auto;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  max-width: 90%;
  max-height: 90%;
}

.full-size-image {
  max-width: 100%;
  max-height: 100%;
  border-radius: 8px;
}
</style>