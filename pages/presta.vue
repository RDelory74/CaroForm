<template>
  <ImageBanner src="/forma-op2.jpg" alt="Bannière Formations" class="!py-0 !rounded-none" />
  <h1 class="text-4xl md:text-5xl lg:text-6xl py-5 text-center font-bold ">
    Mes Prestations
  </h1>

  <div class="prestations-page">

    <!-- Formation APP -->
    <section class="mb-8 md:p-8 p-2">
      <div class="flex flex-col lg:flex-row items-stretch gap-8 ">
        <!-- Image + Texte à gauche -->
        <div class="lg:w-1/3 flex flex-col items-start gap-4">
          <h2 class="text-3xl font-semibold mb-2">L’Analyse de la Pratique Professionnelle</h2>
          <p class="text-gray-700">
            L’analyse des pratiques professionnelles (APP) n’est pas un simple espace d’échange :
            C'est un levier essentiel de qualité, de cohésion et de bientraitance au sein des équipes éducatives.
            Elle s’appuie sur l’expérience concrète des situations de terrain, permettant aux participants d’élaborer du
            sens, d’identifier les tensions et de faire émerger de nouvelles pistes d’action.
            Elle ne vise pas à “résoudre un problème” mais à comprendre, à donner du sens, à co-construire des repères
            partagés.
            Ce n’est ni une supervision individuelle, ni une réunion d’équipe, mais un temps protégé, hors hiérarchie,
            centré sur la parole, l’écoute et la confiance.
          </p>
          <img src="/FormAPP.png" alt="Formation APP" class="w-full rounded-lg shadow-md mb-4">
          <div class="flex justify-center">
            <ButtonBaseButtonTlwd label="Plus d'informations ?" to="/contact" variant="secondary" />
          </div>
        </div>

        <!-- Cards à droite -->
        <div class="lg:w-2/3 flex flex-col gap-6 h-full">
          <div class="shrink-0">
            <CardPublic title="Public visé"
              description="Équipe de crèche, directrices, APP, EJE, personnel petite enfance" />
          </div>

          <div class="flex-1">
            <CardDeroulement class="h-full" title="Déroulement" description="
<strong>Fréquence :</strong> 1 séance mensuelle ou toutes les 6 semaines (1h30 à 2h)<br><br>

<strong>Groupe :</strong> 6 à 10 participants (professionnels d’une même équipe ou structure)<br><br>

<strong>Méthode :</strong><br>
- Un participant expose une situation vécue.<br>
- Le groupe écoute, questionne, reformule.<br>
- L’animateur accompagne l’élaboration du sens, les prises de recul et les liens collectifs.<br>
- Une synthèse partagée clôture la séance, ouvrant sur des pistes d’évolution.<br><br>

Le succès d’un GAP repose sur la <strong> qualité de l’animation </strong> et la posture de celui qui la conduit.<br><br>

<strong> - Garantir la neutralité, la bienveillance et la sécurité psychologique</strong>,<br>

<strong> - Poser un cadre clair :</strong> confidentialité, non-jugement, respect du rythme et de la parole de chacun,<br>

<strong> - Favoriser l’expression équilibrée de tous les participants</strong>,<br>

<strong> - Soutenir la réflexion collective</strong> sans jamais imposer de solution,<br>

<strong> - Aider à transformer l’expérience vécue</strong> en ressource professionnelle.


<br><br>
Mon rôle est d’ouvrir un espace où chacun peut penser son travail autrement, se sentir reconnu, soutenu et plus outillé face à la complexité du quotidien.
" />
          </div>
        </div>

      </div>
    </section>

    <div class="separator"></div>

<!-- Ateliers Thematiques-->
    <section class="mb-8 md:p-8 p-2">
      <div class="flex flex-col lg:flex-row items-stretch gap-8">

        <!-- TEXTE + IMAGE + BOUTON -->
        <div class="lg:w-1/3 flex flex-col items-start gap-4 order-1 lg:order-2">
          <h2 class="text-3xl font-semibold mb-2">
            L’Analyse de la Pratique Professionnelle en crèche
          </h2>

          <p class="text-gray-700">
            L’analyse des pratiques professionnelles (APP) n’est pas un simple espace d’échange :
            C'est un levier essentiel de qualité, de cohésion et de bientraitance au sein des équipes éducatives.
            Elle s’appuie sur l’expérience concrète des situations de terrain, permettant aux participants
            d’élaborer du sens, d’identifier les tensions et de faire émerger de nouvelles pistes d’action.
            Elle ne vise pas à “résoudre un problème” mais à comprendre, à donner du sens, à co-construire
            des repères partagés.
          </p>

          <img src="/FormAPP.png" alt="Formation APP" class="w-full rounded-lg shadow-md">

          <div class="flex justify-center w-full">
            <ButtonBaseButtonTlwd label="Plus d'informations ?" to="/contact" variant="secondary" />
          </div>
        </div>

        <!-- CARDS -->
        <div class="lg:w-2/3 flex flex-col gap-6 h-full order-2 lg:order-1">
          <div class="shrink-0">
            <CardPublic title="Public visé"
              description="Équipe de crèche, directrices, APP, EJE, personnel petite enfance" />
          </div>

          <div class="flex-1">
            <CardDeroulement class="h-full" title="Déroulement" description="..." />
          </div>
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
import CardDeroulement from '~/components/cards/CardDeroulement.vue'
import ButtonBaseButtonTlwd from '~/components/button/BaseButtonTlwd.vue'
import ImageBanner from '~/components/banner/ImageBanner.vue'



</script>

<style scoped>
.separator {
  grid-column: 1 / -1;
  height: 1px;
  background: rgba(0, 0, 0, 0.15);
  margin: 10px 10px;
}
</style>