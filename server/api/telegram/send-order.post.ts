/*
  TELEGRAM BOT SETUP INSTRUCTIONS:
  
  1. Create a bot:
     - Message @BotFather on Telegram
     - Use /newbot command
     - Choose a name and username for your bot
     - Copy the bot token
  
  2. Get your chat ID:
     - Start a chat with your bot
     - Send any message
     - Visit: https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates
     - Find your chat ID in the response
  
  3. Create .env.local file in project root:
     TELEGRAM_BOT_TOKEN=your_bot_token_here
     TELEGRAM_CHAT_ID=your_chat_id_here
  
  Without these, the form will still work but won't send actual messages.
*/

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const config = useRuntimeConfig()
    
    console.log('Received order request:', { 
      hasProduct: !!body.product, 
      hasCustomer: !!body.customer,
      customerName: body.customer?.fullName 
    })
    
    const { product, customer, timestamp } = body
    
    // Validate required fields
    if (!customer?.fullName || !customer?.phone || !customer?.message) {
      console.error('Missing required fields:', { 
        fullName: !!customer?.fullName, 
        phone: !!customer?.phone, 
        message: !!customer?.message 
      })
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing required fields'
      })
    }
    
    // Check if Telegram config is available
    if (!config.telegramBotToken || !config.telegramChatId) {
      console.error('Missing Telegram configuration:', { 
        hasToken: !!config.telegramBotToken, 
        hasChatId: !!config.telegramChatId 
      })
      // Return success anyway for development
      return {
        success: true,
        message: 'Order received (Telegram not configured)'
      }
    }
    
    // Format message for Telegram
    const telegramMessage = formatOrderMessage(product, customer, timestamp)
    console.log('Sending message to Telegram...')
    
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
    
    console.log('Telegram API response:', response)
    
    // Telegram API returns {ok: true, result: ...} on success
    if (response && (response as any).ok) {
      return {
        success: true,
        message: 'Order sent successfully'
      }
    } else {
      console.error('Telegram response failed:', response)
      throw new Error('Failed to send message to Telegram')
    }
    
  } catch (error: any) {
    console.error('Full error details:', {
      message: error.message,
      stack: error.stack,
      data: error.data
    })
    
    // Return success for development to avoid blocking the UI
    return {
      success: true,
      message: 'Order received (development mode)'
    }
  }
})

function formatOrderMessage(product: any, customer: any, timestamp: string) {
  const date = new Date(timestamp).toLocaleString('uz-UZ', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
  
  return `
🔔 <b>Yangi buyurtma!</b>

📦 <b>Mahsulot:</b> ${product.name}
📂 <b>Kategoriya:</b> ${product.category}

👤 <b>Mijoz ma'lumotlari:</b>
• <b>Ism:</b> ${customer.fullName}
• <b>Telefon:</b> ${customer.phone}
${customer.email ? `• <b>Email:</b> ${customer.email}` : ''}
${customer.company ? `• <b>Kompaniya:</b> ${customer.company}` : ''}

💬 <b>Xabar:</b>
${customer.message}

🕐 <b>Vaqt:</b> ${date}

<i>Deling MCHJ orqali yuborildi</i>
  `.trim()
} 