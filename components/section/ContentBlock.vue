<template>
    <div class="pl-2 lg:pl-6">
      <h4 class="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2 pl-6">
        <span v-if="icon" class="w-6 h-6 flex-shrink-0">{{ icon }}</span>
        {{ title }}
      </h4>
      <p class="text-gray-700 border-l-4 border-accent pl-2 lg:pl-6">{{ text }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue'
  
  interface Props {
    icon?: string
    title: string
    text: string
  }
  
  const props = defineProps<Props>()
  </script>
  