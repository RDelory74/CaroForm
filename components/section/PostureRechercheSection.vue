<template>
    <section class="bg-white py-16 md:py-24">
      <div class="container mx-auto px-4 max-w-6xl">
        
        <!-- Title -->
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Une posture inspirée par la recherche
          </h2>
          <p class="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Mon approche professionnelle s'appuie sur les travaux de chercheurs, cliniciens et pédagogues dont les réflexions nourrissent ma pratique :
          </p>
        </div>
  
        <!-- Image + Content Layout -->
        <div class="grid md:grid-cols-2 gap-12 items-start">
          
          <!-- Left: Researchers List -->
          <div class="space-y-6">
            <div class="border-l-4 border-[#6DA48F80] pl-6 py-2 hover:bg-indigo-50 transition-colors duration-200">
              <h3 class="text-xl font-bold text-gray-900 mb-1">Irène Théry</h3>
              <p class="text-gray-600">Transformations sociales de la famille et liens parent-enfant</p>
            </div>
  
            <div class="border-l-4 border-[#6DA48F80] pl-6 py-2 hover:bg-indigo-50 transition-colors duration-200">
              <h3 class="text-xl font-bold text-gray-900 mb-1">Pascale Molinier</h3>
              <p class="text-gray-600">Travail du Care et reconnaissance du travail relationnel</p>
            </div>
  
            <div class="border-l-4 border-[#6DA48F80] pl-6 py-2 hover:bg-indigo-50 transition-colors duration-200">
              <h3 class="text-xl font-bold text-gray-900 mb-1">Catherine Sellenet</h3>
              <p class="text-gray-600">Approche systémique de la parentalité et de la coéducation</p>
            </div>
  
            <div class="border-l-4 border-[#6DA48F80] pl-6 py-2 hover:bg-indigo-50 transition-colors duration-200">
              <h3 class="text-xl font-bold text-gray-900 mb-1">Sylviane Giampino</h3>
              <p class="text-gray-600">Charte Nationale du Jeune Enfant - CNAJE et Référentiel Petite Enfance</p>
            </div>
  
            <div class="border-l-4 border-[#6DA48F80] pl-6 py-2 hover:bg-indigo-50 transition-colors duration-200">
              <h3 class="text-xl font-bold text-gray-900 mb-1">Sophie Marinopoulos</h3>
              <p class="text-gray-600">Santé culturelle et éveil artistique et culturel</p>
            </div>
  
            <div class="border-l-4 border-[#6DA48F80] pl-6 py-2 hover:bg-indigo-50 transition-colors duration-200">
              <h3 class="text-xl font-bold text-gray-900 mb-1">Michel Vandenbroeck</h3>
              <p class="text-gray-600">Qualité éducative, interactions enfants-professionnels et impact sur le développement de l'enfant</p>
            </div>
          </div>
  
          <!-- Right: Image -->
          <div class="order-first md:order-last">
            <img 
              :src="imageSrc" 
              :alt="imageAlt" 
              class="rounded-xl shadow-2xl w-full h-auto object-cover"
            />
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
    imageSrc: '/recherche.jpg',
    imageAlt: 'Posture inspirée par la recherche',
  })
  </script>