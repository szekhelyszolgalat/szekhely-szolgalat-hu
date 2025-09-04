# SzékhelySzolgálat.Net - SEO Satellite Site

A static SEO-optimized satellite website built with Astro to support the main SzékhelySzolgálat.Net business, focusing on driving qualified traffic and improving search engine visibility for registered office services in Budapest's District V.

## 🎯 Project Overview

This satellite site was designed with the following key principles:
- **Zero-maintenance content**: All content is static and evergreen
- **SEO-focused architecture**: Optimized for Hungarian keywords and local search
- **Lead generation**: Directs qualified prospects to the main site
- **Brand consistency**: Matches the main site's visual design and messaging
- **Performance-first**: Built for speed and Core Web Vitals compliance

## 🏗️ Architecture & Design Decisions

### Why Astro?
- **Static Generation**: Perfect for maintenance-free satellite sites
- **SEO Performance**: Excellent Core Web Vitals and loading speeds
- **Component Architecture**: Reusable components with minimal JavaScript
- **Hungarian Content**: Full support for Hungarian language and characters

### Design System
- **Visual Consistency**: Matches main site's Mobirise-based design
- **Color Palette**: Primary blue (#22A5E5) from main SzékhelySzolgálat.Net site
- **Typography**: Roboto font family for professional appearance
- **Responsive Design**: Mobile-first Bootstrap-inspired layout

### Content Strategy
- **No Pricing Information**: All pricing details redirect to main site
- **Evergreen Content**: Static content that doesn't require updates
- **SEO-Optimized**: Targets Hungarian székhelyszolgáltatás keywords
- **Lead Funnel**: Strategic CTAs directing traffic to main site

## Implementation Steps

- Make a kick-off document with Claude Desktop, describe the project and prompt it to craft a project kick-off document for Claude Code
- Place the document in the empty repo
- Launch Claude Code, __/init__ it, explain the dev env, explain that it is deployed to github pages, explain to use Astro, Tailwind, etc. whatever you want, make it read up the files.
- Usually with that Claude Code gets in context about the project so just give out a **GO and implement!**
- Check for mistakes, hallucinations, adjust with new prompts.
- Commit, push, enjoy.
- Set up the repository in Github Actions for deployment. Usually by mentioning Github Pages, Claude will create the __deploy.yml__ . Check if branch names, etc. exist. 
 

## 🚀 Project Structure

```text
/
├── public/
│   ├── favicon.ico
│   ├── images/               # Optimized images
│   │   ├── hero-bg.jpg
│   │   ├── services/
│   │   └── budapest/
│   └── robots.txt           # SEO configuration
├── src/
│   ├── components/
│   │   ├── Layout.astro     # Main layout template
│   │   ├── Header.astro     # Navigation matching main site
│   │   ├── Footer.astro     # Company info and links
│   │   ├── ServiceCard.astro # Service display (no pricing)
│   │   ├── ContactForm.astro # Lead capture form
│   │   ├── TrustSignals.astro # Experience and guarantees
│   │   └── LocationBenefits.astro # V. district advantages
│   ├── pages/
│   │   ├── index.astro      # Homepage
│   │   ├── szolgaltatasok.astro # Services overview
│   │   ├── miert-valasszon-minket.astro # Why choose us
│   │   ├── v-keruleti-elonyok.astro # District V benefits
│   │   ├── gyik.astro       # Static FAQ
│   │   ├── kapcsolat.astro  # Contact page
│   │   └── rolunk.astro     # About us
│   ├── styles/
│   │   └── global.css       # Main styles matching main site
│   └── layouts/
│       └── Layout.astro     # Base layout
├── astro.config.mjs         # Astro configuration
├── package.json
└── README.md
```

## 🎨 Design Implementation

### Color Scheme
```css
:root {
  --primary-blue: #22A5E5;    /* Main brand color from main site */
  --text-dark: #333333;       /* Primary text color */
  --text-light: #666666;      /* Secondary text color */
  --background: #FFFFFF;      /* Clean background */
  --accent: #F8F9FA;          /* Light section backgrounds */
}
```

### Typography
- **Primary Font**: Roboto (Google Fonts)
- **Font Weights**: 300, 400, 500, 700
- **Hierarchy**: Professional, clean sans-serif approach

### Key Components
- **Header**: Fixed navigation with logo and contact info
- **Hero Section**: Compelling value proposition without pricing
- **Service Cards**: Feature-focused service presentation
- **Trust Signals**: 10+ years experience, professional location
- **Contact Forms**: Lead capture directing to main site

## 🔧 Development Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation
```bash
# Clone the repository
git clone [repository-url]
cd szekhelyszolgalat-satellite

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`     |
| `npm run build`           | Build production site to `./dist/`              |
| `npm run preview`         | Preview build locally, before deploying         |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## 📈 SEO Implementation

### Target Keywords (Hungarian)
- **Primary**: székhelyszolgáltatás budapest, székhelyszolgáltatás 5. kerület
- **Secondary**: székhelyszolgáltató belváros, címszolgáltatás budapest
- **Long-tail**: professzionális székhelyszolgáltatás budapest központ

### Technical SEO Features
- **Meta Tags**: Hungarian language optimized titles and descriptions
- **Structured Data**: LocalBusiness, Organization, and Service schemas
- **Sitemap**: Automatic generation for all pages
- **Robots.txt**: SEO-friendly crawling guidelines
- **Hungarian URLs**: Clean, keyword-optimized Hungarian slugs

### Performance Optimizations
- **Image Optimization**: WebP format with fallbacks
- **Minimal JavaScript**: Static generation with minimal client-side JS
- **CSS Optimization**: Critical CSS inlined, non-critical deferred
- **Font Loading**: Optimized Google Fonts loading strategy

## 🔗 Integration with Main Site

### Lead Generation Flow
1. **Traffic Acquisition**: SEO drives traffic to satellite site
2. **Information Gathering**: Visitors learn about services (no pricing)
3. **Interest Development**: Trust signals and location benefits
4. **Conversion Direction**: CTAs direct to main site for pricing/contracts

### Key Integration Points
- **Contact Forms**: Send leads directly to main site's system
- **Pricing Links**: "További információ" buttons → main site pricing page
- **Phone/Email**: Direct contact options prominently displayed
- **Contract Process**: Links to main site's online contract system

## 🛡️ Maintenance Guidelines

### Zero-Maintenance Design
This site was built to require **no ongoing content maintenance**:

- **Static Content**: All text is evergreen and won't need updates
- **No Dynamic Pricing**: Pricing changes on main site don't affect satellite
- **No Blog System**: No content creation requirements
- **No Customer Data**: Simple lead forms, no complex data management

### What Requires Updates (Rare)
- **Contact Information**: Only if company contact details change
- **Legal Requirements**: Only if legal compliance requires content changes
- **Broken Links**: If main site structure changes significantly

### Monitoring Recommendations
- **Google Analytics**: Track traffic and conversions
- **Search Console**: Monitor keyword rankings and technical issues
- **Site Speed**: Quarterly performance checks
- **Lead Quality**: Monitor conversion rates to main site

## 🚨 Important Maintenance Notes

### DO NOT Update
- ❌ **Pricing Information**: Keep all pricing references off satellite site
- ❌ **Specific Dates**: Avoid time-sensitive content that expires
- ❌ **Dynamic Content**: Don't add blogs, news, or frequently changing content
- ❌ **Complex Features**: Avoid features requiring ongoing maintenance

### Safe to Update
- ✅ **Contact Information**: If company details change
- ✅ **Service Descriptions**: General improvements to service explanations
- ✅ **SEO Meta Tags**: Keyword optimization improvements
- ✅ **Performance Optimizations**: Technical improvements

## 📊 Success Metrics

### Primary KPIs
- **Organic Traffic Growth**: Month-over-month search traffic increases
- **Keyword Rankings**: Position improvements for target Hungarian keywords
- **Lead Generation**: Contact form submissions and phone calls from satellite
- **Main Site Referrals**: Traffic quality directing to main site

### Technical Metrics
- **Core Web Vitals**: Maintain 95+ scores on all metrics
- **Page Speed**: Sub 2-second loading times
- **SEO Score**: 95+ technical SEO score
- **Mobile Performance**: Optimal mobile user experience

## 🌍 Deployment

### Production Deployment
```bash
# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy to hosting platform
# (Upload contents of ./dist/ folder)
```

### Hosting Recommendations
- **Static Hosting**: Netlify, Vercel, or similar static site hosts
- **CDN**: Ensure global CDN for performance
- **HTTPS**: SSL certificate required for professional appearance
- **Custom Domain**: Use subdomain of main site (e.g., info.szekhelyszolgalat.net)

## 🤝 Contributing

### Development Guidelines
1. **Brand Consistency**: Always match main site's visual design
2. **Content Philosophy**: Keep all content maintenance-free and evergreen
3. **SEO Focus**: Every change should consider Hungarian keyword optimization
4. **Performance First**: Maintain excellent Core Web Vitals scores
5. **Lead Generation**: Ensure all CTAs direct appropriately to main site

### Code Standards
- **Hungarian Comments**: Use Hungarian for content-related comments
- **Component Naming**: Clear, descriptive component names
- **CSS Organization**: Follow BEM methodology for maintainable styles
- **Image Optimization**: Always use optimized images with alt text

## 📞 Support & Contact

For technical issues or questions about this satellite site:
- **Main Site**: [szekhelyszolgalat.net](https://szekhelyszolgalat.net)
---

**Built with ❤️ using Astro** | **Optimized for Hungarian SEO** | **Zero-maintenance design**