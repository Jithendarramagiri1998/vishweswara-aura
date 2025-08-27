# Vishweshwara Vasthu Planning & Jyothisya

A modern, professional website for Vasthu Shastra and Jyothisya consulting services. Built with React, TypeScript, Tailwind CSS, and internationalization support.

## 🌟 Features

- **Modern Design**: Premium spiritual aesthetic with deep blue and gold color palette
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Multilingual Support**: English and Telugu language options with i18n
- **SEO Optimized**: Semantic HTML, meta tags, and structured data
- **Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Fast Performance**: Optimized images, lazy loading, and efficient React components
- **Contact Integration**: WhatsApp and phone call CTAs throughout the site

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd vishweshwara-vasthu
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:8080`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── assets/              # Images and static assets
├── components/          # React components
│   ├── ui/             # Reusable UI components (shadcn)
│   ├── Navigation.tsx   # Header navigation
│   ├── HeroSection.tsx  # Hero/landing section
│   ├── AboutSection.tsx # About section
│   └── ...             # Other page sections
├── i18n/               # Internationalization
│   ├── config.ts       # i18n configuration
│   └── locales/        # Translation files
│       ├── en.json     # English translations
│       └── te.json     # Telugu translations
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── index.css           # Global styles and design system
```

## 🎨 Design System

### Colors
- **Primary**: Deep spiritual blue (`--primary`)
- **Accent**: Sacred gold (`--accent`) 
- **Neutrals**: Warm spiritual grays
- **Gradients**: Sacred geometry inspired

### Typography
- **Headings**: Playfair Display (serif)
- **Body Text**: Inter (sans-serif)
- **Scales**: Responsive typography with proper contrast

### Components
All components use the design system tokens defined in `src/index.css`:
- `.btn-sacred` - Primary sacred button style
- `.btn-golden` - Accent golden button style
- `.heading-primary` - Main heading styles
- `.text-sacred` - Body text styles

## 🌍 Internationalization

The website supports English and Telugu languages:

### Adding New Languages
1. Create new locale file in `src/i18n/locales/`
2. Add translations following the existing JSON structure
3. Update `src/i18n/config.ts` to include the new language

### Editing Content
- **English**: Edit `src/i18n/locales/en.json`
- **Telugu**: Edit `src/i18n/locales/te.json`

## 📞 Contact Configuration

Update contact information in the translation files:

```json
{
  "common": {
    "phone": "+91 98489 25249",
    "email": "your@email.com"
  }
}
```

WhatsApp integration uses the phone number for direct messaging.

## 🔧 Customization

### Changing Colors
Edit the CSS variables in `src/index.css`:
```css
:root {
  --primary: 220 85% 25%;     /* Deep blue */
  --accent: 45 95% 50%;       /* Sacred gold */
  /* ... other colors */
}
```

### Adding New Sections
1. Create component in `src/components/`
2. Import and add to `src/pages/Index.tsx`
3. Add navigation link in `Navigation.tsx`
4. Update translations in locale files

### Modifying Images
Replace images in `src/assets/` and update imports in components.

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

## ⚡ Performance

- Images are optimized and lazy-loaded
- Code splitting with React.lazy()
- Efficient CSS with Tailwind purging
- Minimal JavaScript bundles

## 🔍 SEO Features

- Semantic HTML structure
- Meta tags for social sharing
- Structured data (JSON-LD)
- Accessible markup with ARIA labels
- Clean, crawlable URLs

## 📈 Analytics Ready

The website is ready for analytics integration:
- Google Analytics 4
- Facebook Pixel
- Custom event tracking

## 🚀 Deployment

Build for production:
```bash
npm run build
```

The `dist/` folder contains the production-ready files.

### Deployment Options
- **Vercel**: Connect GitHub repository for automatic deployment
- **Netlify**: Drag and drop `dist/` folder or connect repository
- **Traditional Hosting**: Upload `dist/` contents to web server

## 📧 Support

For questions or support with this website:
- **Consultant**: Ramagiri Ramesh
- **Phone**: +91 98489 25249
- **WhatsApp**: Available for quick responses

## 📄 License

© 2025 Vishweshwara Vasthu Planning & Jyothisya. All rights reserved.