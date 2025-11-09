<template>
  <header class="bg-[#6DA48F80] text-white w-full relative">
    <div class="flex justify-between items-center px-6 py-4 md:px-20">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2">
        <img src="@/public/logo-sharpped.png" alt="Logo" class="h-20" />
      </NuxtLink>

      <!-- Nav buttons (desktop) -->
      <div class="hidden md:flex gap-8 text-xl">
        <BaseButtonTlwd label="Accueil" hoverColor="hover:bg-transparent hover:text-black" to="/" />
        <BaseButtonTlwd label="Formations" hoverColor="hover:bg-transparent hover:text-black" to="/presta" />
        <BaseButtonTlwd label="A propos" hoverColor="hover:bg-transparent hover:text-black" to="/about" />
        <BaseButtonTlwd label="Contact" hoverColor="hover:bg-transparent hover:text-black" to="/contact" />
      </div>

      <!-- Burger button (mobile) -->
      <button @click="isModalOpen = true" class="md:hidden text-3xl z-50 focus:outline-none">
        &#9776;
      </button>
    </div>

    <!-- Modal mobile -->
    <transition name="slide-right">
      <div
        v-if="isModalOpen"
        class="fixed inset-0 bg-black/20 backdrop-blur-sm flex justify-center items-center z-50"
        @click.self="isModalOpen = false"
      >
        <div
          class="bg-[#6DA48F80] p-6 rounded-lg flex flex-col items-center space-y-6 w-4/5 max-w-sm"
        >
          <!-- Close button -->
          <button @click="isModalOpen = false" class="self-end mb-4 text-2xl focus:outline-none">&times;</button>

          <!-- Logo -->
          <NuxtLink to="/" class="mb-4">
            <img src="@/public/logo-sharpped.png" alt="Logo" class="h-16 mx-auto" />
          </NuxtLink>

          <!-- Nav buttons -->
          <BaseButtonTlwd
            v-for="btn in buttons"
            :key="btn.label"
            :label="btn.label"
            :to="btn.to"
            class="w-full text-center"
            @click="handleClick(btn.to)"
          />
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import BaseButtonTlwd from '~/components/button/BaseButtonTlwd.vue'

const isModalOpen = ref(false)
const router = useRouter()

const buttons = [
  { label: 'Accueil', to: '/' },
  { label: 'Formations', to: '/presta' },
  { label: 'A propos', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

const handleClick = (to) => {
  isModalOpen.value = false
  setTimeout(() => {
    router.push(to)
  }, 300) // délai pour animation
}
</script>

<style scoped>
/* Animation slide depuis la droite */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.3s ease;
}
.slide-right-enter-from {
  transform: translateX(100%);
}
.slide-right-enter-to {
  transform: translateX(0%);
}
.slide-right-leave-from {
  transform: translateX(0%);
}
.slide-right-leave-to {
  transform: translateX(100%);
}
</style>