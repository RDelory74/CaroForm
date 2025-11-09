<template>
  <div class="w-full h-full max-w-5xl mx-auto relative flex flex-col md:flex-row items-center shadow-lg overflow-hidden">
    
    <!-- Image -->
    <div class="relative w-full md:w-1/2">
      <img
        :src="image"
        :alt="title"
        class="w-full  object-cover opacity-40"
      />
    </div>

    <!-- Contenu texte -->
    <div 
      class="h-full  md:relative top-0 left-0 md:left-auto md:top-auto md:w-1/2 bg-opacity-90 p-6 md:p-10 flex flex-col justify-center"
      :class="{'top-[10%] md:top-auto md:left-auto': !isMobile, 'top-[20%]': isMobile}"
    >
      <h2 class="text-2xl md:text-4xl font-bold mb-4">{{ title }}</h2>
      <p class="text-gray-700">{{ text }}</p>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

defineProps({
  title: { type: String, required: true },
  text: { type: String, required: true },
  image: { type: String, required: true }
})

const isMobile = ref(false)

const handleResize = () => {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
})
</script>
