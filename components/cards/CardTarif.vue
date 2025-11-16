<template>
  <CardBase>
    <template #icon>
      <img src="~/assets/svg/euro.svg" alt="Tarifs et durée" />
    </template>
    <template #title>Tarifs et durée</template>
    <template #description>
      Consultez le nombre d’heures et le tarif associé à chaque type d’intervention.
    </template>
  </CardBase>
</template>

<script setup>
import CardBase from './CardBase.vue'
</script>