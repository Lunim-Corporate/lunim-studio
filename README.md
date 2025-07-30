# Lunim - Modern React Website

A modern, responsive React website built with TypeScript, Tailwind CSS, and React Router. Features a sleek black header with cyan accents and a professional multi-page layout.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Components Documentation](#components-documentation)
- [Pages Documentation](#pages-documentation)
- [Styling Guide](#styling-guide)
- [Design System](#design-system)
- [Development Guidelines](#development-guidelines)
- [Deployment](#deployment)

## 🎯 Project Overview

This is a modern business website template featuring:

- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Dark Theme**: Professional black header with cyan accent colors
- **Modern Navigation**: Fixed header with smooth transitions and active states
- **Multi-page Layout**: Home, Packages, Expertise, About, and Contact pages
- **Professional UI**: Clean, production-ready design with hover effects

## 🛠 Tech Stack

### Core Technologies
- **React 18.3.1** - Modern React with hooks and functional components
- **TypeScript 5.5.3** - Type-safe JavaScript development
- **Vite 5.4.2** - Fast build tool and development server
- **React Router DOM 7.6.3** - Client-side routing

### Styling & UI
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Lucide React 0.344.0** - Modern icon library
- **PostCSS & Autoprefixer** - CSS processing

### Development Tools
- **ESLint** - Code linting with React-specific rules
- **TypeScript ESLint** - TypeScript-specific linting rules

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   └── Header.tsx       # Main navigation header
├── pages/               # Page components
│   ├── Home.tsx         # Landing page
│   ├── Packages.tsx     # Pricing/packages page
│   ├── Expertise.tsx    # Services/expertise page
│   ├── About.tsx        # About us page
│   └── Contact.tsx      # Contact form page
├── App.tsx              # Main app component with routing
├── main.tsx             # Application entry point
├── index.css            # Global styles and Tailwind imports
└── vite-env.d.ts        # Vite type definitions
```

## 🧩 Components Documentation

### Header Component (`src/components/Header.tsx`)

The main navigation component featuring a fixed black header with responsive design.

#### Features
- **Fixed Position**: Stays at top during scroll
- **Responsive Navigation**: Hamburger menu on mobile
- **Active State Indicators**: Cyan underline for current page
- **Image Logo**: Professional logo with rounded corners
- **Smooth Animations**: Hover effects and transitions

#### Props
- No external props (uses React Router's `useLocation` internally)

#### Styling Classes
```css
/* Header Background */
bg-black/95 backdrop-blur-md border-b border-gray-800

/* Navigation Links */
text-white hover:text-cyan-400

/* Active State */
text-cyan-400 (with animated underline)

/* CTA Button */
bg-cyan-400 text-gray-900 hover:bg-cyan-300
```

#### Mobile Responsiveness
- Hidden desktop nav on screens < 768px
- Hamburger menu with slide-down animation
- Full-width mobile navigation panel

## 📄 Pages Documentation

### Home Page (`src/pages/Home.tsx`)

**Purpose**: Landing page with hero section and call-to-action buttons

**Key Features**:
- Gradient background (`from-gray-900 via-gray-800 to-black`)
- Large hero heading with gradient text effect
- Dual CTA buttons (primary and secondary)
- Responsive typography scaling

**Design Elements**:
- Gradient text: `bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent`
- Button styles: Primary (cyan) and outline (cyan border)

### Packages Page (`src/pages/Packages.tsx`)

**Purpose**: Pricing tiers and service packages

**Key Features**:
- Three-column pricing grid
- Hover effects on pricing cards
- Dynamic pricing calculation
- Responsive card layout

**Design Pattern**:
```tsx
// Pricing card structure
<div className="bg-gray-800 rounded-lg p-8 border border-gray-700 hover:border-cyan-400">
  <h3 className="text-2xl font-bold text-cyan-400">{plan}</h3>
  <div className="text-3xl font-bold">${price}</div>
  <button className="w-full bg-cyan-400 text-gray-900">Choose Plan</button>
</div>
```

### Expertise Page (`src/pages/Expertise.tsx`)

**Purpose**: Showcase services and technical capabilities

**Key Features**:
- Service cards with icons from Lucide React
- 4-column responsive grid (collapses to 1-2 columns on mobile)
- Hover animations with scale transform
- Icon integration with consistent styling

**Service Card Pattern**:
```tsx
<div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-200 hover:transform hover:scale-105">
  <div className="text-cyan-400 mb-4">{icon}</div>
  <h3 className="text-xl font-bold mb-3">{title}</h3>
  <p className="text-gray-300">{description}</p>
</div>
```

### About Page (`src/pages/About.tsx`)

**Purpose**: Company information and statistics

**Key Features**:
- Two-column layout with story and mission
- Statistics cards with key metrics
- Responsive grid system
- Professional content structure

**Statistics Display**:
```tsx
<div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
  <div className="text-2xl font-bold text-cyan-400">{number}</div>
  <div className="text-gray-300">{label}</div>
</div>
```

### Contact Page (`src/pages/Contact.tsx`)

**Purpose**: Contact information and inquiry form

**Key Features**:
- Contact information with icons
- Functional contact form with state management
- Form validation (HTML5 required attributes)
- Responsive two-column layout

**Form Implementation**:
```tsx
const [formData, setFormData] = useState({
  name: '', email: '', subject: '', message: ''
});

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  console.log('Form submitted:', formData);
};
```

## 🎨 Styling Guide

### Color Palette

```css
/* Primary Colors */
--primary-bg: #111827;      /* gray-900 */
--secondary-bg: #1f2937;    /* gray-800 */
--accent: #22d3ee;          /* cyan-400 */

/* Text Colors */
--text-primary: #ffffff;    /* white */
--text-secondary: #d1d5db;  /* gray-300 */
--text-muted: #9ca3af;      /* gray-400 */

/* Border Colors */
--border-primary: #374151;  /* gray-700 */
--border-secondary: #4b5563; /* gray-600 */
```

### Typography Scale

```css
/* Headings */
.text-4xl { font-size: 2.25rem; }  /* 36px */
.text-5xl { font-size: 3rem; }     /* 48px */
.text-6xl { font-size: 3.75rem; }  /* 60px */

/* Body Text */
.text-base { font-size: 1rem; }    /* 16px */
.text-lg { font-size: 1.125rem; }  /* 18px */
.text-xl { font-size: 1.25rem; }   /* 20px */
.text-2xl { font-size: 1.5rem; }   /* 24px */
```

### Spacing System

```css
/* Padding/Margin Scale (based on 0.25rem = 4px) */
.p-4 { padding: 1rem; }      /* 16px */
.p-6 { padding: 1.5rem; }    /* 24px */
.p-8 { padding: 2rem; }      /* 32px */
.py-3 { padding: 0.75rem 0; } /* 12px vertical */
.px-4 { padding: 0 1rem; }   /* 16px horizontal */
```

## 🎯 Design System

### Component Patterns

#### Card Component Pattern
```tsx
<div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-200">
  {/* Card content */}
</div>
```

#### Button Patterns
```tsx
// Primary Button
<button className="bg-cyan-400 text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-cyan-300 transition-all duration-200">

// Secondary Button  
<button className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-full font-medium hover:bg-cyan-400 hover:text-gray-900 transition-all duration-200">
```

#### Form Input Pattern
```tsx
<input className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white" />
```

### Animation Guidelines

#### Transition Durations
- **Fast interactions**: `duration-200` (200ms) - hover states, button clicks
- **Medium transitions**: `duration-300` (300ms) - page transitions, modals
- **Slow animations**: `duration-500` (500ms) - complex state changes

#### Transform Effects
```css
/* Hover scale effect */
.hover\:scale-105:hover { transform: scale(1.05); }

/* Smooth transitions */
.transition-all { transition-property: all; }
.transition-colors { transition-property: color, background-color, border-color; }
```

## 🔧 Development Guidelines

### Code Organization

1. **Component Structure**: Each component in its own file with TypeScript interfaces
2. **Consistent Naming**: PascalCase for components, camelCase for functions/variables
3. **Import Organization**: External libraries first, then internal imports

### TypeScript Best Practices

```tsx
// Component props interface
interface HeaderProps {
  
}

// Component with proper typing
const Header: React.FC<HeaderProps> = () => {
  // Component logic
};
```

### Responsive Design Breakpoints

```css
/* Tailwind CSS Breakpoints */
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X large devices */
```

### Performance Considerations

1. **Code Splitting**: Each page is a separate component for automatic code splitting
2. **Image Optimization**: Using external CDN images (Pexels) for better performance
3. **CSS Purging**: Tailwind automatically removes unused CSS in production
4. **Bundle Optimization**: Vite handles modern bundling and tree-shaking

## 🚀 Deployment

### Build Process

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

### Build Output
- **dist/**: Contains optimized production files
- **assets/**: Bundled and minified CSS/JS files
- **index.html**: Entry point with asset references

### Deployment Platforms

This project can be deployed to:
- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect GitHub repository for automatic deployments
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **Traditional hosting**: Upload `dist` folder contents to web server

### Environment Variables

Currently no environment variables are required, but you can add them in:
- `.env.local` for local development
- Platform-specific environment variable settings for production

## 📝 Customization Guide

### Changing Colors

1. **Update Tailwind Config**: Modify `tailwind.config.js` for custom colors
2. **CSS Variables**: Define custom properties in `src/index.css`
3. **Component Updates**: Update className strings throughout components

### Adding New Pages

1. Create new component in `src/pages/`
2. Add route to `src/App.tsx`
3. Update navigation in `src/components/Header.tsx`

### Modifying Layout

- **Header**: Edit `src/components/Header.tsx`
- **Global Styles**: Modify `src/index.css`
- **Page Layouts**: Update individual page components

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**: Check TypeScript types and imports
2. **Styling Issues**: Verify Tailwind class names and responsive breakpoints
3. **Routing Problems**: Ensure React Router setup is correct

### Development Server Issues

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
