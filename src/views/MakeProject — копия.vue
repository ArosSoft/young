<template>
  <div class="maker-container">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-10">
        <h1 class="text-4xl font-bold text-indigo-700 mb-2">Create Your Maker Project</h1>
        <p class="text-gray-600">Share your creative work with the community</p>
      </div>

      <!-- Project Form -->
      <div class="bg-white rounded-xl shadow-lg p-6 mb-8">
        <form @submit.prevent="submitProject" class="space-y-6">
          <!-- Project Title -->
          <div>
            <label for="title" class="block text-sm font-medium text-gray-700 mb-1">Project Title *</label>
            <input v-model="project.title"
                   type="text"
                   id="title"
                   required
                   class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                   placeholder="My Awesome Project">
          </div>

          <!-- Project Description -->
          <div>
            <label for="description" class="block text-sm font-medium text-gray-700 mb-1">Description *</label>
            <textarea v-model="project.description"
                      id="description"
                      rows="5"
                      required
                      class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                      placeholder="Tell us about your project..."></textarea>
          </div>

          <!-- Tools -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Tools Used</label>
            <div class="flex flex-wrap gap-2">
              <div v-for="(tool, index) in project.tools" :key="index" class="flex items-center bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">
                <span>{{ tool }}</span>
                <button type="button" @click="removeItem('tools', index)" class="ml-2 text-indigo-600 hover:text-indigo-900">
                  <i class="fas fa-times"></i>
                </button>
              </div>
              <div class="flex">
                <input v-model="newTool"
                       type="text"
                       @keydown.enter.prevent="addItem('tools', newTool)"
                       class="px-4 py-2 rounded-l-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                       placeholder="Add tool">
                <button type="button"
                        @click="addItem('tools', newTool)"
                        class="bg-indigo-600 text-white px-4 py-2 rounded-r-lg hover:bg-indigo-700 transition">
                  <i class="fas fa-plus"></i>
                </button>
              </div>
            </div>
          </div>

          <!-- Materials -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Materials</label>
            <div class="flex flex-wrap gap-2">
              <div v-for="(material, index) in project.materials" :key="index" class="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full">
                <span>{{ material }}</span>
                <button type="button" @click="removeItem('materials', index)" class="ml-2 text-green-600 hover:text-green-900">
                  <i class="fas fa-times"></i>
                </button>
              </div>
              <div class="flex">
                <input v-model="newMaterial"
                       type="text"
                       @keydown.enter.prevent="addItem('materials', newMaterial)"
                       class="px-4 py-2 rounded-l-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                       placeholder="Add material">
                <button type="button"
                        @click="addItem('materials', newMaterial)"
                        class="bg-green-600 text-white px-4 py-2 rounded-r-lg hover:bg-green-700 transition">
                  <i class="fas fa-plus"></i>
                </button>
              </div>
            </div>
          </div>

          <!-- Resources -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Resources & Links</label>
            <div class="space-y-2">
              <div v-for="(resource, index) in project.resources" :key="index" class="flex items-center">
                <input v-model="project.resources[index]"
                       type="url"
                       class="flex-1 px-4 py-2 rounded-l-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                       placeholder="https://example.com">
                <button type="button"
                        @click="removeItem('resources', index)"
                        class="bg-red-600 text-white px-4 py-2 rounded-r-lg hover:bg-red-700 transition">
                  <i class="fas fa-times"></i>
                </button>
              </div>
              <div class="flex">
                <input v-model="newResource"
                       type="url"
                       @keydown.enter.prevent="addItem('resources', newResource)"
                       class="flex-1 px-4 py-2 rounded-l-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                       placeholder="https://example.com">
                <button type="button"
                        @click="addItem('resources', newResource)"
                        class="bg-indigo-600 text-white px-4 py-2 rounded-r-lg hover:bg-indigo-700 transition">
                  <i class="fas fa-plus"></i>
                </button>
              </div>
            </div>
          </div>

          <!-- Images -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Images</label>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-4">
              <div v-for="(image, index) in imagePreviews" :key="index" class="relative group">
                <img :src="image" class="w-full h-32 object-cover rounded-lg preview-image">
                <button type="button"
                        @click="removeImage(index)"
                        class="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <i class="fas fa-times text-xs"></i>
                </button>
              </div>
              <label for="images" class="file-input-label cursor-pointer flex flex-col items-center justify-center h-32 border-2 border-dashed border-gray-300 rounded-lg hover:border-indigo-500 transition">
                <i class="fas fa-camera text-3xl text-gray-400 mb-2"></i>
                <span class="text-sm text-gray-500">Add Images</span>
                <input type="file"
                       id="images"
                       multiple
                       accept="image/*"
                       @change="handleImageUpload"
                       class="hidden">
              </label>
            </div>
          </div>

          <!-- Videos -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Videos</label>
            <div class="space-y-4">
              <div v-for="(video, index) in project.videos" :key="index" class="flex items-center">
                <input v-model="project.videos[index]"
                       type="url"
                       class="flex-1 px-4 py-2 rounded-l-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                       placeholder="YouTube or Vimeo link">
                <button type="button"
                        @click="removeItem('videos', index)"
                        class="bg-red-600 text-white px-4 py-2 rounded-r-lg hover:bg-red-700 transition">
                  <i class="fas fa-times"></i>
                </button>
              </div>
              <div class="flex">
                <input v-model="newVideo"
                       type="url"
                       @keydown.enter.prevent="addItem('videos', newVideo)"
                       class="flex-1 px-4 py-2 rounded-l-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                       placeholder="YouTube or Vimeo link">
                <button type="button"
                        @click="addItem('videos', newVideo)"
                        class="bg-indigo-600 text-white px-4 py-2 rounded-r-lg hover:bg-indigo-700 transition">
                  <i class="fas fa-plus"></i>
                </button>
              </div>
            </div>
          </div>

          <!-- Submit Button -->
          <div class="pt-4">
            <button type="submit"
                    :disabled="isSubmitting"
                    class="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 transition flex items-center justify-center">
              <span v-if="!isSubmitting">Publish Project</span>
              <span v-else class="flex items-center">
                <i class="fas fa-spinner fa-spin mr-2"></i> Saving...
              </span>
            </button>
          </div>
        </form>
      </div>

      <!-- Success Message -->
      <transition name="fade">
        <div v-if="showSuccess" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div class="bg-white rounded-xl p-8 max-w-md mx-4 text-center">
            <div class="text-green-500 text-6xl mb-4">
              <i class="fas fa-check-circle"></i>
            </div>
            <h3 class="text-2xl font-bold text-gray-800 mb-2">Success!</h3>
            <p class="text-gray-600 mb-6">Your project has been saved successfully.</p>
            <button @click="showSuccess = false"
                    class="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition">
              Continue
            </button>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { getDatabase, ref as dbRef, push } from 'firebase/database';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db } from '../firebase';

