<template>
<div class="group relative max-w-4xl my-6 mx-auto bg-white p-4 md:p-8 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
      <!-- Desktop Layout -->
      <div class="hidden md:flex md:gap-8">
        <!-- Images Section - Left Side -->
        <div class="relative w-1/3 flex-shrink-0">
          <!-- Image 1 - Background (20% width, top-left) -->
          <div class="relative w-full aspect-[3/4] overflow-hidden bg-white/10 backdrop-blur-md">
            <img 
              :src="image1" 
              :alt="image1Alt" 
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          
          <!-- Image 2 - Overlapping (smaller, bottom-right corner) -->
          <div class="absolute bottom-0 right-0 w-1/2 aspect-square overflow-hidden bg-white/10 backdrop-blur-md shadow-xl translate-x-1/6 translate-y-1/6">
            <img 
              :src="image2" 
              :alt="image2Alt" 
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>
        
        <!-- Content Section - Right Side -->
        <div class="flex-1 flex flex-col justify-center space-y-6">
          <div>
            <h2 class="mb-3 text-4xl font-extrabold tracking-tight text-black drop-shadow-lg lg:text-5xl">
              {{ title }}
            </h2>
            <p class="text-xl font-medium text-black/80">
              {{ subtitle }}
            </p>
          </div>
          
          <div class="border-l-4 border-black/20 pl-6 py-4">
            <p class="text-lg leading-relaxed text-black">
              {{ text }}
            </p>
          </div>
        </div>
      </div>
      
      <!-- Mobile Layout -->
      <div class="flex flex-col md:hidden space-y-6">
        <!-- Images Section -->
        <div class="relative w-full max-w-xs mx-auto">
          <!-- Image 1 - Background -->
          <div class="relative w-full aspect-[3/4] overflow-hidden bg-white/10 backdrop-blur-md">
            <img 
              :src="image1" 
              :alt="image1Alt" 
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          
          <!-- Image 2 - Overlapping -->
          <div class="absolute bottom-0 right-0 w-1/2 aspect-square overflow-hidden bg-white/10 backdrop-blur-md shadow-xl translate-x-1/6 translate-y-1/6">
            <img 
              :src="image2" 
              :alt="image2Alt" 
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>
        
        <!-- Content Section -->
        <div class="space-y-4 text-center">
          <div>
            <h2 class="mb-2 text-3xl font-extrabold tracking-tight text-black drop-shadow-lg">
              {{ title }}
            </h2>
            <p class="text-lg font-medium text-black/80">
              {{ subtitle }}
            </p>
          </div>
          
          <div class="border border-black/20 p-4">
            <p class="text-base leading-relaxed text-black">
              {{ text }}
            </p>
          </div>
        </div>
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