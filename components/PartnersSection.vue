<template>
  <section id="partners" class="py-16 md:py-24 bg-white">
    <div class="container mx-auto px-4">
      <!-- Section Title -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Hamkorlarimiz
        </h2>
        <div class="w-24 h-1 bg-blue-500 mx-auto"></div>
      </div>
      
      <!-- Partners Carousel -->
      <div class="relative overflow-hidden bg-gray-50 rounded-2xl py-8">
        <div class="flex animate-scroll hover:pause">
          <!-- Duplicated partners for infinite scroll -->
          <div 
            v-for="partner in [...partners, ...partners]" 
            :key="`${partner.id}-${Math.random()}`"
            class="flex-shrink-0 mx-6"
            @click="onPartnerClick(partner)"
          >
            <div 
              v-if="partner.featured"
              class="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl shadow-md w-48 h-24 flex items-center justify-center border-2 border-blue-200 cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105"
              :title="partner.name"
            >
              <span class="text-2xl font-bold text-blue-600">deling</span>
            </div>
            <div 
              v-else
              class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 w-48 h-24 flex items-center justify-center cursor-pointer hover:scale-105"
              :title="partner.name"
            >
              <img 
                :src="partner.logo" 
                :alt="partner.name" 
                class="max-w-full max-h-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
        
        <!-- Gradient overlays for seamless effect -->
        <div class="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
        <div class="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
        
        <!-- Scroll indicator -->
        <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2">
          <div class="flex space-x-1">
            <div class="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div class="w-2 h-2 bg-blue-300 rounded-full animate-pulse" style="animation-delay: 0.5s;"></div>
            <div class="w-2 h-2 bg-blue-200 rounded-full animate-pulse" style="animation-delay: 1s;"></div>
          </div>
        </div>
      </div>
      
      <!-- Partner Benefits -->
      <div class="mt-16">
        <div class="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12">
          <div class="text-center mb-12">
            <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Bizning hamkorlik dasturimiz
            </h3>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              Uzoq muddatli hamkorlik va o'zaro foyda prinsiplariga asoslangan aloqalar
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8">
            <!-- Reliable Partnership -->
            <div class="text-center">
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="i-heroicons-handshake" class="w-8 h-8 text-blue-600" />
              </div>
              <h4 class="text-lg font-semibold text-gray-900 mb-3">
                Ishonchli hamkorlik
              </h4>
              <p class="text-gray-600 text-sm">
                5+ yillik tajriba va yuzlab muvaffaqiyatli loyihalar
              </p>
            </div>
            
            <!-- Quality Guarantee -->
            <div class="text-center">
              <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="i-heroicons-shield-check" class="w-8 h-8 text-green-600" />
              </div>
              <h4 class="text-lg font-semibold text-gray-900 mb-3">
                Sifat kafolati
              </h4>
              <p class="text-gray-600 text-sm">
                ISO standartlariga muvofiq ishlab chiqarish va montaj ishlari
              </p>
            </div>
            
            <!-- Professional Team -->
            <div class="text-center">
              <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="i-heroicons-users" class="w-8 h-8 text-purple-600" />
              </div>
              <h4 class="text-lg font-semibold text-gray-900 mb-3">
                Professional jamoa
              </h4>
              <p class="text-gray-600 text-sm">
                Tajribali mutaxassislar va zamonaviy uskunalar
              </p>
            </div>
          </div>
          
          <!-- CTA -->
          <div class="text-center mt-12">
            <button 
              @click="scrollToContact"
              class="btn-primary"
            >
              Hamkor bo'lish
            </button>
          </div>
        </div>
      </div>
      
      <!-- Testimonials -->
      <div class="mt-16">
        <div class="text-center mb-12">
          <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Mijozlar fikrlari
          </h3>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <div class="flex items-center mb-4">
              <div class="flex text-yellow-400">
                <Icon name="i-heroicons-star-solid" class="w-5 h-5" />
                <Icon name="i-heroicons-star-solid" class="w-5 h-5" />
                <Icon name="i-heroicons-star-solid" class="w-5 h-5" />
                <Icon name="i-heroicons-star-solid" class="w-5 h-5" />
                <Icon name="i-heroicons-star-solid" class="w-5 h-5" />
              </div>
            </div>
            <p class="text-gray-600 mb-6 italic">
              "Deling MCHJ bilan ishlash juda qulay. Sifatli mahsulotlar va professional xizmat. Vaqtida yetkazib berish va montaj ishlari."
            </p>
            <div class="flex items-center">
              <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span class="text-blue-600 font-semibold">AK</span>
              </div>
              <div>
                <div class="font-semibold text-gray-900">Akmal Karimov</div>
                <div class="text-sm text-gray-500">Artel MCHJ</div>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <div class="flex items-center mb-4">
              <div class="flex text-yellow-400">
                <Icon name="i-heroicons-star-solid" class="w-5 h-5" />
                <Icon name="i-heroicons-star-solid" class="w-5 h-5" />
                <Icon name="i-heroicons-star-solid" class="w-5 h-5" />
                <Icon name="i-heroicons-star-solid" class="w-5 h-5" />
                <Icon name="i-heroicons-star-solid" class="w-5 h-5" />
              </div>
            </div>
            <p class="text-gray-600 mb-6 italic">
              "Zamonaviy ventilyatsiya tizimi o'rnatildi. Energiya tejamkor va ishonchli. Jamoaning professionalligi yuqori darajada."
            </p>
            <div class="flex items-center">
              <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <span class="text-green-600 font-semibold">MR</span>
              </div>
              <div>
                <div class="font-semibold text-gray-900">Murod Rahimov</div>
                <div class="text-sm text-gray-500">Toshkent City</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Handle partner logo clicks
const onPartnerClick = (partner) => {
  console.log(`Clicked on partner: ${partner.name}`)
  // You can add logic here to:
  // - Show partner details in a modal
  // - Navigate to partner's website
  // - Display more information about the partnership
}

// Scroll to contact section
const scrollToContact = () => {
  const element = document.getElementById('contact')
  if (element) {
    // Calculate offset for fixed header (80px)
    const offsetTop = element.offsetTop - 80
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    })
  }
}

// Partners data
const partners = [
  {
    id: 1,
    name: 'Land House',
    logo: '/partners/partner1.png'
  },
  {
    id: 2,
    name: 'Golden House',
    logo: '/partners/partner2.png'
  },
  {
    id: 3,
    name: 'Modern',
    logo: '/partners/partner3.png'
  },
  {
    id: 4,
    name: 'Deling',
    logo: null,
    featured: true
  },
  {
    id: 5,
    name: 'New Times',
    logo: '/partners/partner5.png'
  },
  {
    id: 6,
    name: 'O\'zshahar Qurilish Invest',
    logo: '/partners/partner6.png'
  },
  {
    id: 7,
    name: 'Land House',
    logo: '/partners/partner1.png'
  },
  {
    id: 8,
    name: 'Golden House',
    logo: '/partners/partner2.png'
  },
  {
    id: 9,
    name: 'Modern',
    logo: '/partners/partner3.png'
  }
]
</script>

<style scoped>
.animate-scroll {
  animation: scroll 30s linear infinite;
  width: fit-content;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Pause animation on hover */
.animate-scroll:hover,
.animate-scroll:focus-within {
  animation-play-state: paused;
}

/* Smooth transitions for individual partner cards */
.animate-scroll > div {
  transition: transform 0.3s ease;
}

.animate-scroll > div:hover {
  transform: scale(1.05);
}
</style> 