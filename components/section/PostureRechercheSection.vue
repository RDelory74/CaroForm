<template>
    <section class="bg-white py-6 md:py-8">
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
            <div class="border-l-4 border-secondary pl-6 py-2 hover:bg-indigo-50 transition-colors duration-200">
              <h3 class="text-xl font-bold text-gray-900 mb-1">Irène Théry</h3>
              <p class="text-gray-600">Sa réflexion sur la famille et les liens de filiation nourrit ma compréhension des transformations sociales et symboliques des relations parent-enfant.</p>
            </div>
  
            <div class="border-l-4 border-secondary pl-6 py-2 hover:bg-indigo-50 transition-colors duration-200">
              <h3 class="text-xl font-bold text-gray-900 mb-1">Pascale Molinier</h3>
              <p class="text-gray-600">Sa pensée sur le travail du care met en lumière la reconnaissance du travail relationnel et émotionnel dans les métiers du lien.</p>
            </div>
  
            <div class="border-l-4 border-secondary pl-6 py-2 hover:bg-indigo-50 transition-colors duration-200">
              <h3 class="text-xl font-bold text-gray-900 mb-1">Catherine Sellenet</h3>
              <p class="text-gray-600">Son approche systémique de la petite enfance, de la parentalité et de la coéducation inspire ma manière d’accompagner les professionnels et les familles.</p>
            </div>
  
            <div class="border-l-4 border-secondary pl-6 py-2 hover:bg-indigo-50 transition-colors duration-200">
              <h3 class="text-xl font-bold text-gray-900 mb-1">Arno Stern</h3>
              <p class="text-gray-600">Considère la création artistique comme une expression spontanée et universelle de l’être humain. À travers le dispositif du Closlieu, il propose un espace protégé de création libre, sans jugement ni interprétation. Son travail met en avant la liberté d’expression, la confiance dans le geste créatif et le développement de la personne par l’acte artistique.</p>
            </div>
  
            <div class="border-l-4 border-secondary pl-6 py-2 hover:bg-indigo-50 transition-colors duration-200">
              <h3 class="text-xl font-bold text-gray-900 mb-1">Sophie Marinopoulos</h3>
              <p class="text-gray-600">Sur le principe de santé culturelle et l’importance de l’éveil artistique et culturel dès le plus jeune âge.</p>
            </div>
  
            <div class="border-l-4 border-secondary pl-6 py-2 hover:bg-indigo-50 transition-colors duration-200">
              <h3 class="text-xl font-bold text-gray-900 mb-1">Cynthia Fleury et Antoine Fenoglio</h3>
              <p class="text-gray-600">Pour l’approche autour du design du care, pratique éthique et politique du « prendre soin ». Penser des environnements et des organisations attentifs à la vulnérabilité humaine. Son objectif est de restaurer la capacité d’agir et de renforcer la dignité des personnes.</p>
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