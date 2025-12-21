<template>
    <ImageBanner src="/color2.jpg" alt="Ma belle image" class="!py-0 !rounded-none" />
    <div class="min-h-screen bg-gradient-to-b from-blue-50 to-blue-300 p-8">


        <div class="max-w-5xl mx-auto space-y-12">
            <!-- Card Intro -->
            <CardIntro title="Éveil Artistique et Culturel" subtitle="Un Chemin d’humanisation dès la naissance"
                image1="/color4.jpg" image2="/color3.jpg"
                text="L’éveil artistique et culturel n’est pas un « plus » dans la vie d’un enfant : c’est une véritable nourriture intérieure. Dès ses premiers jours, le tout-petit a besoin de voix, de gestes, d’images et de poésie pour entrer en relation avec le monde. Ces expériences sensibles nourrissent sa construction identitaire, sa santé psychique et la qualité du lien parent-enfant." />
            <CardExpe title="Expériences en accueil collectif et individuel"
                intro="En proposant des moments artistiques adaptés — contes, musique, arts visuels, rencontres sensibles — vous offrez à l’enfant un espace où se tissent confiance, émotion, curiosité et sécurité intérieure."
                :blocks="[
                    {
                        icon: '🤝',
                        title: 'Cultiver le lien humain : au cœur de chaque expérience',
                        text: 'La santé culturelle place la relation au centre : émotions partagées, beauté, découverte, créativité. Elle permet à l’enfant comme à l’adulte de retrouver un ancrage, une respiration dans un monde parfois trop rapide et déshumanisé. Chaque rencontre artistique devient alors un acte de lien, un moment où l’on se reconnaît et où l’on se reconnecte.'
                    },
                    {
                        icon: '🌱',
                        title: 'Un antidote à la “civilisation mécanique”',
                        text: 'À l’heure où les écrans et l’efficacité dominent, l’éveil culturel réintroduit ce dont les bébés ont le plus besoin : des présences incarnées, des gestes lents, des histoires partagées, des images et des sons qui ont du sens. La culture devient un espace de respiration, de douceur et de vitalité pour les familles.'
                    },
                    {
                        icon: '👨‍👩‍👧',
                        title: 'Le rôle essentiel des parents',
                        text: 'Les parents sont les premiers artistes de la vie de l’enfant. Leur voix, leurs chansons, leurs récits construisent un bain culturel rassurant et structurant. Mes accompagnements et ateliers soutiennent cette relation et offrent aux familles des moments partagés qui renforcent la complicité, la tendresse et la confiance parentale.'
                    },
                    {
                        icon: '🎨',
                        title: 'Un droit pour tous : réduire les inégalités dès la petite enfance',
                        text: 'L’accès à la culture est un droit fondamental. Offrir aux enfants — quels que soient leur parcours ou leur milieu — des expériences artistiques variées, des œuvres et des rencontres sensibles, c’est leur permettre de se construire pleinement, d’ouvrir leur regard, de développer leur créativité.'
                    },
                    {
                        icon: '🌈',
                        title: 'Pour mieux vivre ensemble',
                        text: 'L’éveil artistique et culturel favorise la mixité, la curiosité et la tolérance. Les ateliers réunissant enfants, parents, artistes et professionnels deviennent des espaces de partage, de joie et de cohésion. Une manière concrète de bâtir une société plus sensible, plus solidaire et plus vivante.'
                    },
                    {
                        icon: '🎭',
                        title: 'Les artistes : des passeurs d’humanité',
                        text: 'En s’invitant dans les lieux d’accueil, les artistes ouvrent des mondes. Ils éveillent l’imaginaire, invitent à ressentir, à rêver, à regarder autrement. Leur présence aux côtés des équipes éducatives, sociales ou médicales enrichit profondément le quotidien des enfants et des familles.'
                    }
                ]" :footer="[
    'À travers de mes actions, j’accompagne les professionnels, les structures et les familles dans la mise en place d’un véritable écosystème culturel : chaleureux, sensible, accessible dès la naissance, et profondément centré sur la relation.',
    ]" />

            <!-- Axe Cards -->
            <div class="grid gap-8 md:grid-cols-2">
                <AxeCard title="Experience Artistique pour les Tout-Petits"
                    description="Offrir aux enfants des expériences artistiques fondatrices"
                    imageSrc="/inspiring-child.png" :isVisible="true" :delay="0" />
                <AxeCard title="Accompagnement des Parents"
                    description="Soutenir les parents dans leur rôle créatif"
                    imageSrc="/parent-eveil.png" :isVisible="true" :delay="200" />
                <AxeCard title="Au sein de la Communauté"
                    description="Renforcer les liens humains au cœur des territoires"
                    imageSrc="/community-eveil.png" :isVisible="true" :delay="400" />
                <AxeCard title="Au sein de l'environnement"
                    description="Créer des espaces de beauté, de respiration et d’imaginaire"
                    imageSrc="/environ-eveil.png" :isVisible="true" :delay="600" />
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
