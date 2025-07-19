<template>
  <section id="services" class="py-16 md:py-24 bg-gray-50">
    <div class="container mx-auto px-4">
      <!-- Section Title -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Bizning yo'nalishlar
        </h2>
        <div class="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Deling MCHJ — bu metallga ishlov berish, elektr panellar ishlab chiqarish, 
          ventilyatsiya tizimlarini loyihalash, tayorlash va o'rnatish sohasida 
          ixtisoslashgan zamonaviy servis kompaniyasi.
        </p>
      </div>
      
      <!-- Services Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Elektr panellar -->
        <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
          <div class="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
            <Icon name="i-heroicons-bolt" class="w-8 h-8 text-blue-600" />
          </div>
          
          <h3 class="text-xl font-bold text-gray-900 mb-4">
            Elektr panellar ishlab chiqarish
          </h3>
          
          <p class="text-gray-600 mb-6 leading-relaxed">
            Yoritish, kuchlainsh taqsimoti, boshqaruv va avtomatlashtirrsh 
            panellarini ishlab chiqarish, yig'ish va testdan o'tkazish.
          </p>
          
          <div class="flex items-center text-blue-600 font-medium">
            <span>Batafsil</span>
            <Icon name="i-heroicons-arrow-right" class="w-4 h-4 ml-2" />
          </div>
        </div>
        
        <!-- Metallga ishlov berish -->
        <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
          <div class="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
            <Icon name="i-heroicons-cog-6-tooth" class="w-8 h-8 text-orange-600" />
          </div>
          
          <h3 class="text-xl font-bold text-gray-900 mb-4">
            Metallga ishlov berish
          </h3>
          
          <p class="text-gray-600 mb-6 leading-relaxed">
            Lazerli kesish, egish, shtamplash va payvandlash kabi 
            mexanik ishlov berish xizmati.
          </p>
          
          <div class="flex items-center text-orange-600 font-medium">
            <span>Batafsil</span>
            <Icon name="i-heroicons-arrow-right" class="w-4 h-4 ml-2" />
          </div>
        </div>
        
        <!-- Kraska purkash -->
        <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
          <div class="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
            <Icon name="i-heroicons-paint-brush" class="w-8 h-8 text-green-600" />
          </div>
          
          <h3 class="text-xl font-bold text-gray-900 mb-4">
            Kraska purkash tizimlari
          </h3>
          
          <p class="text-gray-600 mb-6 leading-relaxed">
            Kukunli bo'yash texnologiyasi yordamida bardoshli va estetik 
            qoplama.
          </p>
          
          <div class="flex items-center text-green-600 font-medium">
            <span>Batafsil</span>
            <Icon name="i-heroicons-arrow-right" class="w-4 h-4 ml-2" />
          </div>
        </div>
        
        <!-- Ventilyatsiya -->
        <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
          <div class="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
            <Icon name="i-heroicons-adjustments-horizontal" class="w-8 h-8 text-purple-600" />
          </div>
          
          <h3 class="text-xl font-bold text-gray-900 mb-4">
            Ventilyatsiya tizimlari
          </h3>
          
          <p class="text-gray-600 mb-6 leading-relaxed">
            Sanoat va fuqarolik obyektlari uchun shamollatish, havo 
            almashtirish tizimlarI ishlab chiqarish va montaji.
          </p>
          
          <div class="flex items-center text-purple-600 font-medium">
            <span>Batafsil</span>
            <Icon name="i-heroicons-arrow-right" class="w-4 h-4 ml-2" />
          </div>
        </div>
      </div>
      
      <!-- Bottom Section -->
      <div class="mt-16 text-center">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <!-- Left - Stats -->
          <div class="grid grid-cols-2 gap-8">
            <div class="text-center">
              <div class="text-4xl font-bold text-blue-600 mb-2">5+</div>
              <div class="text-gray-600">Yillik tajriba</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <div class="text-gray-600">Bajarilgan loyihalar</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div class="text-gray-600">Mamnun mijozlar</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div class="text-gray-600">Qo'llab-quvvatlash</div>
            </div>
          </div>
          
          <!-- Right - CTA -->
          <div class="text-center md:text-left">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">
              Loyihangizni muhokama qilishga tayyormiz
            </h3>
            <p class="text-gray-600 mb-6">
              Mutaxassislarimiz bilan bog'laning va bepul maslahat oling
            </p>
            <button 
              @click="scrollToContact"
              class="btn-primary"
            >
              Bepul maslahat olish
            </button>
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
</script> 