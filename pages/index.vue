<template>
    <div>
        <!-- Hero Banner -->
        <HeroBanner />

        <!-- Contenu de la page -->
        <HeroWelcomeSection image-src="/mainsenfant.jpg" image-alt="Photo professionnelle" />
        <!-- REVOIR PHOTO GAUCHE TEXTE DROITE -->
        <!--  <AxesInterventionSection image-src="/forma-op1.jpg" image-alt="Accompagnement petite enfance" />-->
        
        <MesDomainesSolar 
      central-image-src="/forma-op1.jpg"
      central-image-alt="Mon approche par Domaines d'Intervention"
    />

        <CardEngagement title="Eveil Artistique et Culturel"
            text="Je me suis orientée vers le métier d’Éducatrice de Jeunes Enfants (EJE) pour mettre mes savoirs théoriques en pratique.

Cette expérience m’a permis de développer une compréhension fine du développement de l’enfant dans toutes ses dimensions.

J’ai acquis une approche collaborative du travail d’équipe, fondée sur la coopération et la communication.

J’ai maîtrisé la conduite de projets éducatifs et pédagogiques, articulant observation, analyse et mise en œuvre.


Mon parcours en multi-accueil et en relais petite enfance m’a permis de comprendre la diversité des contextes institutionnels.

Aujourd’hui, je mets cette expérience au service des équipes, gestionnaires et étudiants pour accompagner leurs pratiques professionnelles." image="/color1.jpg" />
    </div>
</template>

<script setup>
import HeroBanner from '~/components/banner/HeroBanner.vue'
import CardEngagement from '~/components/cards/CardEngagement.vue'
import AxesInterventionSection from '~/components/section/AxesInterventionSection.vue'
import HeroWelcomeSection from '~/components/section/HeroWelcomeSection.vue'
import MesDomainesSolar from '~/components/section/MesDomainesSolar.vue'
</script>