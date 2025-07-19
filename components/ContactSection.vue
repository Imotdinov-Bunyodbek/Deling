<template>
  <section id="contact" class="py-12 md:py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <!-- Section Title -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Bog'lanish
        </h2>
        <div class="w-24 h-1 bg-blue-500 mx-auto"></div>
      </div>
      
      <div class="grid lg:grid-cols-2 gap-8">
        <!-- Contact Information -->
        <div class="space-y-6">
          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">
              Bog'lanish
            </h3>
            
            <div class="space-y-4">
              <!-- Address -->
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="i-heroicons-map-pin" class="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">Manzil:</h4>
                  <p class="text-gray-600">
                    <a 
                      href="https://yandex.com/maps?rtext=41.355927,69.287915~41.202707,69.245358&rtt=mt" 
                      target="_blank" 
                      class="hover:text-blue-600 transition-colors"
                    >
                      Toshkent shahri, Daryo Bo'yi ko'chasi, 4
                    </a>
                  </p>
                </div>
              </div>
              
              <!-- Phone -->
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="i-heroicons-phone" class="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">Telefon:</h4>
                  <p class="text-gray-600">
                    <a href="tel:+998971103933" class="hover:text-green-600 transition-colors">
                      +998 97 110 39 33
                    </a>
                  </p>
                </div>
              </div>
              
              <!-- Email -->
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="i-heroicons-envelope" class="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">Email:</h4>
                  <p class="text-gray-600">
                    <a href="mailto:info@deling.uz" class="hover:text-purple-600 transition-colors">
                      info@deling.uz
                    </a>
                  </p>
                </div>
              </div>
              
              <!-- Working Hours -->
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="i-heroicons-clock" class="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">Ish vaqti:</h4>
                  <p class="text-gray-600">
                    09:00 – 18:00, Dushanba–Shanba
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Social Links -->
          <div>
            <h4 class="font-semibold text-gray-900 mb-4">Ijtimoiy tarmoqlar:</h4>
            <div class="flex space-x-4">
              <a 
                href="https://t.me/your_telegram_channel" 
                target="_blank"
                class="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white hover:bg-blue-600 transition-colors group"
                aria-label="Telegram"
              >
                <Icon name="i-heroicons-paper-airplane" class="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://instagram.com/your_instagram" 
                target="_blank"
                class="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-lg flex items-center justify-center text-white hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 transition-all group"
                aria-label="Instagram"
              >
                <Icon name="i-heroicons-camera" class="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://facebook.com/your_facebook" 
                target="_blank"
                class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors group"
                aria-label="Facebook"
              >
                <Icon name="i-heroicons-users" class="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
        
        <!-- Contact Form -->
        <div class="bg-white rounded-2xl shadow-lg p-6">
          <form @submit.prevent="submitContactForm" class="space-y-4">
            <div>
              <h3 class="text-lg font-bold text-gray-900 mb-4">
                Xabar yuborish
              </h3>
            </div>
            
            <!-- Name -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                *Ism va familiya
              </label>
              <input
                v-model="contactForm.fullName"
                type="text"
                required
                placeholder="Ism va familiya"
                class="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900"
              />
            </div>
            
            <!-- Email -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                *Email
              </label>
              <input
                v-model="contactForm.email"
                type="email"
                required
                placeholder="example@email.com"
                class="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900"
              />
            </div>
            
            <!-- Phone -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Telefon (ixtiyoriy)
              </label>
              <input
                v-model="contactForm.phone"
                type="tel"
                placeholder="+998 XX XXX XX XX"
                class="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900"
              />
            </div>
            
            <!-- Subject -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                *Mavzuni tanlang
              </label>
              <select
                v-model="contactForm.subject"
                required
                class="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900"
              >
                <option value="">Mavzuni tanlang</option>
                <option value="elektr-panellar">Elektr panellar</option>
                <option value="metall-ishlov">Metallga ishlov berish</option>
                <option value="kraska-purkash">Kraska purkash tizimlari</option>
                <option value="ventilyatsiya">Ventilyatsiya tizimlari</option>
                <option value="loyiha-maslahat">Loyiha bo'yicha maslahat</option>
                <option value="hamkorlik">Hamkorlik</option>
                <option value="boshqa">Boshqa</option>
              </select>
            </div>
            
            <!-- Company -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Kompaniya nomi (ixtiyoriy)
              </label>
              <input
                v-model="contactForm.company"
                type="text"
                placeholder="Kompaniya nomi"
                class="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900"
              />
            </div>
            
            <!-- Message -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                *Xabaringiz
              </label>
              <textarea
                v-model="contactForm.message"
                required
                rows="3"
                placeholder="Xabaringizni yozing..."
                class="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-gray-900"
              ></textarea>
            </div>
            
            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              <Icon 
                v-if="isSubmitting" 
                name="i-heroicons-arrow-path" 
                class="w-4 h-4 mr-2 animate-spin" 
              />
              {{ isSubmitting ? 'Yuborilmoqda...' : 'YUBORISH' }}
            </button>
            
            <!-- Success Message -->
            <div v-if="showSuccess" class="text-center text-green-600 font-medium">
              Xabaringiz muvaffaqiyatli yuborildi!
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const isSubmitting = ref(false)
const showSuccess = ref(false)

// Contact form data
const contactForm = reactive({
  fullName: '',
  email: '',
  phone: '',
  subject: '',
  company: '',
  message: ''
})

const submitContactForm = async () => {
  if (isSubmitting.value) return
  
  isSubmitting.value = true
  
  try {
    const contactData = {
      type: 'contact',
      customer: contactForm,
      timestamp: new Date().toISOString()
    }
    
    // Send to Telegram
    const response = await $fetch('/api/telegram/send-contact', {
      method: 'POST',
      body: contactData
    })
    
    if (response.success) {
      showSuccess.value = true
      
      // Reset form
      Object.keys(contactForm).forEach(key => {
        contactForm[key] = ''
      })
      
      // Hide success message after delay
      setTimeout(() => {
        showSuccess.value = false
      }, 5000)
    }
  } catch (error) {
    console.error('Error sending contact form:', error)
    alert('Xatolik yuz berdi. Iltimos, qayta urinib ko\'ring.')
  } finally {
    isSubmitting.value = false
  }
}
</script> 