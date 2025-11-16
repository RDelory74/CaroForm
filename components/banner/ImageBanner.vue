<template>
    <div class="w-full overflow-hidden py-6">
      <img 
        :src="src" 
        :alt="alt" 
        class="w-full h-[200px] rounded-2xl  object-cover"
      />
    </div>
  </template>
  
  <script setup lang="ts">
  interface Props {
    src: string
    alt?: string
  }
  
  withDefaults(defineProps<Props>(), {
    alt: 'Image banner',
  })
  </script>