const storage = getStorage();

const project = ref({
  title: '',
  description: '',
  tools: [],
  materials: [],
  resources: [],
  videos: [],
  images: []
});

const newTool = ref('');
const newMaterial = ref('');
const newResource = ref('');
const newVideo = ref('');
const imageFiles = ref([]);
const imagePreviews = ref([]);
const isSubmitting = ref(false);
const showSuccess = ref(false);

const addItem = (field, value) => {
  if (value.trim() === '') return;

  project.value[field].push(value.trim());

  // Clear the input field
  if (field === 'tools') newTool.value = '';
  if (field === 'materials') newMaterial.value = '';
  if (field === 'resources') newResource.value = '';
  if (field === 'videos') newVideo.value = '';
};

const removeItem = (field, index) => {
  project.value[field].splice(index, 1);
};

const handleImageUpload = (event) => {
  const files = event.target.files;
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    imageFiles.value.push(file);

    // Create preview
    const reader = new FileReader();
    reader.onload = (e) => {
      imagePreviews.value.push(e.target.result);
    };
    reader.readAsDataURL(file);
  }
  event.target.value = ''; // Reset input to allow selecting same files again
};

const removeImage = (index) => {
  imageFiles.value.splice(index, 1);
  imagePreviews.value.splice(index, 1);
};

const uploadImages = async () => {
  const uploadPromises = imageFiles.value.map(async (file) => {
    const storageReference = storageRef(storage, `project_images/${Date.now()}_${file.name}`);
    await uploadBytes(storageReference, file);
    return await getDownloadURL(storageReference);
  });

  return await Promise.all(uploadPromises);
};

const submitProject = async () => {
  try {
    isSubmitting.value = true;

    // Upload images if any
    if (imageFiles.value.length > 0) {
      project.value.images = await uploadImages();
    }

    // Add timestamp
    project.value.createdAt = new Date().toISOString();
    project.value.creator = auth.currentUser?.uid || 'anonymous';

    // Save to Firebase Realtime Database
    const projectsRef = dbRef(db, 'projects');
    await push(projectsRef, project.value);

    // Show success message
    showSuccess.value = true;

    // Reset form
    resetForm();

  } catch (error) {
    console.error("Error saving project: ", error);
    alert("There was an error saving your project. Please try again.");
  } finally {
    isSubmitting.value = false;
  }
};

const resetForm = () => {
  project.value = {
    title: '',
    description: '',
    tools: [],
    materials: [],
    resources: [],
    videos: [],
    images: []
  };
  newTool.value = '';
  newMaterial.value = '';
  newResource.value = '';
  newVideo.value = '';
  imageFiles.value = [];
  imagePreviews.value = [];
};
</script>

<style scoped>
.maker-container {
  @apply container mx-auto px-4 py-8;
}

.file-input-label {
  transition: all 0.3s;
}

.file-input-label:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.preview-image {
  transition: all 0.3s;
}

.preview-image:hover {
  transform: scale(1.05);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>