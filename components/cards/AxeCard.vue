<template>
    <div
      :class="[
        'bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      ]"
      :style="{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }"
    >
      <div class="flex flex-col md:flex-row">
        
        <!-- Image Left (Desktop) / Top (Mobile) -->
        <div class="w-full md:w-1/3 flex-shrink-0">
          <img 
            :src="imageSrc" 
            :alt="title" 
            class="w-full h-48 md:h-full object-cover"
          />
        </div>
  
        <!-- Content Right (Desktop) / Bottom (Mobile) -->
        <div class="p-6 flex-1">
          <h3 class="text-2xl font-bold text-gray-900 mb-3">{{ title }}</h3>
          <p class="text-gray-700 leading-relaxed">{{ description }}</p>
        </div>
  
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  interface Props {
    title: string
    description: string
    imageSrc: string
    isVisible: boolean
    delay?: number
  }
  
  withDefaults(defineProps<Props>(), {
    delay: 400,
  })
  </script>