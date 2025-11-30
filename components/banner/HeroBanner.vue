<template>
  <section class="relative w-full h-screen md:h-[50vh] overflow-hidden flex items-center justify-center">
    <!-- Image de fond -->
    <img
      src="/hero1.png"
      alt="Hero Image"
      class="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500"
      :class="{'opacity-100': showImage}"
    />

    <!-- Titre animé -->
    <h1
      class="relative text-white text-5xl md:text-7xl font-bold transition-all duration-700 ease-out px-4 text-center"
      :class="{
        'translate-x-0 opacity-100': showTitle && !scrolledDown,
        'translate-x-full opacity-0': !showTitle && !scrolledDown,
        '-translate-x-full opacity-0': scrolledDown
      }"
    >
      Cultivons le sens de nos pratiques
    </h1>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const showImage = ref(false)
const showTitle = ref(false)
const scrolledDown = ref(false)

// Déclencher le fade rapide de l'image et l'arrivée du titre dès le premier rendu
onMounted(() => {
  showImage.value = true
  setTimeout(() => showTitle.value = true, 100) // léger delay pour effet synchro
})

// Scroll pour faire disparaître le titre
const handleScroll = () => {
  scrolledDown.value = window.scrollY > 100
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
h1 {
  transition-property: transform, opacity;
}
</style>