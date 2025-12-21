<template>
    <section class="py-5 md:py-8 overflow-hidden">
      <div
        ref="cardRef"
        class="w-full max-w-5xl mx-auto flex flex-col md:flex-row rounded-2xl shadow-2xl overflow-hidden bg-white"
      >
        
        <!-- Image -->
        <div class="w-full md:w-1/2 min-h-[350px]">
          <img
            :src="image"
            :alt="title"
            class="w-full h-full object-cover"
          />
        </div>
  
        <!-- Content -->
        <div class="w-full md:w-1/2 p-6 md:p-8">
          <h2 class="text-2xl md:text-4xl font-bold mb-6 text-gray-900">
            {{ title }}
          </h2>
  
          <!-- Accordion -->
          <div class="divide-y divide-gray-200">
            <div
              v-for="(item, index) in items"
              :key="index"
            >
              <!-- Header -->
              <button
                class="w-full flex justify-between items-center py-4 text-left font-semibold text-gray-900 hover:text-[#223B81] transition"
                @click="toggle(index)"
                :aria-expanded="openIndex === index"
              >
                <span>{{ item.title }}</span>
  
                <!-- Plus / Minus -->
                <span class="text-2xl font-light">
                  {{ openIndex === index ? '−' : '+' }}
                </span>
              </button>
  
              <!-- Content -->
              <div
                v-show="openIndex === index"
                class="pb-4 text-gray-700 leading-relaxed"
              >
                {{ item.content }}
              </div>
            </div>
          </div>
  
        </div>
      </div>
    </section>
  </template>

<script setup lang="ts">
import { ref } from 'vue'

interface AccordionItem {
  title: string
  content: string
}

defineProps<{
  title: string
  image: string
  items: AccordionItem[]
}>()

const openIndex = ref<number | null>(null)

const toggle = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}
</script>