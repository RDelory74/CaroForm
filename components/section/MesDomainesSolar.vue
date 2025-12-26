<template>
    <section class="py-8 md:py-16 overflow-hidden" style="background-color: #E0C734;">
      <div class="container mx-auto px-4 max-w-7xl">
  
        <!-- Title -->
        <div
          ref="titleRef"
          :class="[
            'text-center mb-4 transition-all duration-1000 ease-out',
            visible.title ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
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
  
        <!-- Mobile Layout -->
        <div class="lg:hidden space-y-8">
          <AxeCard
            v-for="(axe, index) in axes"
            :key="index"
            :title="axe.title"
            :description="axe.description"
            :imageSrc="axe.imageSrc"
            :isVisible="visible.mobileAxes"
            :delay="400 + index * 100"
          />
        </div>
  
        <!-- Desktop Layout -->
        <div class="hidden lg:block relative" style="min-height: 900px;">
  
          <!-- Central Image -->
          <div
            ref="centralRef"
            :class="[
              'absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-1000 ease-out delay-300',
              visible.central ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            ]"
          >
            <div class="relative">
              <img
                :src="centralImageSrc"
                :alt="centralImageAlt"
                class="rounded-full shadow-2xl w-80 h-80 object-cover border-8 border-white"
              />
              <div class="absolute inset-0 rounded-full bg-white/20 blur-xl -z-10"></div>
            </div>
          </div>
  
          <!-- AXE 1 -->
          <div
            ref="axe1Ref"
            :class="[
              'absolute transition-all duration-1000 ease-out delay-500',
              visible.axe1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            ]"
            style="top:20%; left:2%; transform:translateY(-50%); width:30%;height:20%"
          >
            <AxeCard v-bind="axes[0]" :isVisible="true" class="w-full h-full" />
          </div>
  
          <!-- AXE 2 -->
          <div
            ref="axe2Ref"
            :class="[
              'absolute transition-all duration-1000 ease-out delay-600',
              visible.axe2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            ]"
            style="bottom:35%; left:12%; width:30%;height:20%"
          >
            <AxeCard v-bind="axes[1]" :isVisible="true"  />
          </div>
  
          <!-- AXE 3 -->
          <div
            ref="axe3Ref"
            :class="[
              'absolute transition-all duration-1000 ease-out delay-600',
              visible.axe3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            ]"
            style="bottom:5%; left:50%; transform:translateX(-50%); width:30%;height:20%"
          >
            <AxeCard v-bind="axes[2]" :isVisible="true"  />
          </div>
  
          <!-- AXE 4 -->
          <div
            ref="axe4Ref"
            :class="[
              'absolute transition-all duration-1000 ease-out delay-600',
              visible.axe4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            ]"
            style="bottom:35%; right:12%; width:30%;height:20%"
          >
            <AxeCard v-bind="axes[3]" :isVisible="true"  />
          </div>
  
          <!-- AXE 5 -->
          <div
            ref="axe5Ref"
            :class="[
              'absolute transition-all duration-1000 ease-out delay-600',
              visible.axe5 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            ]"
            style="top:20%; right:2%; transform:translateY(-50%); width:30%;height:20% ;"
          >
            <AxeCard v-bind="axes[4]" :isVisible="true"  />
          </div>
  
        </div>
  
        <!-- Contact Button -->
        <div
          ref="buttonRef"
          :class="[
            'text-center mt-4 p-4 transition-all duration-1000 ease-out delay-700',
            visible.button ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          ]"
        >
          <ButtonBaseButtonTlwd label="Découvrir" to="/presta" variant="secondary" />
        </div>
  
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import AxeCard from '@/components/cards/AxeCard.vue'
  
  interface Props {
    centralImageSrc?: string
    centralImageAlt?: string
  }
  
  withDefaults(defineProps<Props>(), {
    centralImageSrc: '/central-child.png',
    centralImageAlt: "Centre d'intervention",
  })
  
  /* AXES DATA */
  const axes = [
    { title: "Formation sur mesure", description: "Des parcours adaptés...", imageSrc: "/analyse-practice.png" },
    { title: "Analyse de la pratique professionnelle", description: "Des espaces de réflexion...", imageSrc: "/analyse-practice-team.png" },
    { title: "Accompagnement consultatif", description: "Un soutien personnalisé...", imageSrc: "/team-working.png" },
    { title: "Éveil artistique et culturel", description: "Des projets pour la créativité...", imageSrc: "/color1.jpg" },
    { title: "Référentiel Petite Enfance", description: "Accompagnement dans le cadre national...", imageSrc: "/child-learn.png" }
  ]
  
  /* REFS */
  const titleRef = ref(null)
  const centralRef = ref(null)
  const axe1Ref = ref(null)
  const axe2Ref = ref(null)
  const axe3Ref = ref(null)
  const axe4Ref = ref(null)
  const axe5Ref = ref(null)
  const buttonRef = ref(null)
  
  /* VISIBILITY STATE */
  const visible = ref({
    title: false,
    central: false,
    axe1: false,
    axe2: false,
    axe3: false,
    axe4: false,
    axe5: false,
    button: false,
    mobileAxes: false,
  })
  
  /* OBSERVER FUNCTION */
  function observe(el: any, key: keyof typeof visible.value) {
    if (!el) return
  
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          visible.value[key] = true
          io.unobserve(el)
        }
      })
    }, { threshold: 0.3 })
  
    io.observe(el)
  }
  
  onMounted(() => {
    observe(titleRef.value, "title")
    observe(centralRef.value, "central")
    observe(axe1Ref.value, "axe1")
    observe(axe2Ref.value, "axe2")
    observe(axe3Ref.value, "axe3")
    observe(axe4Ref.value, "axe4")
    observe(axe5Ref.value, "axe5")
    observe(buttonRef.value, "button")
  
    /* MOBILE AXES → Déclenchés dès que le titre entre */
    observe(titleRef.value, "mobileAxes")
  })
  </script>
  