<template>
    <div>
        <!-- Hero Banner -->
        <HeroBanner />

        <!-- Contenu de la page -->
        <HeroWelcomeSection image-src="/rando2.jpg" image-alt="Photo professionnelle" />
        <AxesInterventionSection image-src="/rando2.jpg" image-alt="Accompagnement petite enfance" />


        <div class="py-5 md:py-10 space-y-10">
            <Card title=" Un engagement ancré dans la petite enfance"
                text="Je me suis orientée vers le métier d’Éducatrice de Jeunes Enfants (EJE) pour mettre mes savoirs théoriques en pratique.

Cette expérience m’a permis de développer une compréhension fine du développement de l’enfant dans toutes ses dimensions.

J’ai acquis une approche collaborative du travail d’équipe, fondée sur la coopération et la communication.

J’ai maîtrisé la conduite de projets éducatifs et pédagogiques, articulant observation, analyse et mise en œuvre.


Mon parcours en multi-accueil et en relais petite enfance m’a permis de comprendre la diversité des contextes institutionnels.

Aujourd’hui, je mets cette expérience au service des équipes, gestionnaires et étudiants pour accompagner leurs pratiques professionnelles." image="/RandoImg.png" />
        </div>
    </div>
</template>

<script setup>
import HeroBanner from '~/components/banner/HeroBanner.vue'
import Card from '~/components/cards/Card.vue'
import AxesInterventionSection from '~/components/section/AxesInterventionSection.vue'
import HeroWelcomeSection from '~/components/section/HeroWelcomeSection.vue'
</script>