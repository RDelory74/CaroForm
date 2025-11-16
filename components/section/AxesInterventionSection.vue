<template>
    <section class="py-16 md:py-24" style="background-color: #6DA48F80;">
      <div class="container mx-auto px-4 max-w-6xl">
        
        <!-- Title -->
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Mes domaines d'intervention
          </h2>
          <p class="text-lg text-gray-700 max-w-3xl mx-auto">
            J'accompagne les professionnels et structures de la petite enfance autour de cinq axes complémentaires
          </p>
        </div>
  
        <!-- Content Grid -->
        <div class="grid lg:grid-cols-2 gap-12 items-start">
          
          <!-- Left: Axes List -->
          <div class="space-y-8">
            
            <!-- Axe 1 -->
            <div class="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div class="flex items-start gap-4">
                <div>
                  <h3 class="text-2xl font-bold text-gray-900 mb-3">Formation sur mesure</h3>
                  <p class="text-gray-700 leading-relaxed">
                    Des parcours adaptés aux besoins spécifiques de chaque équipe, pour renforcer les compétences et nourrir les pratiques quotidiennes.
                  </p>
                </div>
              </div>
            </div>
  
            <!-- Axe 2 -->
            <div class="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div class="flex items-start gap-4">
                
                <div>
                  <h3 class="text-2xl font-bold text-gray-900 mb-3">Analyse de la pratique professionnelle</h3>
                  <p class="text-gray-700 leading-relaxed">
                    Des espaces de réflexion collective permettant aux professionnels de prendre du recul, d'interroger leurs pratiques et de construire du sens dans leur action éducative.
                  </p>
                </div>
              </div>
            </div>
  
            <!-- Axe 3 -->
            <div class="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div class="flex items-start gap-4">
                
                <div>
                  <h3 class="text-2xl font-bold text-gray-900 mb-3">Accompagnement consultatif</h3>
                  <p class="text-gray-700 leading-relaxed">
                    Un soutien aux structures dans l'élaboration et la mise en œuvre de projets d'accueil centrés sur l'enfant, sa famille et la qualité éducative.
                  </p>
                </div>
              </div>
            </div>
  
            <!-- Axe 4 -->
            <div class="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div class="flex items-start gap-4">
                
                <div>
                  <h3 class="text-2xl font-bold text-gray-900 mb-3">Éveil artistique et culturel</h3>
                  <p class="text-gray-700 leading-relaxed">
                    La conception de projets favorisant la créativité, l'exploration sensorielle et le lien au vivant dès les premiers âges de la vie.
                  </p>
                </div>
              </div>
            </div>
  
            <!-- Axe 5 -->
            <div class="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div class="flex items-start gap-4">
                
                <div>
                  <h3 class="text-2xl font-bold text-gray-900 mb-3">Déploiement du Référentiel Petite Enfance</h3>
                  <p class="text-gray-700 leading-relaxed">
                    Un accompagnement méthodologique pour intégrer le cadre national de référence et harmoniser les pratiques au sein des équipes.
                  </p>
                </div>
              </div>
            </div>
  
          </div>
  
          <!-- Right: Image (sticky on desktop) -->
          <div class="order-first lg:order-last lg:sticky lg:top-8">
            <img 
              :src="imageSrc" 
              :alt="imageAlt" 
              class="rounded-2xl shadow-2xl w-full h-auto object-cover"
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
    imageSrc: '/intervention.jpg',
    imageAlt: 'Domaines d\'intervention',
  })
  </script>