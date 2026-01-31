<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">

useHead({
  title: 'Nom de ton site | Petite enfance, formation & accompagnement',
  meta: [
    { name: 'description', content: "Accompagnement des professionnels de la petite enfance, formations, analyse de pratiques et projets éducatifs." },
    { name: 'keywords', content: "petite enfance, formation EJE, analyse de pratiques, éducation, pédagogie, parentalité" },
    { name: 'author', content: 'Caroline Delory' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'canonical', href: 'https://caro-form-jwe8.vercel.app/' }
  ],
  htmlAttrs: {
    lang: 'fr'
  }
})
</script>
