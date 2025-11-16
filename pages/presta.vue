<template>
  <h1 class="text-3xl py-5 text-center font-bold ">
    Mes Prestations
  </h1>

  <div class="prestations-page">

    <!-- Formation APP -->
    <section class="mb-8 md:p-6 p-2">
      <div class="flex flex-col lg:flex-row items-start gap-8">
        <!-- Image + Texte à gauche -->
        <div class="lg:w-1/3 flex flex-col items-start gap-4">
          <h2 class="text-2xl font-semibold mb-2">Formation APP</h2>
          <p class="text-gray-700">
            Formation dédiée aux professionnels de la petite enfance pour approfondir les pratiques pédagogiques et
            l’accompagnement des équipes.
            Formation dédiée aux professionnels de la petite enfance pour approfondir les pratiques pédagogiques et
            l’accompagnement des équipes.
            Formation dédiée aux professionnels de la petite enfance pour approfondir les pratiques pédagogiques et
            l’accompagnement des équipes.
          </p>
          <img src="/hero1.png" alt="Formation APP" class="w-full rounded-lg shadow-md mb-4">

        </div>

        <!-- Cards à droite -->
        <div class="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          <CardPublic />
          <CardDate />
          <CardTarif />
          <CardDeroulement />
        </div>
      </div>
    </section>

    <div class="separator"></div>
    <!-- Atelier thématique -->
    <section class="mb-8 md:p-6 p-2">
      <div class="flex flex-col lg:flex-row items-start gap-8">
        <div class="lg:w-1/3 flex flex-col items-start gap-4">
          <h2 class="text-2xl font-semibold mb-2">Atelier thématique</h2>
          <p class="text-gray-700">
            Ateliers interactifs pour travailler sur des thématiques spécifiques, adaptés aux besoins des équipes et
            établissements.
          </p>
          <img src="/hero1.png" alt="Atelier thématique" class="w-full rounded-lg shadow-md mb-4">

        </div>

        <div class="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          <CardPublic />
          <CardDate />
          <CardTarif />
          <CardDeroulement />
        </div>
      </div>
    </section>

    <div class="separator"></div>
    <!-- Conférence -->
    <section class="mb-8 md:p-6 p-2">
      <div class="flex flex-col lg:flex-row items-start gap-8 ">
        <div class="lg:w-1/3 flex flex-col items-start gap-4">
          <h2 class="text-2xl font-semibold mb-2">Conférence</h2>
          <p class="text-gray-700">
            Interventions ponctuelles pour sensibiliser et partager les bonnes pratiques avec les équipes et directions.
          </p>
          <img src="/hero1.png" alt="Conférence" class="w-full rounded-lg shadow-md mb-4">
        </div>

        <div class="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          <CardPublic />
          <CardDate />
          <CardTarif />
          <CardDeroulement />
        </div>
      </div>
    </section>
    <div class="separator"></div>
    <!-- Analyse de pratiques -->
    <section class="mb-8 md:p-6 p-2">
      <div class="flex flex-col lg:flex-row items-start gap-8">
        <div class="lg:w-1/3 flex flex-col items-start gap-4">
          <h2 class="text-2xl font-semibold mb-2">Analyse de pratiques</h2>
          <p class="text-gray-700">
            Accompagnement des équipes et direction pour analyser et améliorer le fonctionnement pédagogique et
            organisationnel.
          </p>
          <img src="/hero1.png" alt="Analyse de pratiques" class="w-full rounded-lg shadow-md mb-4">
        </div>

        <div class="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          <CardPublic />
          <CardDate />
          <CardTarif />
          <CardDeroulement />
        </div>
      </div>
    </section>
    <div class="text-center mt-2 p-4">
      <ButtonBaseButtonTlwd label="Contactez-moi pour plus d'informations" to="/contact" variant="secondary" />
    </div>
  </div>

</template>

<script setup>
import CardPublic from '~/components/cards/CardPublic.vue'
import CardDate from '~/components/cards/CardDate.vue'
import CardTarif from '~/components/cards/CardTarif.vue'
import CardDeroulement from '~/components/cards/CardDeroulement.vue'
import ButtonBaseButtonTlwd from '~/components/button/BaseButtonTlwd.vue'



</script>

<style scoped>
.separator {
  grid-column: 1 / -1;
  height: 1px;
  background: rgba(0, 0, 0, 0.15);
  margin: 10px 10px;
}
</style>