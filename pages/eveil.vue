<template>
    <div class="min-h-screen bg-gradient-to-b from-blue-50 to-blue-300 p-8">
        <ImageBanner src="/color2.jpg" alt="Ma belle image" />
        
        <div class="max-w-5xl mx-auto space-y-12">
        <!-- Card Intro -->
        <CardIntro
            title="Éveil Artistique et Culturel"
            subtitle="Un Voyage Vers l'Éveil Spirituel"
            image1="/color4.jpg"
            image2="/color3.jpg"
            text="Plongez dans un voyage transformateur pour éveiller votre conscience spirituelle. Apprenez à vous connecter avec votre moi intérieur, à comprendre les énergies qui vous entourent, et à vivre une vie plus alignée avec votre véritable essence."
        />
        <CardExpe/>
        <!-- Axe Cards -->
        <div class="grid gap-8 md:grid-cols-2">
            <AxeCard
            title="Méditation Guidée"
            description="Apprenez des techniques de méditation pour calmer l'esprit et ouvrir votre cœur."
            imageSrc="/peinteveil.png"
            :isVisible="true"
            :delay="0"
            />
            <AxeCard
            title="Pratiques de Pleine Conscience"
            description="Intégrez la pleine conscience dans votre vie quotidienne pour une présence accrue."
            imageSrc="/images/pleine_conscience.jpg"
            :isVisible="true"
            :delay="200"
            />
            <AxeCard
            title="Exploration des Chakras"
            description="Comprenez et harmonisez vos centres énergétiques pour un bien-être holistique."
            imageSrc="/child-learn.png"
            :isVisible="true"
            :delay="400"
            />
            <AxeCard
            title="Connexion avec la Nature"
            description="Découvrez comment la nature peut être un puissant catalyseur pour l'éveil spirituel."
            imageSrc="/images/nature.jpg"
            :isVisible="true"
            :delay="600"
            />
        </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import CardIntro from '@/components/cards/CardIntro.vue'
import AxeCard from '@/components/cards/AxeCard.vue'
import ImageBanner from '@/components/banner/ImageBanner.vue'
import CardExpe from '~/components/cards/CardExpe.vue';
</script>
