<template>
  <header class="bg-[#223B81] text-white w-full relative">
    <div class="flex justify-between items-center px-6 py-2 md:px-20">
      
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2">
        <img src="@/public/logoCaro.png" alt="Logo" class="h-20 rounded-full" />
      </NuxtLink>

      <!-- Nav buttons (desktop) -->
      <div class="hidden md:flex gap-8 text-xl">
        <BaseButtonTlwd
          label="Accueil"
          to="/"
          class="nav-btn"
          :class="{ 'nav-active': route.path === '/' }"
        />

        <BaseButtonTlwd
          label="Formations"
          to="/presta"
          class="nav-btn"
          :class="{ 'nav-active': route.path === '/presta' }"
        />

        <BaseButtonTlwd
          label="A propos"
          to="/about"
          class="nav-btn"
          :class="{ 'nav-active': route.path === '/about' }"
        />

        <BaseButtonTlwd
          label="Contact"
          to="/contact"
          class="nav-btn"
          :class="{ 'nav-active': route.path === '/contact' }"
        />
      </div>

      <!-- Burger button (mobile) -->
      <button
        @click="isModalOpen = true"
        class="md:hidden text-3xl z-50 focus:outline-none"
      >
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
          class="bg-[#223B8180] p-6 rounded-lg flex flex-col items-center space-y-6 w-4/5 max-w-sm" 
        > <!-- Close  #223B81 -->
          <!-- Close button -->
          <button
            @click="isModalOpen = false"
            class="self-end mb-4 text-2xl focus:outline-none"
          >
            &times;
          </button>

          <!-- Logo -->
          <NuxtLink to="/" class="mb-4">
            <img src="@/public/logoCaro.png" alt="Logo" class="h-16 mx-auto rounded-full" />
          </NuxtLink>

          <!-- Nav buttons -->
          <BaseButtonTlwd
            v-for="btn in buttons"
            :key="btn.label"
            :label="btn.label"
            :to="btn.to"
            class="w-full text-center nav-btn-mobile"
            :class="{ 'nav-active': route.path === btn.to }"
            @click="handleClick(btn.to)"
          />
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import BaseButtonTlwd from '~/components/button/BaseButtonTlwd.vue'

const router = useRouter()
const route = useRoute()
const isModalOpen = ref(false)

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
  }, 300)
}
</script>

<style scoped>
/* Desktop style override (no background, no border, no shadow) */
.nav-btn {
  @apply !bg-transparent !border-0 !shadow-none !px-0 !py-0 !rounded-none !text-white hover:scale-100 hover:text-white hover:opacity-80 no-underline;
}

/* Active underline effect */
.nav-active {
  @apply underline underline-offset-8 font-semibold;
}

/* Mobile version (same override but centered) */
.nav-btn-mobile {
  @apply !bg-transparent !border-0 !shadow-none !px-0 !py-2 !rounded-none !text-white text-xl hover:opacity-80 no-underline;
}

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