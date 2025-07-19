<template>
  <section id="products" class="py-16 md:py-24 bg-white">
    <div class="container mx-auto px-4">
      <!-- Section Title -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Mahsulot va Xizmatlar
        </h2>
        <div class="w-24 h-1 bg-blue-500 mx-auto"></div>
      </div>
      
      <!-- Products Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Elektr Panel DEL-100 -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 card-hover">
          <div class="relative h-48 bg-gray-100">
            <img 
              src="/products/panel-100.jpg" 
              alt="Elektr panel DEL-100" 
              class="w-full h-full object-cover"
            />
            <div class="absolute top-4 right-4 bg-blue-600 text-white px-2 py-1 rounded text-sm">
              DEL-100
            </div>
          </div>
          
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-2">
              Elektr paneli DEL-100
            </h3>
            <p class="text-sm text-blue-600 mb-3">Elektr panellar</p>
            <p class="text-gray-600 text-sm mb-4">
              Sanoat va tijorat binolari uchun zamonaviy elektr paneli. Sifatli va xavfsiz yechim.
            </p>
            
            <div class="text-blue-600 text-sm mb-4">So'rov asosida</div>
            
            <button 
              @click="openOrderModal(products.panel)"
              class="btn-primary w-full"
            >
              Buyurtma berish
            </button>
          </div>
        </div>
        
        <!-- Metallga ishlov berish -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 card-hover">
          <div class="relative h-48 bg-gray-100">
            <img 
              src="/products/metal-processing.jpg" 
              alt="Metallga ishlov berish" 
              class="w-full h-full object-cover"
            />
            <div class="absolute top-4 right-4 bg-orange-600 text-white px-2 py-1 rounded text-sm">
              Xizmat
            </div>
          </div>
          
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-2">
              Metallga ishlov berish (kesish, bukish)
            </h3>
            <p class="text-sm text-orange-600 mb-3">Metallga ishlov berish</p>
            <p class="text-gray-600 text-sm mb-4">
              Yuqori aniqlikdagi metall detallarni ishlab chiqarish va ishlov berish xizmati.
            </p>
            
            <div class="text-orange-600 text-sm mb-4">So'rov asosida</div>
            
            <button 
              @click="openOrderModal(products.metalProcessing)"
              class="btn-primary w-full"
            >
              Buyurtma berish
            </button>
          </div>
        </div>
        
        <!-- Kraska purkash KR-200 -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 card-hover">
          <div class="relative h-48 bg-gray-100">
            <img 
              src="/products/kraska-200.jpg" 
              alt="Kraska purkash tizimi KR-200" 
              class="w-full h-full object-cover"
            />
            <div class="absolute top-4 right-4 bg-green-600 text-white px-2 py-1 rounded text-sm">
              KR-200
            </div>
          </div>
          
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-2">
              Kraska purkash tizimi KR-200
            </h3>
            <p class="text-sm text-green-600 mb-3">Kraska purkash tizimlari</p>
            <p class="text-gray-600 text-sm mb-4">
              Sifatli va samarali kraska purkash tizimi. Sanoat uchun mos.
            </p>
            
            <div class="text-green-600 text-sm mb-4">So'rov asosida</div>
            
            <button 
              @click="openOrderModal(products.paintSystem)"
              class="btn-primary w-full"
            >
              Buyurtma berish
            </button>
          </div>
        </div>
        
        <!-- Ventilyatsiya VNT-500 -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 card-hover">
          <div class="relative h-48 bg-gray-100">
            <img 
              src="/products/vent-500.jpg" 
              alt="Ventilyatsiya tizimi VNT-500" 
              class="w-full h-full object-cover"
            />
            <div class="absolute top-4 right-4 bg-purple-600 text-white px-2 py-1 rounded text-sm">
              VNT-500
            </div>
          </div>
          
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-2">
              Ventilyatsiya tizimi VNT-500
            </h3>
            <p class="text-sm text-purple-600 mb-3">Ventilyatsiya tizimlari</p>
            <p class="text-gray-600 text-sm mb-4">
              Katta obyektlar uchun energiya tejamkor ventilyatsiya tizimi.
            </p>
            
            <div class="text-purple-600 text-sm mb-4">So'rov asosida</div>
            
            <button 
              @click="openOrderModal(products.ventilation)"
              class="btn-primary w-full"
            >
              Buyurtma berish
            </button>
          </div>
        </div>
      </div>
      
      <!-- Bottom CTA -->
      <div class="mt-16 text-center">
        <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
          <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Maxsus loyihalar uchun individual yechimlar
          </h3>
          <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Har bir mijozning ehtiyojlariga mos ravishda individual loyihalar ishlab chiqamiz
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              @click="scrollToContact"
              class="btn-primary"
            >
              Loyiha bo'yicha maslahat
            </button>
            <button class="btn-secondary">
              Katalogni yuklab olish
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Inject the global order modal function
const openOrderModal = inject('openOrderModal')

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

// Product data
const products = {
  panel: {
    id: 'del-100',
    name: 'Elektr paneli DEL-100',
    category: 'Elektr panellar',
    description: 'Sanoat va tijorat binolari uchun zamonaviy elektr paneli. Sifatli va xavfsiz yechim.',
    image: '/products/panel-100.jpg'
  },
  metalProcessing: {
    id: 'metal-processing',
    name: 'Metallga ishlov berish (kesish, bukish)',
    category: 'Metallga ishlov berish',
    description: 'Yuqori aniqlikdagi metall detallarni ishlab chiqarish va ishlov berish xizmati.',
    image: '/products/metal-processing.jpg'
  },
  paintSystem: {
    id: 'kr-200',
    name: 'Kraska purkash tizimi KR-200',
    category: 'Kraska purkash tizimlari',
    description: 'Sifatli va samarali kraska purkash tizimi. Sanoat uchun mos.',
    image: '/products/kraska-200.jpg'
  },
  ventilation: {
    id: 'vnt-500',
    name: 'Ventilyatsiya tizimi VNT-500',
    category: 'Ventilyatsiya tizimlari',
    description: 'Katta obyektlar uchun energiya tejamkor ventilyatsiya tizimi.',
    image: '/products/vent-500.jpg'
  }
}
</script> 