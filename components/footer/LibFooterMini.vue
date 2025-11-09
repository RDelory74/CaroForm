<template>
  <footer class="bg-[#6DA48F80] text-white px-6 py-10">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-10">
      <div class="flex flex-col md:flex-row gap-10 flex-1">
        <div>
          <h3 class="text-lg font-semibold mb-4">Caroline Caballe Delory</h3>
          <ul class="space-y-2 text-sm text-white">
            <li>Email : <a href="mailto:carolinecaballe@gmail.com">carolinecaballe@gmail.com</a></li>
            <li><a href="tel:0617281385">Téléphone : +33 6 17 28 13 85</a></li>
            <li>Localité : Haute Savoie, Savoie, Genevois</li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">Infos</h3>
          <ul class="space-y-2 text-sm text-white">
            <li>
              <NuxtLink to="/about" class="hover:underline">À propos</NuxtLink>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/caroline-delory-6aa867129"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:underline flex items-center gap-1"
              >
                <Icon name="mdi:linkedin" size="1.2em" />
                LinkedIn
              </a>
            </li>
            <li>
              <NuxtLink to="/presta" class="hover:underline">Mes prestations</NuxtLink>
            </li>
          </ul>
        </div>

      </div>
      <div class="flex justify-center md:justify-end md:w-48">
        <img src="/logo-sharpped.png" alt="Logo" class="h-24 object-contain" />
      </div>
    </div>
    <div class="border-t border-[#6DA48F] mt-10 pt-6 text-sm text-[#6DA48F] text-center">
      © {{ new Date().getFullYear() }} CaroForm. Tous droits réservés.
    </div>

  </footer>
</template>
