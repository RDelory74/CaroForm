<template>
    <div class="group relative max-w-2xl my-6 mx-auto overflow-hidden rounded-3xl bg-grey-500 p-8 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
      <!-- Header -->
      <div class="mb-6 text-center">
        <h2 class="mb-2 text-4xl font-extrabold tracking-tight text-black drop-shadow-lg md:text-5xl">
          {{ title }}
        </h2>
        <p class="text-lg font-medium text-black md:text-xl">
          {{ subtitle }}
        </p>
      </div>
      
      <!-- Images Grid -->
      <div class="mb-6 grid gap-4 sm:grid-cols-2">
        <div class="group/img relative aspect-[4/3] overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md">
          <img 
            :src="image1" 
            :alt="image1Alt" 
            class="h-full w-full object-cover transition-transform duration-500 group-hover/img:scale-110"
          />
        </div>
        <div class="group/img relative aspect-[4/3] overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md">
          <img 
            :src="image2" 
            :alt="image2Alt" 
            class="h-full w-full object-cover transition-transform duration-500 group-hover/img:scale-110"
          />
        </div>
      </div>
      
      <!-- Content -->
      <div class="rounded-2xl border border-white/20 bg-white/15 p-6 backdrop-blur-xl">
        <p class="text-base leading-relaxed text-black md:text-lg">
          {{ text }}
        </p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  interface Props {
    title: string
    subtitle: string
    image1: string
    image2: string
    image1Alt?: string
    image2Alt?: string
    text: string
  }
  
  withDefaults(defineProps<Props>(), {
    image1Alt: 'Image 1',
    image2Alt: 'Image 2',
  })
  </script>