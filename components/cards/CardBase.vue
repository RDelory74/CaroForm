<template>
  <div class="card p-4 bg-white rounded-lg shadow-md flex flex-col items-start gap-3">
    <div class="icon w-12 h-12">
      <slot name="icon"></slot>
    </div>
    <h3 class="text-lg font-bold"><slot name="title">Titre</slot></h3>
    <p class="text-gray-700 text-sm"><slot name="description">Description</slot></p>
    <slot name="action"></slot>
  </div>
</template>

<script setup>
// card de base réutilisable pour tous types de contenu
</script>

<style scoped>
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0,0,0,0.2);
}
</style>
