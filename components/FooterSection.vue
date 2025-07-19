<template>
  <footer class="bg-gray-900 text-white py-16">
    <div class="container mx-auto px-4">
      <!-- Main Footer Content -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <!-- Company Info -->
        <div class="lg:col-span-2">
          <div class="mb-6">
            <h3 class="text-2xl font-bold text-white mb-4">DELING MCHJ</h3>
            <p class="text-gray-300 leading-relaxed mb-6">
              Sifatli texnologiya va ishonchli kelajak. Metallga ishlov berish, 
              elektr panellar, ventilyatsiya tizimlari va zamonaviy texnologiyalar sohasida 
              professional xizmatlar.
            </p>
          </div>
          
          <!-- Contact Info -->
          <div class="space-y-3">
            <div class="flex items-center space-x-3">
              <Icon name="i-heroicons-map-pin" class="w-5 h-5 text-blue-400" />
              <a 
                href="https://yandex.com/maps?rtext=41.355927,69.287915~41.202707,69.245358&rtt=mt" 
                target="_blank" 
                class="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer"
              >
                Toshkent shahri, Daryo Bo'yi ko'chasi, 4
              </a>
            </div>
            <div class="flex items-center space-x-3">
              <Icon name="i-heroicons-phone" class="w-5 h-5 text-green-400" />
              <span class="text-gray-300">+998 97 110 39 33</span>
            </div>
            <div class="flex items-center space-x-3">
              <Icon name="i-heroicons-envelope" class="w-5 h-5 text-purple-400" />
              <span class="text-gray-300">info@deling.uz</span>
            </div>
            <div class="flex items-center space-x-3">
              <Icon name="i-heroicons-clock" class="w-5 h-5 text-orange-400" />
              <span class="text-gray-300">09:00 – 18:00, Dushanba–Shanba</span>
            </div>
          </div>
        </div>
        
        <!-- Services -->
        <div>
          <h4 class="text-lg font-semibold text-white mb-6">Xizmatlarimiz</h4>
          <ul class="space-y-3">
            <li>
              <a href="#services" class="text-gray-300 hover:text-blue-400 transition-colors">
                Elektr panellar
              </a>
            </li>
            <li>
              <a href="#services" class="text-gray-300 hover:text-blue-400 transition-colors">
                Metallga ishlov berish
              </a>
            </li>
            <li>
              <a href="#services" class="text-gray-300 hover:text-blue-400 transition-colors">
                Kraska purkash
              </a>
            </li>
            <li>
              <a href="#services" class="text-gray-300 hover:text-blue-400 transition-colors">
                Ventilyatsiya tizimlari
              </a>
            </li>
            <li>
              <a href="#portfolio" class="text-gray-300 hover:text-blue-400 transition-colors">
                Loyihalar
              </a>
            </li>
          </ul>
        </div>
        
        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-semibold text-white mb-6">Tez havolalar</h4>
          <ul class="space-y-3">
            <li>
              <a href="#about" class="text-gray-300 hover:text-blue-400 transition-colors">
                Biz haqimizda
              </a>
            </li>
            <li>
              <a href="#products" class="text-gray-300 hover:text-blue-400 transition-colors">
                Mahsulotlar
              </a>
            </li>
            <li>
              <a href="#partners" class="text-gray-300 hover:text-blue-400 transition-colors">
                Hamkorlar
              </a>
            </li>
            <li>
              <a href="#contact" class="text-gray-300 hover:text-blue-400 transition-colors">
                Bog'lanish
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-300 hover:text-blue-400 transition-colors">
                Sertifikatlar
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <!-- Social Media & Bottom -->
      <div class="border-t border-gray-700 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <!-- Copyright -->
          <div class="text-center md:text-left mb-4 md:mb-0">
            <p class="text-gray-400">
              © 2025 Deling MCHJ. Barcha huquqlar himoyalangan.
            </p>
          </div>
          
          <!-- Social Links -->
          <div class="flex space-x-4">
            <a 
              href="https://t.me/your_telegram_channel" 
              target="_blank"
              class="w-10 h-10 bg-gray-700 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-all duration-300 group"
              aria-label="Telegram"
            >
              <Icon name="i-heroicons-paper-airplane" class="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="https://instagram.com/your_instagram" 
              target="_blank"
              class="w-10 h-10 bg-gray-700 hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-400 rounded-lg flex items-center justify-center transition-all duration-300 group"
              aria-label="Instagram"
            >
              <Icon name="i-heroicons-camera" class="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="https://facebook.com/your_facebook" 
              target="_blank"
              class="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
              aria-label="Facebook"
            >
              <Icon name="i-heroicons-users" class="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Back to Top Button -->
    <button
      @click="scrollToTop"
      class="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
      v-show="showBackToTop"
    >
      <Icon name="i-heroicons-arrow-up" class="w-6 h-6" />
    </button>
  </footer>
</template>

<script setup>
const showBackToTop = ref(false)

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  const handleScroll = () => {
    showBackToTop.value = window.scrollY > 300
  }
  
  window.addEventListener('scroll', handleScroll)
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})
</script> 