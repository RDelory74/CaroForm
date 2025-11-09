<template>
    <div>
        <!-- Hero Banner -->
        <HeroBanner />

        <!-- Contenu de la page -->
        <h1 class="text-3xl py-5 text-center font-bold">
            Bienvenue sur mon site Work in Progress
        </h1>
        <p class="text-center mb-5 py-5 px-5 md:px-40">Mon parcours s’est construit à la croisée des sciences humaines,
            de la pédagogie, de
            l’art et de la culture, guidé par une conviction : comprendre l’humain pour mieux accompagner les pratiques
            professionnelles.
            Ce cursus m’a apporté un cadre théorique et méthodologique solide et m’a permis de développer une approche
            globale et sensible de la relation humaine, essentielle à mon accompagnement des professionnels de la petite
            enfance. Il m’a également appris à relier le vécu individuel aux dimensions collectives et à observer les
            dynamiques institutionnelles.
        </p>

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
</script>