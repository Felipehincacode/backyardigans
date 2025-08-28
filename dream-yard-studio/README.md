# Dream Yard Studio 🌿

A modern, mobile-first landing page for professional landscape design and renovation services, targeting American homeowners.

## 🎨 Design Philosophy

**Patio Retro Color Palette:**
- **Burnt Orange** (#D2691E) - Primary action color
- **Avocado Green** (#556B2F) - Natural, organic elements
- **Mustard Yellow** (#FFD700) - Accent and highlights
- **Soft Cream** (#F5F5DC) - Background base
- **Terracotta Brown** (#8B4513) - Text and structure

## ✨ Features

### 🎮 Gaming-Inspired UX
- **Mobile-first design** with responsive breakpoints
- **Smooth scroll storytelling** with animated sections
- **Interactive elements** with hover effects and transitions
- **Glass morphism effects** for modern aesthetics
- **Custom animations** and micro-interactions

### 📱 Mobile-First Approach
- Optimized for mobile devices first
- Touch-friendly interface elements
- Responsive typography and spacing
- Fast loading and performance

### 🎯 Content Sections
1. **Hero Section** - Compelling headline with call-to-action
2. **Services** - Landscape design, installation, maintenance
3. **Process** - 4-step transparent workflow
4. **Gallery** - Project showcase with hover effects
5. **Contact** - Lead generation form
6. **Footer** - Company information and links

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dream-yard-studio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🛠️ Tech Stack

- **Framework:** Next.js 15.5.2 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4.0
- **Fonts:** Inter & Poppins (Google Fonts)
- **Animations:** CSS animations + React hooks
- **Performance:** Turbopack for faster builds

## 📁 Project Structure

```
dream-yard-studio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx           # Main landing page
│   ├── globals.css        # Global styles and variables
│   └── favicon.ico        # Site icon
├── public/                # Static assets
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── README.md             # Project documentation
```

## 🎨 Customization

### Colors
All colors are defined as CSS custom properties in `globals.css`:

```css
:root {
  --color-burnt-orange: #D2691E;
  --color-avocado-green: #556B2F;
  --color-mustard-yellow: #FFD700;
  --color-soft-cream: #F5F5DC;
  --color-terracotta-brown: #8B4513;
}
```

### Animations
Custom animations are available as utility classes:
- `.animate-float` - Floating animation
- `.animate-pulse-glow` - Glowing pulse effect
- `.animate-slide-in-up` - Slide up entrance
- `.animate-fade-in` - Fade in effect

### Typography
- **Inter** - Body text and general content
- **Poppins** - Headings and display text

## 📱 Responsive Design

The site is built with a mobile-first approach:

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px  
- **Desktop:** > 1024px

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📈 SEO Optimization

- **Meta tags** for social sharing
- **Open Graph** images and descriptions
- **Structured data** for search engines
- **Performance optimized** with Next.js
- **Accessibility** compliant

## 🔧 Development

### Adding New Sections
1. Create a new section in `page.tsx`
2. Add navigation link in the header
3. Update scroll tracking if needed
4. Style with Tailwind classes

### Custom Components
For reusable components, create them in a `components/` directory:

```typescript
// components/Button.tsx
export default function Button({ children, ...props }) {
  return (
    <button 
      className="bg-[#D2691E] text-white px-6 py-3 rounded-full hover:bg-[#B85A1A] transition-colors"
      {...props}
    >
      {children}
    </button>
  );
}
```

## 📞 Support

For questions or support, please contact:
- **Email:** info@dreamyardstudio.com
- **Phone:** (555) 123-4567

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Built with ❤️ for American homeowners who dream of beautiful outdoor spaces.**
