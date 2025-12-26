<template>
  <div class="w-full overflow-hidden py-6">
    <img 
      :src="src" 
      :alt="alt" 
      class="w-full h-[200px] rounded-none object-cover opacity-0 transition-opacity duration-700"
      :class="{ 'opacity-100': isLoaded }"
      @load="handleLoad"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  src: string
  alt?: string
}

withDefaults(defineProps<Props>(), {
  alt: 'Image banner',
})

const isLoaded = ref(false)

const handleLoad = () => {
  isLoaded.value = true
}
</script>