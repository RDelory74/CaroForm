<template>
    <ImageBanner src="/color2.jpg" alt="Ma belle image" class="!py-0 !rounded-none" />
    <div class="min-h-screen p-2 md:p-8">


        <div class="max-w-5xl mx-auto space-y-12">
            <!-- Card Intro -->
            <CardIntro title="Éveil Artistique et Culturel" subtitle="Un Chemin d’humanisation dès la naissance"
                image1="/color4.jpg"
                text="L’éveil artistique et culturel n’est pas un « plus » dans la vie d’un enfant : c’est une véritable nourriture intérieure. Dès ses premiers jours, le tout-petit a besoin de voix, de gestes, d’images et de poésie pour entrer en relation avec le monde. Ces expériences sensibles nourrissent sa construction identitaire, sa santé psychique et la qualité du lien parent-enfant." />
            <!-- Card Experiences -->
            <CardExpe title="Fondements et prestations"
                intro="Promouvoir une culture vivante, sensible et accessible dès la naissance.
                Accompagner les acteurs du territoire dans une démarche humaniste et collaborative.
                "
                :blocks="[
                    {
                        icon: '',
                        title: 'Références et cadre d’intervention',
                        text: ''
                    },
                    {
                        icon: '✨',
                        title: 'L’éveil artistique et culturel : un levier essentiel du développement du jeune enfant',
                        text: 'Le rapport de la psychologue et psychanalyste Sophie Marinopoulos, Une stratégie nationale pour la Santé Culturelle (2017), constitue le socle conceptuel de mon approche. Ce document interdisciplinaire — mêlant analyses sociologiques, médicales, culturelles, psychanalytiques et environnementales — met en lumière l’importance de répondre aux besoins symboliques des tout-petits et de leurs parents, en les préservant des dérives consuméristes et du formatage culturel.'
                    },
                    {
                        icon: '🗂️',
                        title: 'À propos du rapport “Une stratégie nationale pour la Santé Culturelle”',
                        text: `
                    Publié en 2017 pour le Ministère de la Culture, ce rapport met en évidence :
                    • l’importance des expériences artistiques et culturelles dès la naissance ;  
                    • la nécessité de soutenir la relation parent-enfant par un environnement culturel riche et sensible ;  
                    • l’enjeu de réduire les inégalités culturelles et sociales dès la petite enfance ;  
                    • le rôle essentiel des professionnels et des artistes dans la construction d’un cadre bienveillant et humanisant.
                    `,
                    },
                    {
                        icon: '',
                        title: 'Mes prestations',
                        text: ''
                    },
                    {
                        icon: '🎓',
                        title: 'Accompagnement à la réflexion et à la conduite de projets en Éveil et Éducation Artistique et Culturel (EAC)',
                        text: 'Ces accompagnements s’adressent aux collectivités, institutions, établissements d’accueil du jeune enfant (EAJE), structures culturelles, associations et centres sociaux. Ils ont pour objectif d’élaborer des projets d’Éducation Artistique et Culturelle (EAC) cohérents, sensibles et adaptés aux réalités du territoire, d’articuler les enjeux éducatifs, culturels, sociaux et de santé, de développer une stratégie d’accueil et de médiation culturelle dès la naissance, et de favoriser un environnement soutenant le lien parent-enfant. Les modalités d’intervention reposent sur un diagnostic partagé, l’élaboration de projets sur mesure, la mise à disposition de méthodologies et d’outils adaptés, l’accompagnement des équipes dans la mise en œuvre, ainsi qu’un suivi et une évaluation des actions engagées.'
                    },
                    {
                        icon: '🧩',
                        title: 'Formations professionnelles',
                        text: 'Ces formations s’adressent aux professionnels de la petite enfance, de la culture, du social, de l’éducation et de la santé. Elles abordent les fondements et les enjeux de l’éveil artistique et culturel, la compréhension de la notion de santé culturelle, l’intégration des arts et de la sensibilité dans le quotidien des structures, ainsi que l’analyse des pratiques professionnelles afin d’ajuster les postures et de développer la créativité. Les sessions de formation articulent apports théoriques, mises en pratique, temps d’expérimentation et ressources méthodologiques, dans une approche favorisant la réflexion et l’appropriation des contenus par les participants.'
                    },
                    {
                        icon: '💬',
                        title: 'Temps d’échanges, conférences et débats',
                        text: 'Ces actions ont pour finalité de sensibiliser aux apports de l’Éducation Artistique et Culturelle (EAC) et à la notion de santé culturelle, de nourrir une réflexion partagée entre professionnels, parents et partenaires institutionnels, et d’ouvrir des espaces de dialogue autour des enjeux éducatifs, culturels et sociétaux contemporains. Elles prennent la forme de conférences publiques, de tables rondes, d’interventions thématiques ou de rencontres interprofessionnelles, favorisant la circulation des points de vue et la co-construction des réflexions.'
                    }
                ]" :footer="[
    'Créer des environnements où chaque enfant peut s’éveiller, imaginer et rencontrer l’autre à travers la beauté, le geste et le sensible.',
]" />
            <ImageBanner src="/inspiring-child.png" alt="Ma belle image" />

            <!-- Axe Cards -->
            <div class="grid gap-8 md:grid-cols-2">
                <AxeCard title="Experience Artistique pour les Tout-Petits"
                    description="Offrir aux enfants des expériences artistiques fondatrices"
                    imageSrc="/inspiring-child.png" :isVisible="true" :delay="0" />
                <AxeCard title="Accompagnement des Parents" description="Soutenir les parents dans leur rôle créatif"
                    imageSrc="/parent-eveil.png" :isVisible="true" :delay="200" />
                <AxeCard title="Au sein de la Communauté"
                    description="Renforcer les liens humains au cœur des territoires" imageSrc="/community-eveil.png"
                    :isVisible="true" :delay="400" />
                <AxeCard title="Au sein de l'environnement"
                    description="Créer des espaces de beauté, de respiration et d’imaginaire"
                    imageSrc="/environ-eveil.png" :isVisible="true" :delay="600" />
            </div>
        </div>

    </div>
    <ParallaxSection image="/artherapi.png" title="ArtTherapie" subtitle="Créer, ressentir, se relier" 
        description="Artiste autodidacte, j’explore les liens entre art, approche thérapeutique, santé et culture à travers des pratiques expérimentales et des ateliers d’Art-Thérapie. Ces espaces sécurisés et bienveillants permettent à chacun d’exprimer ses émotions, de stimuler sa créativité et de restaurer l’estime de soi, tout en favorisant l’écoute, la réflexion personnelle et la cohésion des groupes." />
    <div class="flex justify-center w-full">
        <ButtonBaseButtonTlwd label="Plus d'informations ?" to="/contact" variant="primary" class=" my-6" />
    </div>
</template>

<script setup lang="ts">
import CardIntro from '@/components/cards/CardIntro.vue'
import AxeCard from '@/components/cards/AxeCard.vue'
import ImageBanner from '@/components/banner/ImageBanner.vue'
import CardExpe from '~/components/cards/CardExpe.vue';
import ParallaxSection from '~/components/section/ParallaxSection.vue';

</script>
