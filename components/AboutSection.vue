<template>
  <section id="about" class="py-16 md:py-24 bg-white">
    <div class="container mx-auto px-4">
      <!-- Section Title -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Biz haqimizda
        </h2>
        <div class="w-24 h-1 bg-blue-500 mx-auto"></div>
      </div>
      
      <!-- Content Grid -->
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Video Section -->
        <div class="relative">
          <div class="relative overflow-hidden rounded-2xl shadow-2xl bg-black">
            <video 
              ref="videoPlayer"
              class="w-full h-64 md:h-80 lg:h-96 object-cover"
              :poster="'/deling.jpg'"
              controls
              preload="metadata"
            >
              <source src="/deling.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>
            
            <!-- Video Overlay Info -->
            <div class="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm">
              Bodor A Series - Laser Cutting Machine
            </div>
          </div>
        </div>
        
        <!-- Description Section -->
        <div class="space-y-6">
          <h3 class="text-2xl md:text-3xl font-bold text-gray-900">
            Deling MCHJ
          </h3>
          
          <p class="text-lg text-gray-600 leading-relaxed">
            – bu metallga ishlov berish, elektr panellar ishlab chiqarish, 
            ventilyatsiya tizimlarini loyihalash, tayorlash va o'rnatish 
            sohasida ixtisoslashgan zamonaviy servis kompaniyasi.
          </p>
          
          <p class="text-gray-600 leading-relaxed">
            Kompaniyamiz o'zining ishlab chiqarish bazasi, tajribali 
            mutaxassislari va sifat sertifikatlariga ega bo'lgan texnologik 
            uskunalari bilan sanoat va qurilish loyihalari uchun kompleks 
            yechimlarni taqdim etadi.
          </p>
          
          <!-- Features List -->
          <div class="grid md:grid-cols-2 gap-6 mt-8">
            <div class="space-y-4">
              <h4 class="text-lg font-semibold text-blue-600 mb-3">
                Bizning yo'nalishlar:
              </h4>
              
              <div class="flex items-start space-x-3">
                <Icon name="i-heroicons-wrench-screwdriver" class="w-5 h-5 text-blue-500 mt-1" />
                <span class="text-gray-700">Elektr panellar ishlab chiqarish</span>
              </div>
              
              <div class="flex items-start space-x-3">
                <Icon name="i-heroicons-cog-6-tooth" class="w-5 h-5 text-blue-500 mt-1" />
                <span class="text-gray-700">Metallga ishlov berish</span>
              </div>
              
              <div class="flex items-start space-x-3">
                <Icon name="i-heroicons-squares-plus" class="w-5 h-5 text-blue-500 mt-1" />
                <span class="text-gray-700">Kraska purkash tizimlari</span>
              </div>
              
              <div class="flex items-start space-x-3">
                <Icon name="i-heroicons-adjustments-horizontal" class="w-5 h-5 text-blue-500 mt-1" />
                <span class="text-gray-700">Ventilyatsiya tizimlari</span>
              </div>
            </div>
            
            <div class="space-y-4">
              <h4 class="text-lg font-semibold text-green-600 mb-3">
                Bizning ustunliklarimiz:
              </h4>
              
              <div class="flex items-start space-x-3">
                <Icon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 mt-1" />
                <span class="text-gray-700">Zamonaviy ishlab chiqarish bazasi</span>
              </div>
              
              <div class="flex items-start space-x-3">
                <Icon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 mt-1" />
                <span class="text-gray-700">Sifat sertifikatlari</span>
              </div>
              
              <div class="flex items-start space-x-3">
                <Icon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 mt-1" />
                <span class="text-gray-700">Tajribali mutaxassislar</span>
              </div>
              
              <div class="flex items-start space-x-3">
                <Icon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 mt-1" />
                <span class="text-gray-700">Individual yondashuv</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const videoPlayer = ref(null)
</script> 