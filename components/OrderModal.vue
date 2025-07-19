<template>
  <div class="fixed inset-0 z-50 overflow-y-auto" v-if="showModal">
    <!-- Backdrop -->
    <div 
      class="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
      @click="closeModal"
    ></div>
    
    <!-- Modal -->
    <div class="flex min-h-full items-center justify-center p-4">
      <div class="relative bg-white rounded-2xl shadow-2xl w-full max-w-md transform transition-all">
        <!-- Header -->
        <div class="flex items-center justify-between p-6 border-b">
          <h3 class="text-xl font-bold text-gray-900">Buyurtma berish</h3>
          <button 
            @click="closeModal"
            class="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <Icon name="i-heroicons-x-mark" class="w-6 h-6" />
          </button>
        </div>
        
        <!-- Form -->
        <form @submit.prevent="submitOrder" class="p-6 space-y-4">
          <!-- Product Info -->
          <div class="bg-gray-50 rounded-lg p-4 mb-6">
            <div class="text-sm text-gray-600 mb-1">Tanlangan mahsulot:</div>
            <div class="font-semibold text-gray-900">{{ product?.name }}</div>
          </div>
          
          <!-- Name and Family -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              *Ism va familiya
            </label>
            <input
              v-model="form.fullName"
              type="text"
              required
              placeholder="Ism va familiya"
              class="w-full h-12 px-4 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900"
            />
          </div>
          
          <!-- Phone -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              *Telefon
            </label>
            <div class="relative">
              <span class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-900 font-medium">+998</span>
              <input
                v-model="phoneNumber"
                @input="formatPhoneNumber"
                type="tel"
                required
                placeholder="90 123 45 67"
                maxlength="11"
                class="w-full h-12 pl-16 pr-4 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900"
              />
            </div>
          </div>
          
          <!-- Email -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              v-model="form.email"
              type="email"
              placeholder="example@email.com"
              class="w-full h-12 px-4 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900"
            />
          </div>
          
          <!-- Company -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Kompaniya nomi (ixtiyoriy)
            </label>
            <input
              v-model="form.company"
              type="text"
              placeholder="Kompaniya nomi"
              class="w-full h-12 px-4 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900"
            />
          </div>
          
          <!-- Message -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              *Xabaringiz
            </label>
            <textarea
              v-model="form.message"
              required
              rows="4"
              :placeholder="`${product?.name} haqida batafsil ma'lumot kerak. Narxi va yetkazib berish shartlari qanday?`"
              class="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-gray-900"
            ></textarea>
          </div>
          
          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full btn-primary flex items-center justify-center"
          >
            <Icon 
              v-if="isSubmitting" 
              name="i-heroicons-arrow-path" 
              class="w-5 h-5 mr-2 animate-spin" 
            />
            {{ isSubmitting ? 'Yuborilmoqda...' : 'Yuborish' }}
          </button>
          
          <!-- Success Message -->
          <div v-if="showSuccess" class="text-center text-green-600 font-medium">
            Buyurtmangiz yuborildi!
          </div>
          
          <!-- Error Message -->
          <div v-if="showError" class="text-center text-red-600 font-medium">
            Xatolik yuz berdi. Iltimos, qayta urinib ko'ring.
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['close'])

const showModal = ref(true)
const isSubmitting = ref(false)
const showSuccess = ref(false)
const showError = ref(false)

// Form data
const form = reactive({
  fullName: '',
  phone: '',
  email: '',
  company: '',
  message: ''
})

// Phone number handling
const phoneNumber = ref('')

// Format phone number as user types
const formatPhoneNumber = (event) => {
  let value = event.target.value.replace(/\D/g, '') // Remove non-digits
  
  // Limit to 9 digits (after +998)
  if (value.length > 9) {
    value = value.slice(0, 9)
  }
  
  // Format: XX XXX XX XX
  if (value.length >= 7) {
    value = value.replace(/(\d{2})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4')
  } else if (value.length >= 5) {
    value = value.replace(/(\d{2})(\d{3})(\d+)/, '$1 $2 $3')
  } else if (value.length >= 2) {
    value = value.replace(/(\d{2})(\d+)/, '$1 $2')
  }
  
  phoneNumber.value = value
  form.phone = '+998' + value.replace(/\s/g, '') // Store full number without spaces
}

// Initialize message with product name
watch(() => props.product, (newProduct) => {
  if (newProduct) {
    form.message = `${newProduct.name} haqida batafsil ma'lumot kerak. Narxi va yetkazib berish shartlari qanday?`
  }
}, { immediate: true })

const closeModal = () => {
  showModal.value = false
  setTimeout(() => {
    emit('close')
  }, 300)
}

const submitOrder = async () => {
  if (isSubmitting.value) return
  
  isSubmitting.value = true
  
  try {
    const orderData = {
      product: props.product,
      customer: {
        fullName: form.fullName,
        phone: form.phone,
        email: form.email,
        company: form.company,
        message: form.message
      },
      timestamp: new Date().toISOString()
    }
    
    console.log('Submitting order:', orderData)
    
    // Send to Telegram
    const response = await $fetch('/api/telegram/send-order', {
      method: 'POST',
      body: orderData
    })
    
    console.log('Order response:', response)
    
    if (response && response.success) {
      showSuccess.value = true
      
      // Reset form
      Object.keys(form).forEach(key => {
        form[key] = ''
      })
      phoneNumber.value = ''
      
      // Close modal after delay
      setTimeout(() => {
        closeModal()
      }, 2000)
    } else {
      console.error('Invalid response:', response)
      showError.value = true
      setTimeout(() => {
        showError.value = false
      }, 5000)
    }
  } catch (error) {
    console.error('Error sending order:', error)
    showError.value = true
    setTimeout(() => {
      showError.value = false
    }, 5000)
  } finally {
    isSubmitting.value = false
  }
}

// Close on escape key
onMounted(() => {
  const handleEscape = (e) => {
    if (e.key === 'Escape') {
      closeModal()
    }
  }
  document.addEventListener('keydown', handleEscape)
  
  onUnmounted(() => {
    document.removeEventListener('keydown', handleEscape)
  })
})
</script>

<style scoped>
/* Modal animations */
.modal-enter-active, .modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from, .modal-leave-to {
  opacity: 0;
}
</style> 