<template>
  <section class="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24 overflow-hidden">
    <div class="container mx-auto px-4 max-w-6xl">
      
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        
        <!-- Left: Image (slide from left) -->
        <div 
          ref="imageRef"
          :class="[
            'order-2 lg:order-1 transition-all duration-1000 ease-out',
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          ]"
        >
          <div class="relative max-w-md mx-auto lg:mx-0">
            <img 
              :src="imageSrc" 
              :alt="imageAlt" 
              class="rounded-2xl shadow-2xl w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
            />
            <!-- Decorative element -->
            <div 
              :class="[
                'absolute -bottom-4 -right-4 w-32 h-32 bg-[#6DA48F80] rounded-full blur-3xl -z-10 transition-all duration-1000 delay-300',
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              ]"
            ></div>
          </div>
        </div>

        <!-- Right: Content (slide from right) -->
        <div 
          ref="contentRef"
          :class="[
            'order-1 lg:order-2 text-center lg:text-left transition-all duration-1000 ease-out delay-200',
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          ]"
        >
          <h1 
            :class="[
              'text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight transition-all duration-700 delay-400',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            ]"
          >
            Accompagner, comprendre, grandir ensemble aujourd'hui
          </h1>
          <p 
            :class="[
              'text-lg md:text-xl text-gray-700 leading-relaxed transition-all duration-700 delay-600',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            ]"
          >
            Mon parcours s'est construit à la croisée des <span class="font-semibold text-gray-900">sciences humaines</span>, de la <span class="font-semibold text-gray-900">pédagogie</span>, de l'<span class="font-semibold text-gray-900">art et de la culture</span>, guidé par une conviction : <span class="font-bold text-[#6DA48F]">comprendre l'humain pour mieux accompagner les pratiques professionnelles</span>.
          </p>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Props {
  imageSrc?: string
  imageAlt?: string
}

withDefaults(defineProps<Props>(), {
  imageSrc: '/hero-welcome.jpg',
  imageAlt: 'Accompagnement professionnel',
})

const imageRef = ref<HTMLElement | null>(null)
const contentRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

const handleScroll = () => {
  if (!imageRef.value) return
  
  const rect = imageRef.value.getBoundingClientRect()
  const windowHeight = window.innerHeight
  
  // Trigger animation when element is 20% visible
  if (rect.top <= windowHeight * 0.8) {
    isVisible.value = true
  }
}

onMounted(() => {
  // Check immediately on mount
  handleScroll()
  
  // Add scroll listener
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>