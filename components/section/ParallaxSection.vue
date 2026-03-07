<template>
    <section
      class="relative w-full min-h-[70vh] flex items-center overflow-hidden"
    >
      <!-- Background image -->
      <div
        class="absolute inset-0 bg-cover bg-center will-change-transform"
        :style="backgroundStyle"
      />
  
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/40"></div>
  
      <!-- Content -->
      <div
        class="relative z-10 max-w-6xl mx-auto px-6 py-20
               flex flex-col gap-4
               md:items-start md:text-left
               text-center"
      >
        <h2 class="text-3xl md:text-5xl font-bold text-white leading-tight">
          {{ title }}
        </h2>
  
        <h3 class="text-xl md:text-2xl text-secondary font-semibold">
          {{ subtitle }}
        </h3>
  
        <p class="max-w-xl text-white text-base md:text-lg leading-relaxed">
          {{ description }}
        </p>
      </div>
    </section>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  
  const props = defineProps({
    image: { type: String, required: true },
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    description: { type: String, required: true }
  })
  
  /**
   * Parallax CSS
   * - background-attachment: fixed (desktop)
   * - fallback auto sur mobile (meilleure perf)
   */
  const backgroundStyle = computed(() => ({
    backgroundImage: `url(${props.image})`,
    backgroundAttachment: 'fixed'
  }))
  </script>
  
  <style scoped>
  /* Mobile fallback : désactive le fixed pour éviter les bugs iOS */
  @media (max-width: 768px) {
    div[style] {
      background-attachment: scroll !important;
    }
  }
  </style>
  