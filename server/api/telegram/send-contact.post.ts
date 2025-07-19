export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const config = useRuntimeConfig()
    
    const { customer, timestamp } = body
    
    // Validate required fields
    if (!customer.fullName || !customer.email || !customer.subject || !customer.message) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing required fields'
      })
    }
    
    // Format message for Telegram
    const telegramMessage = formatContactMessage(customer, timestamp)
    
    // Send to Telegram
    const telegramUrl = `https://api.telegram.org/bot${config.telegramBotToken}/sendMessage`
    
    const response = await $fetch(telegramUrl, {
      method: 'POST',
      body: {
        chat_id: config.telegramChatId,
        text: telegramMessage,
        parse_mode: 'HTML'
      }
    })
    
    if (response.ok) {
      return {
        success: true,
        message: 'Contact form sent successfully'
      }
    } else {
      throw new Error('Failed to send message to Telegram')
    }
    
  } catch (error) {
    console.error('Telegram API Error:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send contact form to Telegram'
    })
  }
})

function formatContactMessage(customer: any, timestamp: string) {
  const date = new Date(timestamp).toLocaleString('uz-UZ', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
  
  const subjectNames: Record<string, string> = {
    'elektr-panellar': 'Elektr panellar',
    'metall-ishlov': 'Metallga ishlov berish',
    'kraska-purkash': 'Kraska purkash tizimlari',
    'ventilyatsiya': 'Ventilyatsiya tizimlari',
    'loyiha-maslahat': 'Loyiha bo\'yicha maslahat',
    'hamkorlik': 'Hamkorlik',
    'boshqa': 'Boshqa'
  }
  
  return `
📧 <b>Yangi kontakt xabari!</b>

📋 <b>Mavzu:</b> ${subjectNames[customer.subject] || customer.subject}

👤 <b>Mijoz ma'lumotlari:</b>
• <b>Ism:</b> ${customer.fullName}
• <b>Email:</b> ${customer.email}
${customer.phone ? `• <b>Telefon:</b> ${customer.phone}` : ''}
${customer.company ? `• <b>Kompaniya:</b> ${customer.company}` : ''}

💬 <b>Xabar:</b>
${customer.message}

🕐 <b>Vaqt:</b> ${date}

<i>Deling MCHJ kontakt formasi orqali yuborildi</i>
  `.trim()
} 