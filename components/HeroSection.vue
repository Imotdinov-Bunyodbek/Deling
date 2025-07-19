<template>
  <section class="bg-white pt-24 pb-16 md:pt-32 md:pb-24">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="fade-in-up">
          <!-- Company Logo Circle -->
          <div class="mb-8 flex items-center">
            <div class="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
              <span class="text-xl font-bold text-blue-600">deling</span>
            </div>
          </div>
          
          <!-- Main Title -->
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Sifatli texnologiya – <br>
            <span class="text-blue-600">ishonchli kelajak</span>
          </h1>
          
          <!-- Description -->
          <p class="text-lg text-gray-600 mb-8 leading-relaxed">
            Deling MCHJ — metallga ishlov berish, 
            ventilyatsiya tizimları va zamonaviy 
            texnologiyalar kompaniyasi. Sifat, aniqlik va 
            ishonchli texnologiyalar uyg'unligi.
          </p>
          
          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4">
            <button 
              @click="scrollToSection('products')"
              class="btn-primary"
            >
              Mahsulotlar
            </button>
            <button 
              @click="scrollToSection('contact')"
              class="btn-secondary"
            >
              Bog'lanish
            </button>
            <button 
              @click="scrollToSection('partners')"
              class="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-lg transition-all duration-300"
            >
              Hamkorlik
            </button>
          </div>
        </div>
        
        <!-- Right Content - Hero Image -->
        <div class="relative">
          <div class="relative overflow-hidden rounded-2xl shadow-2xl">
            <img 
              src="/hero-bg.jpg" 
              alt="Deling MCHJ industrial facility" 
              class="w-full h-96 md:h-[500px] object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
          

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Scroll to sections functionality
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    // Calculate offset for fixed header (80px)
    const offsetTop = element.offsetTop - 80
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    })
  }
}
</script>

<style scoped>
.fade-in-up {
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style> 