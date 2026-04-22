<!-- /src/components/ImageModal.vue -->
<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
    imageSrc: { type: String, required: true },
    imageWidth: { type: String, default: '150px' }
});

const isModalOpen = ref(false);

// Определяем, видео ли это, по расширению или параметру URL
const isVideo = computed(() => {
    const src = props.imageSrc.toLowerCase();
    const videoExts = ['.mp4', '.webm', '.ogg', '.mov'];
    const hasVideoParam = src.includes('transcode=true') || src.includes('video');
    return videoExts.some(ext => src.endsWith(ext)) || hasVideoParam;
});

const openModal = () => isModalOpen.value = true;
const closeModal = () => isModalOpen.value = false;

// Закрытие модального окна по ESC
const onKeydown = (e) => {
    if (e.key === 'Escape') closeModal();
};
</script>

<template>
    <div class="modal-wrapper">
        <!-- Превью: изображение или видео -->
        <div 
            class="media-preview" 
            :style="{ width: imageWidth }"
            @click="openModal"
        >
            <img 
                v-if="!isVideo" 
                :src="imageSrc" 
                alt="Preview" 
                class="media-content"
                loading="lazy"
            />
            <video 
                v-else 
                :src="imageSrc" 
                class="media-content"
                muted 
                loop 
                playsinline
                preload="metadata"
            />
            <!-- Иконка для видео -->
            <span v-if="isVideo" class="video-badge">▶</span>
        </div>

        <!-- Модальное окно (полный размер) -->
        <Teleport to="body">
            <Transition name="fade">
                <div v-if="isModalOpen" class="modal-overlay" @click="closeModal" @keydown="onKeydown" tabindex="-1">
                    <div class="modal-content" @click.stop>
                        <button class="modal-close" @click="closeModal" aria-label="Закрыть">×</button>
                        
                        <img 
                            v-if="!isVideo" 
                            :src="imageSrc" 
                            alt="Full size" 
                            class="modal-media"
                        />
                        <video 
                            v-else 
                            :src="imageSrc" 
                            class="modal-media"
                            controls 
                            autoplay
                        />
                    </div>
                </div>
            </Transition>
        </Teleport>
    </div>
</template>

<style scoped>
.modal-wrapper {
    display: flex;
    justify-content: center;
}

.media-preview {
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    transition: transform 0.2s ease;
    cursor: pointer;
}

.media-preview:hover {
    transform: scale(1.03);
}

.media-content {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
    border-radius: 8px;
    pointer-events: none; /* Чтобы клик по видео проходил на контейнер */
}

.video-badge {
    position: absolute;
    bottom: 8px;
    right: 8px;
    background: rgba(0,0,0,0.7);
    color: white;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    pointer-events: none;
    z-index: 1;
}

/* Модальное окно */
.modal-overlay {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 20px;
    outline: none;
}

.modal-content {
    position: relative;
    max-width: 90vw;
    max-height: 90vh;
    background: #fff;
    border-radius: 12px;
    overflow: hidden;
}

.modal-media {
    max-width: 100%;
    max-height: 90vh;
    display: block;
    object-fit: contain;
}

.modal-close {
    position: absolute;
    top: 10px;
    right: 15px;
    background: rgba(0,0,0,0.6);
    color: white;
    border: none;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    font-size: 20px;
    cursor: pointer;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
}

.modal-close:hover {
    background: rgba(0,0,0,0.9);
}

/* Анимации */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>