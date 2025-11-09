<template>
  <NuxtLink
    :to="to"
    class="inline-block rounded px-8 py-4 font-bold text-lg shadow-md transition-all duration-300 ease-in-out
           bg-transparent border-2 border-transparent hover:scale-105 no-underline"
    :class="[
      textColor,
      bgColor,
      hoverColor
    ]"
  >
    {{ label }}
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  label: { type: String, required: true },
  to: { type: String, default: '/' },
  textColor: { type: String, default: 'text-black' },
  bgColor: { type: String, default: 'bg-transparent' },
  hoverColor: { type: String, default: 'hover:bg-transparent hover:text-black' }
})
</script>
