<template>
  <CardBase>
    <template #icon>
    <img src="~/assets/svg/checklist.svg" alt="Déroulement" /> 
  </template>

    <template #title>
      {{ title }}
    </template>

    <template #description>
      {{ description }}
    </template>
  </CardBase>
</template>

<script setup lang="ts">
import CardBase from './CardBase.vue'

interface Props {
  title: string
  description: string
  icon?: string
  iconAlt?: string
}

withDefaults(defineProps<Props>(), {
  icon: new URL('~/assets/svg/checklist.svg', import.meta.url).href,
  iconAlt: 'Déroulement',
})
</script>
