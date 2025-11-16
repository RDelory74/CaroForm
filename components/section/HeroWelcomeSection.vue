<template>
    <section class="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
      <div class="container mx-auto px-4 max-w-6xl">
        
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          
          <!-- Left: Image (fixed size) -->
          <div class="order-2 lg:order-1">
            <div class="relative max-w-md mx-auto lg:mx-0">
              <img 
                :src="imageSrc" 
                :alt="imageAlt" 
                class="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
              <!-- Optional decorative element -->
              <div class="absolute -bottom-4 -right-4 w-32 h-32 bg-[#6DA48F80] rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
  
          <!-- Right: Content -->
          <div class="order-1 lg:order-2 text-center lg:text-left">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Accompagner, comprendre, grandir ensemble aujourd'hui
            </h1>
            <p class="text-lg md:text-xl text-gray-700 leading-relaxed">
              Mon parcours s'est construit à la croisée des <span class="font-semibold text-gray-900">sciences humaines</span>, de la <span class="font-semibold text-gray-900">pédagogie</span>, de l'<span class="font-semibold text-gray-900">art et de la culture</span>, guidé par une conviction : <span class="font-bold text-[#6DA48F]">comprendre l'humain pour mieux accompagner les pratiques professionnelles</span>.
            </p>
          </div>
  
        </div>
  
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  interface Props {
    imageSrc?: string
    imageAlt?: string
  }
  
  withDefaults(defineProps<Props>(), {
    imageSrc: '/hero-welcome.jpg',
    imageAlt: 'Accompagnement professionnel',
  })
  </script>