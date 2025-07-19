<template>
  <div class="bg-white">
    <!-- Header -->
    <HeaderNavigation />
    
    <!-- Main Content -->
    <main>
      <!-- Hero Section -->
      <HeroSection />
      
      <!-- About Section -->
      <AboutSection />
      
      <!-- Services Section -->
      <ServicesSection />
      
      <!-- Products Section -->
      <ProductsSection />
      
      <!-- Portfolio Section -->
      <PortfolioSection />
      
      <!-- Partners Section -->
      <PartnersSection />
      
      <!-- Contact Section -->
      <ContactSection />
    </main>
    
    <!-- Footer -->
    <FooterSection />
    
    <!-- Order Modal -->
    <OrderModal v-if="showOrderModal" @close="showOrderModal = false" :product="selectedProduct" />
  </div>
</template>

<script setup>
// Global state for order modal
const showOrderModal = ref(false)
const selectedProduct = ref(null)

// Provide global functions
provide('openOrderModal', (product) => {
  selectedProduct.value = product
  showOrderModal.value = true
})

// Meta tags
useHead({
  title: 'Deling MCHJ - Sifatli texnologiya, ishonchli kelajak',
  meta: [
    { name: 'description', content: 'Deling MCHJ - metallga ishlov berish, elektr panellar ishlab chiqarish, ventilyatsiya tizimlarini loyihalash, tayorlash va montaj xizmatlari' }
  ]
})
</script> 