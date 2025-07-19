<template>
  <header class="bg-white shadow-sm fixed w-full top-0 z-50">
    <nav class="container mx-auto px-4 py-4 flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center">
        <h1 class="text-2xl font-bold text-blue-600">DELING</h1>
      </div>
      
      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-8">
        <button @click="scrollToSection('products')" class="text-gray-700 hover:text-blue-600 font-medium transition-colors">
          Mahsulotlar
        </button>
        <button @click="scrollToSection('services')" class="text-gray-700 hover:text-blue-600 font-medium transition-colors">
          Bizning yo'nalishlar
        </button>
        <button @click="scrollToSection('portfolio')" class="text-gray-700 hover:text-blue-600 font-medium transition-colors">
          Loyihalar (Portfolio)
        </button>
        <button @click="scrollToSection('contact')" class="text-gray-700 hover:text-blue-600 font-medium transition-colors">
          Bog'lanish
        </button>
        <button @click="scrollToSection('partners')" class="text-gray-700 hover:text-blue-600 font-medium transition-colors">
          Hamkorlik
        </button>
      </div>
      
      <!-- Mobile Menu Button -->
      <button 
        @click="mobileMenuOpen = !mobileMenuOpen"
        class="md:hidden flex items-center text-gray-700 hover:text-blue-600"
      >
        <Icon v-if="!mobileMenuOpen" name="i-heroicons-bars-3" class="w-6 h-6" />
        <Icon v-else name="i-heroicons-x-mark" class="w-6 h-6" />
      </button>
    </nav>
    
    <!-- Mobile Navigation -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-white border-t">
      <div class="container mx-auto px-4 py-4 space-y-4">
        <button 
          @click="scrollToSection('products'); mobileMenuOpen = false"
          class="block text-gray-700 hover:text-blue-600 font-medium transition-colors w-full text-left"
        >
          Mahsulotlar
        </button>
        <button 
          @click="scrollToSection('services'); mobileMenuOpen = false"
          class="block text-gray-700 hover:text-blue-600 font-medium transition-colors w-full text-left"
        >
          Bizning yo'nalishlar
        </button>
        <button 
          @click="scrollToSection('portfolio'); mobileMenuOpen = false"
          class="block text-gray-700 hover:text-blue-600 font-medium transition-colors w-full text-left"
        >
          Loyihalar (Portfolio)
        </button>
        <button 
          @click="scrollToSection('contact'); mobileMenuOpen = false"
          class="block text-gray-700 hover:text-blue-600 font-medium transition-colors w-full text-left"
        >
          Bog'lanish
        </button>
        <button 
          @click="scrollToSection('partners'); mobileMenuOpen = false"
          class="block text-gray-700 hover:text-blue-600 font-medium transition-colors w-full text-left"
        >
          Hamkorlik
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
const mobileMenuOpen = ref(false)

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

// Close mobile menu when clicking outside
onMounted(() => {
  document.addEventListener('click', (e) => {
    if (!e.target.closest('header')) {
      mobileMenuOpen.value = false
    }
  })
})
</script> 