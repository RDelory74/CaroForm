<template>
  <header
    class="bg-[#223B81] text-white w-full fixed top-0 left-0 z-40
           transition-transform duration-300 ease-in-out"
    :class="isVisible ? 'translate-y-0' : '-translate-y-full'"
  >
    <div class="flex justify-between items-center px-6 py-2 md:px-20">
      
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2">
        <img src="@/public/logoCaro.png" alt="Logo" class="h-10 rounded-full" />
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
          label="Eveil Artistique"
          to="/eveil"
          class="nav-btn"
          :class="{ 'nav-active': route.path === '/eveil' }"
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
        class="fixed top-0 left-0 w-screen h-screen bg-black/20 backdrop-blur-sm flex justify-center items-center z-[999]"
        @click.self="isModalOpen = false"
      >
        <div
          class="bg-[#223B8180] p-6 rounded-lg flex flex-col items-center space-y-6 w-4/5 max-w-sm"
        >
          <button
            @click="isModalOpen = false"
            class="self-end mb-4 text-2xl focus:outline-none"
          >
            &times;
          </button>

          <NuxtLink to="/" class="mb-4">
            <img src="@/public/logoCaro.png" alt="Logo" class="h-16 mx-auto rounded-full" />
          </NuxtLink>

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
  import { ref, onMounted, onUnmounted } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import BaseButtonTlwd from '~/components/button/BaseButtonTlwd.vue'
  
  const router = useRouter()
  const route = useRoute()
  
  const isModalOpen = ref(false)
  
  // 🔽 NOUVEAU
  const isVisible = ref(true)
  let lastScrollY = 0
  const SCROLL_THRESHOLD = 80
  
  const handleScroll = () => {
    const currentScrollY = window.scrollY
  
    if (currentScrollY < lastScrollY) {
      // Scroll vers le haut
      isVisible.value = true
    } else if (currentScrollY > SCROLL_THRESHOLD) {
      // Scroll vers le bas
      isVisible.value = false
    }
  
    lastScrollY = currentScrollY
  }
  
  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
  })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
  
  const buttons = [
    { label: 'Accueil', to: '/' },
    { label: 'Formations', to: '/presta' },
    { label: 'A propos', to: '/about' },
    { label: 'Contact', to: '/contact' },
    { label: 'Eveil Artistique', to: '/eveil' },
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