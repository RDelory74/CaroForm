<template>
  <div 
    :class="[
      'bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 h-full w-full',
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    ]"
    :style="{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }"
  >
    <div class="flex flex-col md:flex-row h-full">
      <!-- Image Left (Desktop) / Top (Mobile) -->
      <div class="w-full md:w-2/5 flex-shrink-0 h-48 md:h-full">
        <img 
          :src="imageSrc" 
          :alt="title" 
          class="w-full h-full object-cover"
        />
      </div>
      
      <!-- Content Right (Desktop) / Bottom (Mobile) -->
      <div class="p-4 md:p-6 flex-1 flex flex-col justify-center overflow-hidden">
        <h3 class="text-lg md:text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {{ title }}
        </h3>
        <p class="text-sm md:text-base text-gray-700 leading-relaxed line-clamp-3 md:line-clamp-4">
          {{ description }}
        </p>
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