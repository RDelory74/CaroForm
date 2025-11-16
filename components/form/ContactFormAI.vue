<template>
  <div class="contact-container">
    <form @submit.prevent="handleSubmit" class="contact-form">

      <div class="form-inner">
        <div class="form-grid">

          <div class="form-group input-item">
            <label for="lastname">Nom</label>
            <input type="text" id="lastname" v-model="formData.lastname" required placeholder="Votre nom">
          </div>

          <div class="form-group input-item">
            <label for="firstname">Prénom</label>
            <input type="text" id="firstname" v-model="formData.firstname" required placeholder="Votre prénom">
          </div>

          <div class="form-group input-item">
            <label for="phone">Téléphone</label>
            <input type="tel" id="phone" v-model="formData.phone" required placeholder="Votre numéro">
          </div>

          <div class="form-group input-item">
            <label for="email">E-mail</label>
            <input type="email" id="email" v-model="formData.email" required placeholder="Votre email">
          </div>

          <div class="separator"></div>

          <!-- Type de structure -->
          <div class="form-group input-item">
            <label for="typeClient">Type de structure</label>
            <select id="typeClient" v-model="formData.clientType" required>
              <option value="">Sélectionnez</option>
              <option value="creche">Crèche / Multi-accueil</option>
              <option value="micro-creche">Micro-crèche</option>
              <option value="Relais-Petite-Enfance">Relais Petite Enfance (RPE)</option>
              <option value="ecole">École maternelle</option>
              <option value="association">Association</option>
              <option value="collectivite">Collectivité / Mairie</option>
              <option value="professionnelle">Professionnelle individuelle (APP, EJE, Auxiliaire...)</option>
              <option value="autre">Autre</option>
            </select>
          </div>

          <!-- Type d'intervention -->
          <div class="form-group input-item">
            <label for="intervention">Objet de la demande</label>
            <select id="intervention" v-model="formData.interventionType" required>
              <option value="">Sélectionnez</option>
              <option value="formation">Formation APP</option>
              <option value="accompagnement-equipe">Accompagnement d’équipe</option>
              <option value="supervision">Supervision professionnelle</option>
              <option value="atelier">Ateliers thématiques</option>
              <option value="conference">Conférence</option>
              <option value="diagnostic">Diagnostic de fonctionnement</option>
              <option value="direction">Accompagnement de direction</option>
              <option value="autre">Autre demande</option>
            </select>
          </div>

          <!-- Effectif -->
          <div class="form-group input-item">
            <label for="effectif">Effectif professionnel</label>
            <select id="effectif" v-model="formData.effectif">
              <option value="">Sélectionnez</option>
              <option value="1-5">1 à 5 personnes</option>
              <option value="6-10">6 à 10 personnes</option>
              <option value="11-20">11 à 20 personnes</option>
              <option value="21-40">21 à 40 personnes</option>
              <option value="40+">40 personnes ou plus</option>
            </select>
          </div>

          <!-- Délai -->
          <div class="form-group input-item">
            <label for="delay">Délai souhaité</label>
            <select id="delay" v-model="formData.delay" required>
              <option value="">Sélectionnez</option>
              <option value="quelques_semaines">Dans les prochaines semaines</option>
              <option value="urgent">Urgent (moins de 7 jours)</option>
              <option value="programmation">Pour une programmation future</option>
            </select>
          </div>

        </div>

        <!-- Champ Message avec MARGE VERTICALE renforcée -->
        <div class="form-group input-item full-width message-wrapper">
          <label for="message">Message</label>
          <textarea id="message" v-model="formData.message" required
            placeholder="Décrivez votre besoin, votre structure, vos objectifs..." rows="6">
          </textarea>
        </div>

        <button type="submit" class="submit-btn input-item">
          Envoyer
        </button>
      </div>
    </form>

    <!-- MAP -->
<iframe
  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d578000!2d6.15!3d45.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f8!5e0!3m2!1sfr!2sfr!4v1747924735299!5m2!1sfr!2sfr"
  width="100%"
  height="300"
  style="border:0; border-radius:4px;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>


  </div>
</template>

<script>
//caroline.delory.formation@gmail.com
export default {
  name: "Contact",

  data() {
    return {
      formData: {
        lastname: "",
        firstname: "",
        phone: "",
        email: "",
        message: "",
        clientType: "",
        interventionType: "",
        effectif: "",
        delay: ""
      }
    };
  },

  methods: {
    async handleSubmit() {
      try {
        const requiredFields = ["lastname", "firstname", "phone", "email", "message", "delay"];

        for (const field of requiredFields) {
          if (!this.formData[field]) {
            alert("Veuillez remplir tous les champs obligatoires.");
            return;
          }
        }

        const formData = new FormData();
        formData.append("access_key", "4e5c3eab-145d-419b-aab2-1bb7c41b91ca");

        formData.append("from_name", `${this.formData.firstname} ${this.formData.lastname}`);
        formData.append("email", this.formData.email);
        formData.append(
          "subject",
          `Demande – ${this.formData.firstname} – ${this.formData.clientType} – ${this.formData.interventionType}`
        );
        formData.append("message", this.formData.message);

        // Champs adaptés petite enfance
        formData.append("telephone", this.formData.phone);
        formData.append("type_structure", this.formData.clientType || "Non renseigné");
        formData.append("type_intervention", this.formData.interventionType || "Non renseigné");
        formData.append("effectif", this.formData.effectif || "Non renseigné");
        formData.append("delai", this.formData.delay);

        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });

        const data = await response.json();

        if (data.success) {
          alert("Message envoyé avec succès !");
          this.formData = {
            lastname: "",
            firstname: "",
            phone: "",
            email: "",
            message: "",
            clientType: "",
            interventionType: "",
            effectif: "",
            delay: ""
          };
        } else {
          alert("Erreur lors de l'envoi : " + (data.message || "Veuillez réessayer."));
        }
      } catch (error) {
        alert("Une erreur est survenue.");
        console.error(error);
      }
    }
  }
};
</script>

<style scoped>
.message-wrapper {
  margin-top: 20px;
  margin-bottom: 20px;
}

.contact-container {
  margin: 2% 10%;

}

.separator {
  grid-column: 1 / -1;
  height: 1px;
  background: rgba(0,0,0,0.15);
  margin: 10px 0 5px 0;
}

.contact-form {
  background: #6da48f49;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 30px;
  box-sizing: border-box;
  font-family: 'Calibri-Light', sans-serif;
  color: rgb(0, 0, 0);
}

.form-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
}

.full-width {
  grid-column: 1 / -1;
}

.form-group label {
  display: block;
  margin-bottom: 6px;
}


input,
select,
textarea {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background: rgb(255, 255, 255);
  color: inherit;
  box-sizing: border-box;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

input:focus,
textarea:focus,
select:focus {
  outline: none;
  border-color: rgba(0, 0, 0, 0.5);
}

.submit-btn {
  background: rgb(255, 255, 255);
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  color: black;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.5s ease;

  margin-top: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 12px;
  font-weight: bold;

}

.submit-btn:hover {
  background: #ffffff;
  transform: scale(1.05);
}

iframe {
  margin: 20px 0;
}

@media (max-width: 1024px) {
  .form-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .form-grid {
    grid-template-columns: 1fr;
  }

  .contact-form {
    padding: 5px;
  }

  .contact-container {
    margin: 2% 2% 2% 2%;
  }
}
</style>
