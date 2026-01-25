<template>
  <div 
    :class="[
      'bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 h-full w-full flex items-center justify-center',
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    ]"
    :style="{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }"
  >
    <div class="p-6 text-center max-w-xl">
      <h3 class="text-lg md:text-xl font-bold text-gray-900 mb-3">
        {{ title }}
      </h3>
      <p class="text-sm md:text-base text-gray-700 leading-relaxed">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description: string
  isVisible: boolean
  delay?: number
}

withDefaults(defineProps<Props>(), {
  delay: 400,
})
</script>
