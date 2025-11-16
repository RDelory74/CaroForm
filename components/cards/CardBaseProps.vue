<template>
    <div class="card p-4 bg-white rounded-lg shadow-md flex flex-col items-start gap-3">
        <!-- SVG ou icône -->
        <div v-if="icon" class="icon w-12 h-12 mb-2">
            <img :src="icon" :alt="title" >
        </div>

        <!-- Image -->
        <div v-if="image" class="w-full h-32 overflow-hidden rounded-md mb-3">
            <img :src="image" :alt="title" class="w-full h-full object-cover">
        </div>

        <!-- Titre -->
        <h3 class="text-lg md:text-xl font-bold">{{ title }}</h3>

        <!-- Texte / description -->
        <p class="text-gray-700 text-sm md:text-base">{{ text }}</p>
    </div>
</template>

<script setup>
defineProps({
    title: { type: String, required: true },
    text: { type: String, required: true },
    image: { type: String, required: false, default: '' },
    icon: { type: String, required: false, default: '' } 
})
</script>

<style scoped>
.card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
}
</style>