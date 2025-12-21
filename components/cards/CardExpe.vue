<template>
    <div class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
      <!-- Header -->
      <div :class="['p-6', headerBgColor]">
        <h3 class="text-2xl md:text-3xl font-bold flex items-center gap-3" :class="headerTextColor">
          {{ title }}
        </h3>
      </div>
  
      <!-- Content -->
      <div class="p-8">
        <p v-if="intro" class="text-gray-700 mb-6 leading-relaxed text-lg">{{ intro }}</p>
  
        <!-- Blocks -->
        <div class="space-y-6">
          <ContentBlock
            v-for="(block, index) in blocks"
            :key="index"
            :icon="block.icon"
            :title="block.title"
            :text="block.text"
          />
        </div>
  
        <!-- Footer -->
        <div v-if="footer" class="mt-8 pt-8 border-t border-gray-200">
          <p v-for="(paragraph, idx) in footer" :key="idx" class="text-gray-700 leading-relaxed">
            {{ paragraph }}
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue'
  import ContentBlock from '@/components/section/ContentBlock.vue'
  
  interface Block {
    icon?: string
    title: string
    text: string
  }
  
  interface Props {
    title: string
    intro?: string
    blocks: Block[]
    footer?: string[]
    headerBgColor?: string
    headerTextColor?: string
  }
  
  const props = defineProps<Props>()
  const { title, intro, blocks, footer, headerBgColor = 'bg-[#E0C734]', headerTextColor = 'text-[#223B81]' } = props
  </script>
  