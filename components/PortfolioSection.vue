<template>
  <section id="portfolio" class="py-16 md:py-24 bg-gray-50">
    <div class="container mx-auto px-4">
      <!-- Section Title -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Loyihalar (Portfolio)
        </h2>
        <div class="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Tugallangan va davom etayotgan yirik obyektlar:
        </p>
      </div>
      
      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Toshkent City -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 card-hover">
          <div class="relative h-64 overflow-hidden">
            <img 
              src="/portfolio/tashkent-city.png" 
              alt="Toshkent City biznes markazi" 
              class="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div class="absolute bottom-4 left-4 text-white">
              <div class="text-sm font-medium">Biznes markazi</div>
            </div>
          </div>
          
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-3">
              Toshkent City biznes markazi uchun ventilyatsiya tizimi
            </h3>
            <p class="text-gray-600 text-sm mb-4 leading-relaxed">
              Yirik biznes markaz uchun zamonaviy va energiya tejamkor ventilyatsiya tizimi o'rnatildi.
            </p>
            
            <div class="flex items-center justify-between">
              <div class="text-sm text-blue-600 font-medium">Tugallangan</div>
              <div class="text-sm text-gray-500">2024</div>
            </div>
          </div>
        </div>
        
        <!-- Artel zavodi -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 card-hover">
          <div class="relative h-64 overflow-hidden">
            <img 
              src="/portfolio/artel-zavod.jpg" 
              alt="Artel zavodi metall ishlov berish" 
              class="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div class="absolute bottom-4 left-4 text-white">
              <div class="text-sm font-medium">Sanoat korxonasi</div>
            </div>
          </div>
          
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-3">
              Artel zavodi uchun metallga ishlov berish
            </h3>
            <p class="text-gray-600 text-sm mb-4 leading-relaxed">
              Sanoat korxonasi uchun yuqori aniqlikdagi metall detallar ishlab chiqarildi.
            </p>
            
            <div class="flex items-center justify-between">
              <div class="text-sm text-green-600 font-medium">Tugallangan</div>
              <div class="text-sm text-gray-500">2024</div>
            </div>
          </div>
        </div>
        
        <!-- Yangiobod -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 card-hover">
          <div class="relative h-64 overflow-hidden">
            <img 
              src="/portfolio/yangiobod.jpg" 
              alt="Yangiobod sanoat hududi elektr panellar" 
              class="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div class="absolute bottom-4 left-4 text-white">
              <div class="text-sm font-medium">Sanoat hududi</div>
              <div class="text-xs opacity-90">damtut.uz</div>
            </div>
          </div>
          
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-3">
              Yangiobod sanoat hududi uchun elektr panellar
            </h3>
            <p class="text-gray-600 text-sm mb-4 leading-relaxed">
              Sanoat hududiga zamonaviy va xavfsiz elektr panellar yekazib berildi va o'rnatildi.
            </p>
            
            <div class="flex items-center justify-between">
              <div class="text-sm text-blue-600 font-medium">Tugallangan</div>
              <div class="text-sm text-gray-500">2024</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Bottom CTA -->
      <div class="mt-16 text-center">
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
          <h3 class="text-2xl md:text-3xl font-bold mb-4">
            Loyihangizni amalga oshirishga tayyormiz
          </h3>
          <p class="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Bizning tajribali jamoamiz sizning eng murakkab loyihalaringizni ham sifatli va o'z vaqtida bajarishga qodir
          </p>
          <div class="flex justify-center">
            <button 
              @click="scrollToContact"
              class="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Loyiha bo'yicha maslahat
            </button>
          </div>
        </div>
      </div>
      
      <!-- Statistics -->
      <div class="mt-16">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-3xl md:text-4xl font-bold text-blue-600 mb-2">50+</div>
            <div class="text-gray-600">Tugallangan loyihalar</div>
          </div>
          <div>
            <div class="text-3xl md:text-4xl font-bold text-blue-600 mb-2">5+</div>
            <div class="text-gray-600">Yillik tajriba</div>
          </div>
          <div>
            <div class="text-3xl md:text-4xl font-bold text-blue-600 mb-2">100%</div>
            <div class="text-gray-600">Sifat kafolati</div>
          </div>
          <div>
            <div class="text-3xl md:text-4xl font-bold text-blue-600 mb-2">24/7</div>
            <div class="text-gray-600">Texnik yordam</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
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

// Portfolio data could be fetched from API in a real application
const portfolioItems = [
  {
    id: 1,
    title: 'Toshkent City biznes markazi uchun ventilyatsiya tizimi',
    category: 'Biznes markazi',
    description: 'Yirik biznes markaz uchun zamonaviy va energiya tejamkor ventilyatsiya tizimi o\'rnatildi.',
    image: '/portfolio/tashkent-city.png',
    status: 'Tugallangan',
    year: '2024'
  },
  {
    id: 2,
    title: 'Artel zavodi uchun metallga ishlov berish',
    category: 'Sanoat korxonasi',
    description: 'Sanoat korxonasi uchun yuqori aniqlikdagi metall detallar ishlab chiqarildi.',
    image: '/portfolio/artel-zavod.jpg',
    status: 'Tugallangan',
    year: '2024'
  },
  {
    id: 3,
    title: 'Yangiobod sanoat hududi uchun elektr panellar',
    category: 'Sanoat hududi',
    description: 'Sanoat hududiga zamonaviy va xavfsiz elektr panellar yekazib berildi va o\'rnatildi.',
    image: '/portfolio/yangiobod.jpg',
    status: 'Tugallangan',
    year: '2024'
  }
]
</script> 