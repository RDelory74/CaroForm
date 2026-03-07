<template>
    <div>
        <!-- Hero Banner -->
        <HeroBanner />

        <!-- Contenu de la page -->
        <HeroWelcomeSection image-src="/mainsenfant.jpg" image-alt="Photo professionnelle" />
        <!-- REVOIR PHOTO GAUCHE TEXTE DROITE -->
        <!--  <AxesInterventionSection image-src="/forma-op1.jpg" image-alt="Accompagnement petite enfance" />-->
        
        <MesDomainesSolar 
      central-image-src="/central-child.png"
      central-image-alt="Mon approche par Domaines d'Intervention"
    />

    <section class="w-full bg-white py-12 md:py-20">
  <div class="max-w-6xl mx-auto px-6">

    <!-- Titre -->
    <div class="bg-secondary p-6 rounded-xl shadow-md mb-10">
      <h3 class="text-2xl md:text-3xl font-bold text-center">
        Pourquoi faire appel à mes services ?
      </h3>
    </div>

    <!-- Bloc contenu -->
    <div class="grid md:grid-cols-3 gap-8">

      <!-- Gestionnaires -->
      <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition">
        <h4 class="text-xl font-semibold text-primary mb-4">
          Pour les gestionnaires et directions
        </h4>
        <ul class="space-y-3 text-gray-700 text-sm md:text-base leading-relaxed">
          <li>• Clarifier et formaliser le projet éducatif et pédagogique de la structure, en cohérence avec ses valeurs et son identité.</li>
          <li>• Renforcer la cohérence institutionnelle et soutenir l’organisation et le pilotage des équipes.</li>
          <li>• Bénéficier d’un accompagnement sur mesure, adapté aux besoins spécifiques de votre structure.</li>
        </ul>
      </div>

      <!-- Équipes -->
      <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition">
        <h4 class="text-xl font-semibold text-primary mb-4">
          Pour les équipes professionnelles
        </h4>
        <ul class="space-y-3 text-gray-700 text-sm md:text-base leading-relaxed">
          <li>• Développer une posture réflexive et analyser les pratiques à partir des situations concrètes.</li>
          <li>• Consolider la collaboration et la communication au sein de l’équipe pour renforcer cohésion et efficacité.</li>
          <li>• Mettre en œuvre des pratiques éducatives ajustées aux besoins et aux rythmes des enfants favorisant la qualité d’accueil.</li>
        </ul>
      </div>

      <!-- Enfants & familles -->
      <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition">
        <h4 class="text-xl font-semibold text-primary mb-4">
          Pour les enfants et leurs familles
        </h4>
        <ul class="space-y-3 text-gray-700 text-sm md:text-base leading-relaxed">
          <li>• Favoriser la sécurité affective, l’autonomie, la créativité et l’exploration dans un cadre bienveillant.</li>
          <li>• Intégrer l’art, la culture et l’expérience sensorielle pour soutenir le développement global de l’enfant.</li>
          <li>• Assurer une continuité éducative entre la structure et la famille, en valorisant la co-éducation.</li>
        </ul>
      </div>

    </div>
  </div>
</section>

        

        <CardEngagementAccordion
    title="Mes valeurs professionnelles"
    image="/color1.jpg"
    :items="valeursProfessionnelles"
  />
  <ImageBanner src="/forma-op1.jpg" image-alt="TeamWorkshop" class="!py-0" />
    </div>
</template>

<script setup>
import HeroBanner from '~/components/banner/HeroBanner.vue'
import ImageBanner from '~/components/banner/ImageBanner.vue'
import HeroWelcomeSection from '~/components/section/HeroWelcomeSection.vue'
import MesDomainesSolar from '~/components/section/MesDomainesSolar.vue'
import CardEngagementAccordion from '~/components/cards/CardEngagementAccordion.vue'

const valeursProfessionnelles = [
  {
    title: "Une approche systémique ancrée dans les sciences humaines",
    content:
      "Diplômée en sociologie et en ethnologie, j’accorde une importance centrale à la compréhension des dynamiques humaines et sociales : relations, contextes, institutions, émotions et représentations. Cette base me permet d’adopter une posture analytique, nuancée et ouverte, essentielle pour accompagner les professionnels dans l’élaboration de leurs pratiques."
  },
  {
    title: "La participation active comme moteur d’apprentissage",
    content:
      "Mon expérience en formation et en analyse des pratiques m’a confirmé qu’on apprend mieux en faisant, en échangeant et en questionnant. Je crée des espaces où chaque professionnel devient acteur : partage d’expériences, co-construction de réponses et réflexivité collective. Une séance n’est jamais une transmission descendante, mais une dynamique vivante."
  },
  {
    title: "Une expertise issue du terrain petite enfance",
    content:
      "Mon parcours d’Éducatrice de Jeunes Enfants puis de professionnelle en Relais Petite Enfance nourrit ma compréhension concrète des besoins des enfants, du vécu des familles et du quotidien des équipes. Cette immersion de terrain me permet d’accompagner avec justesse, en tenant compte de la réalité du travail."
  },
  {
    title: "Une adaptation fine aux besoins de chaque équipe",
    content:
      "Chaque structure a son histoire, ses valeurs et ses défis. J’entre dans leur réalité afin d’ajuster mes interventions — rythme, outils et méthodes — pour soutenir leur dynamique interne, sans jamais plaquer un modèle préconçu."
  },
  {
    title: "La conviction que la réflexivité transforme les pratiques",
    content:
      "Les professionnels gagnent en confiance, en qualité d’accueil et en cohérence lorsqu’ils peuvent analyser ce qu’ils vivent et élaborer ensemble de nouveaux repères. Favoriser cette réflexivité est pour moi un engagement central."
  },
  {
    title: "La sécurité affective comme repère fondamental",
    content:
      "Qu’il s’agisse de l’enfant ou du professionnel, la sécurité relationnelle, émotionnelle et institutionnelle constitue la base. J’accompagne les équipes à identifier les conditions favorisant un climat de confiance, afin d’ajuster leurs pratiques."
  },
  {
    title: "Une posture éthique, humaniste et respectueuse",
    content:
      "Mon accompagnement repose sur l’écoute authentique, le respect, le non-jugement et la co-construction. Soutenir sans imposer, éclairer sans diriger et permettre sans contraindre sont au cœur de ma posture professionnelle."
  }
]

</script>