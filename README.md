# Deling MCHJ - Landing Page

A modern, responsive landing page for **Deling MCHJ**, an industrial technology company specializing in metal processing, electrical panels, ventilation systems, and paint technologies.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive design for all devices
- **Telegram Integration**: Orders and contact forms send directly to Telegram bot
- **Multi-language Support**: Content in Uzbek language
- **SEO Optimized**: Built with Nuxt.js for excellent SEO performance
- **Fast Loading**: Optimized images and performance

## 🛠 Technology Stack

- **Framework**: Nuxt.js 3
- **Styling**: Tailwind CSS + Nuxt UI
- **Language**: TypeScript
- **State Management**: Pinia
- **Icons**: Heroicons
- **Deployment**: Ready for Vercel/Netlify

## 📋 Project Structure

```
deling-vue/
├── components/           # Vue components
│   ├── HeaderNavigation.vue
│   ├── HeroSection.vue
│   ├── AboutSection.vue
│   ├── ServicesSection.vue
│   ├── ProductsSection.vue
│   ├── PortfolioSection.vue
│   ├── PartnersSection.vue
│   ├── ContactSection.vue
│   ├── FooterSection.vue
│   └── OrderModal.vue
├── server/api/telegram/  # Telegram API endpoints
│   ├── send-order.post.ts
│   └── send-contact.post.ts
├── assets/css/           # Global styles
├── public/               # Static assets
│   ├── products/         # Product images
│   ├── portfolio/        # Portfolio images
│   ├── partners/         # Partner logos
│   └── media files...
├── app.vue              # Main application
├── nuxt.config.ts       # Nuxt configuration
└── package.json         # Dependencies
```

## 🎯 Sections Overview

### 1. **Header Navigation**
- Company logo
- Responsive navigation menu
- Mobile-friendly hamburger menu

### 2. **Hero Section**
- Company introduction
- Main value proposition
- Call-to-action buttons
- Background hero image

### 3. **About Section**
- Company video presentation
- Services overview
- Feature highlights

### 4. **Services Section**
- 4 main service categories:
  - Elektr panellar ishlab chiqarish
  - Metallga ishlov berish
  - Kraska purkash tizimlari
  - Ventilyatsiya tizimlari

### 5. **Products Section**
- Product showcase grid
- Order buttons with modal functionality
- Product categories with images

### 6. **Portfolio Section**
- 3 completed projects:
  - Toshkent City business center
  - Artel factory
  - Yangiobod industrial area

### 7. **Partners Section**
- Partner company logos
- Customer testimonials
- Partnership benefits

### 8. **Contact Section**
- Contact information
- Contact form with Telegram integration
- Social media links

### 9. **Footer**
- Company information
- Quick navigation links
- Social media links
- Back-to-top button

## ⚙️ Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Environment Variables**
   Create or update `.env.local` file:
   ```env
   TELEGRAM_BOT_TOKEN=your_bot_token_here
   TELEGRAM_CHAT_ID=your_chat_id_here
   ```

3. **Development Server**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000`

4. **Build for Production**
   ```bash
   npm run build
   ```

5. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 📱 Telegram Bot Setup

### 1. Create a Telegram Bot
1. Message `@BotFather` on Telegram
2. Send `/newbot` command
3. Follow instructions to create your bot
4. Save the bot token

### 2. Get Chat ID
1. Add your bot to a group or get your personal chat ID
2. Send a message to the bot
3. Visit: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
4. Find the `chat.id` in the response

### 3. Update Environment Variables
```env
TELEGRAM_BOT_TOKEN=1234567890:ABCdefGHIjklMNOpqrsTUVwxyz
TELEGRAM_CHAT_ID=-1001234567890
```

## 📞 Contact Integration

The website includes two types of Telegram notifications:

### Order Notifications
When users click "Buyurtma berish" (Place Order):
- Product information
- Customer details
- Formatted message sent to Telegram

### Contact Form Notifications
When users submit the contact form:
- Subject category
- Customer information
- Message content
- Formatted notification to Telegram

## 🎨 Customization

### Colors
Main brand colors defined in CSS:
- Primary Blue: `#3B82F6`
- Secondary: `#1E40AF`
- Success Green: `#10B981`
- Warning Orange: `#F59E0B`

### Fonts
Using Inter font family for modern, clean typography.

### Images
Replace images in the `/public` directory:
- `/public/hero-bg.jpg` - Hero section background
- `/public/products/` - Product images
- `/public/portfolio/` - Project images
- `/public/partners/` - Partner logos

## 🌐 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Netlify
1. Build the project: `npm run generate`
2. Upload `dist` folder to Netlify
3. Add environment variables

### Traditional Hosting
1. Run: `npm run generate`
2. Upload the generated files to your hosting provider

## 📈 Performance Features

- **Image Optimization**: Automatic image optimization with Nuxt
- **Code Splitting**: Automatic code splitting for faster loading
- **CSS Optimization**: Purged and minified CSS
- **SEO Optimization**: Meta tags, structured data, sitemap

## 🔧 Development Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Generate static site
npm run generate

# Preview production build
npm run preview

# Run type checking
npm run postinstall
```

## 📄 License

This project is proprietary software developed for Deling MCHJ.

## 🤝 Support

For technical support or questions:
- Email: info@deling.uz
- Phone: +998 97 110 39 33

---

**Deling MCHJ** - Sifatli texnologiya, ishonchli kelajak! 