<template>
  <div class="py-5 md:py-10 overflow-hidden">
    <div 
      ref="cardRef"
      class="w-full max-w-5xl mx-auto relative flex flex-col md:flex-row items-center rounded-2xl shadow-2xl overflow-hidden bg-white"
    >
      
      <!-- Image -->
      <div 
        :class="[
          'relative w-full md:w-1/2 transition-all duration-1000 ease-out',
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
        ]"
      >
        <img
          :src="image"
          :alt="title"
          class="w-full h-full object-cover"
        />
        <!-- Overlay gradient -->
        <div class="absolute inset-0 bg-gradient-to-r from-transparent to-white/30"></div>
      </div>

      <!-- Contenu texte -->
      <div 
        :class="[
          'w-full md:w-1/2 bg-white p-6 md:p-10 flex flex-col justify-center transition-all duration-1000 ease-out delay-300',
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
        ]"
      >
        <h2 
          :class="[
            'text-2xl md:text-4xl font-bold mb-6 text-gray-900 transition-all duration-700 delay-500',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          ]"
        >
          {{ title }}
        </h2>
        <div 
          :class="[
            'space-y-4 text-gray-700 leading-relaxed transition-all duration-700 delay-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          ]"
        >
          <p v-for="(paragraph, index) in paragraphs" :key="index">
            {{ paragraph }}
          </p>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

interface Props {
  title: string
  text: string
  image: string
}

const props = defineProps<Props>()

const cardRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

// Split text into paragraphs
const paragraphs = computed(() => {
  return props.text.split('\n\n').filter(p => p.trim())
})

const handleScroll = () => {
  if (!cardRef.value) return
  
  const rect = cardRef.value.getBoundingClientRect()
  const windowHeight = window.innerHeight
  
  if (rect.top <= windowHeight * 0.8) {
    isVisible.value = true
  }
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>