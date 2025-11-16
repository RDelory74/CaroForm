<script setup>
const props = defineProps({
  label: { type: String, required: true },
  to: { type: String, default: '/' },
  variant: { 
    type: String, 
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'success', 'danger'].includes(value)
  }
})

const variantClasses = {
  primary: 'bg-[#6DA48F80] text-white hover:bg-[#6DA48F80]',
  secondary: 'bg-gray-600 text-white hover:bg-gray-500',
  success: 'bg-green-600 text-black hover:bg-green-500',
  danger: 'bg-red-600 text-white hover:bg-red-500'
}
</script>

<template>
  <NuxtLink
    :to="to"
    class="inline-block rounded px-8 py-4 font-bold text-lg shadow-md transition-all duration-300 ease-in-out border-2 border-transparent hover:scale-105 no-underline"
    :class="variantClasses[variant]"
  >
    {{ label }}
  </NuxtLink>
</template>
