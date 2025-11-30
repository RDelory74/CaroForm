<template>
  <section class="py-16 md:py-24 overflow-hidden" style="background-color: #6DA48F80;">
    <div class="container mx-auto px-4 max-w-6xl">

      <!-- Title -->
      <div 
        ref="titleRef"
        :class="[
          'text-center mb-12 transition-all duration-1000 ease-out',
          isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        ]"
      >
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Mes domaines d'intervention
        </h2>
        <p class="text-lg text-gray-700 max-w-3xl mx-auto">
          J'accompagne les équipes à mettre en mots leur travail, comprendre les enjeux contemporains et co-construire
          des pratiques ajustées
        </p>
      </div>

      <!-- Content Grid -->
      <div class="grid lg:grid-cols-2 gap-12 items-start">

        <!-- Left: Axes List -->
        <div 
          ref="axesRef"
          :class="[
            'space-y-8 transition-all duration-1000 ease-out delay-200',
            isAxesVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          ]"
        >

          <!-- Axe 1 -->
          <div
            :class="[
              'bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500',
              isAxesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            ]"
            :style="{ transitionDelay: isAxesVisible ? '400ms' : '0ms' }"
          >
            <div class="flex items-start gap-4">
              <div>
                <h3 class="text-2xl font-bold text-gray-900 mb-3">Formation sur mesure</h3>
                <p class="text-gray-700 leading-relaxed">
                  Des parcours adaptés aux besoins spécifiques de chaque équipe, pour renforcer les compétences et
                  nourrir les pratiques quotidiennes.
                </p>
              </div>
            </div>
          </div>

          <!-- Axe 2 -->
          <div
            :class="[
              'bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500',
              isAxesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            ]"
            :style="{ transitionDelay: isAxesVisible ? '500ms' : '0ms' }"
          >
            <div class="flex items-start gap-4">

              <div>
                <h3 class="text-2xl font-bold text-gray-900 mb-3">Analyse de la pratique professionnelle</h3>
                <p class="text-gray-700 leading-relaxed">
                  Des espaces de réflexion collective permettant aux professionnels de prendre du recul, d'interroger
                  leurs pratiques et de construire du sens dans leur action éducative.
                </p>
              </div>
            </div>
          </div>

          <!-- Axe 3 -->
          <div
            :class="[
              'bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500',
              isAxesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            ]"
            :style="{ transitionDelay: isAxesVisible ? '600ms' : '0ms' }"
          >
            <div class="flex items-start gap-4">

              <div>
                <h3 class="text-2xl font-bold text-gray-900 mb-3">Accompagnement consultatif</h3>
                <p class="text-gray-700 leading-relaxed">
                  Un soutien aux structures dans l'élaboration et la mise en œuvre de projets d'accueil centrés sur
                  l'enfant, sa famille et la qualité éducative.
                </p>
              </div>
            </div>
          </div>

          <!-- Axe 4 -->
          <div
            :class="[
              'bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500',
              isAxesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            ]"
            :style="{ transitionDelay: isAxesVisible ? '700ms' : '0ms' }"
          >
            <div class="flex items-start gap-4">

              <div>
                <h3 class="text-2xl font-bold text-gray-900 mb-3">Éveil artistique et culturel</h3>
                <p class="text-gray-700 leading-relaxed">
                  La conception de projets favorisant la créativité, l'exploration sensorielle et le lien au vivant dès
                  les premiers âges de la vie.
                </p>
              </div>
            </div>
          </div>

          <!-- Axe 5 -->
          <div
            :class="[
              'bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500',
              isAxesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            ]"
            :style="{ transitionDelay: isAxesVisible ? '800ms' : '0ms' }"
          >
            <div class="flex items-start gap-4">

              <div>
                <h3 class="text-2xl font-bold text-gray-900 mb-3">Déploiement du Référentiel Petite Enfance</h3>
                <p class="text-gray-700 leading-relaxed">
                  Un accompagnement méthodologique pour intégrer le cadre national de référence et harmoniser les
                  pratiques au sein des équipes.
                </p>
              </div>
            </div>
          </div>

        </div>

        <!-- Right: Image (sticky on desktop) -->
        <div 
          ref="imageRef"
          :class="[
            'order-first lg:order-last lg:sticky lg:top-8 transition-all duration-1000 ease-out delay-300',
            isImageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          ]"
        >
          <img :src="imageSrc" :alt="imageAlt" class="rounded-2xl shadow-2xl w-full h-auto object-cover" />
        </div>

      </div>

    </div>
    <div 
      ref="buttonRef"
      :class="[
        'text-center mt-4 p-4 transition-all duration-1000 ease-out delay-1000',
        isButtonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      ]"
    >
      <ButtonBaseButtonTlwd label="Me contacter" to="/contact" variant="secondary" />
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
  imageSrc: '/intervention.jpg',
  imageAlt: 'Domaines d\'intervention',
})

const titleRef = ref<HTMLElement | null>(null)
const axesRef = ref<HTMLElement | null>(null)
const imageRef = ref<HTMLElement | null>(null)
const buttonRef = ref<HTMLElement | null>(null)
const isTitleVisible = ref(false)
const isAxesVisible = ref(false)
const isImageVisible = ref(false)
const isButtonVisible = ref(false)

const handleScroll = () => {
  const windowHeight = window.innerHeight
  
  // Check title visibility
  if (titleRef.value && !isTitleVisible.value) {
    const titleRect = titleRef.value.getBoundingClientRect()
    if (titleRect.top <= windowHeight * 0.8) {
      isTitleVisible.value = true
    }
  }
  
  // Check axes visibility
  if (axesRef.value && !isAxesVisible.value) {
    const axesRect = axesRef.value.getBoundingClientRect()
    if (axesRect.top <= windowHeight * 0.8) {
      isAxesVisible.value = true
    }
  }
  
  // Check image visibility
  if (imageRef.value && !isImageVisible.value) {
    const imageRect = imageRef.value.getBoundingClientRect()
    if (imageRect.top <= windowHeight * 0.8) {
      isImageVisible.value = true
    }
  }

  // Check button visibility
  if (buttonRef.value && !isButtonVisible.value) {
    const buttonRect = buttonRef.value.getBoundingClientRect()
    if (buttonRect.top <= windowHeight * 0.8) {
      isButtonVisible.value = true
    }
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