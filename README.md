# vidyutshakti
# Vidyut Shakti - PM Surya Ghar Muft Bijli Yojana Website

A responsive, modern website for Vidyut Shakti - an authorized vendor of MNRE & TPWODL for the PM Surya Ghar Muft Bijli Yojana scheme.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

## 🎯 Overview

This website serves as a digital platform for Vidyut Shakti to showcase their services as an authorized vendor for the PM Surya Ghar Muft Bijli Yojana (Free Electricity Scheme). The website provides comprehensive information about solar power benefits, government subsidies, and facilitates customer inquiries and applications.

## ✨ Features

### 🎨 Design & User Experience
- **Responsive Design**: Fully responsive layout that works on all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean, professional design with intuitive navigation
- **Accessibility**: WCAG compliant color contrast and semantic HTML structure
- **Fast Loading**: Optimized images and efficient code for quick page loads

### 📱 Core Sections
1. **Home/Hero Section** - Compelling introduction with clear call-to-action buttons
2. **Benefits Section** - Showcases key advantages of solar power adoption
3. **Subsidy Information** - Detailed breakdown of central and state government subsidies
4. **Gallery** - Interactive showcase of installation projects with filtering capabilities
5. **Contact Form** - Lead generation form with validation
6. **Partners Section** - Displays authorized partnerships (MNRE, TPWODL)

### 🛠 Technical Features
- **Mobile-First Approach**: Responsive design that works seamlessly across devices
- **Interactive Gallery**: Filterable image/video gallery with lightbox functionality
- **Form Validation**: Client-side form validation with user-friendly error handling
- **Smooth Animations**: CSS transitions and hover effects for enhanced user experience
- **SEO Optimized**: Proper meta tags, semantic HTML, and structured data

## 📁 Project Structure

```
vidyut-shakti-website/
│
├── index.html                 # Main HTML file
├── README.md                  # Project documentation (this file)
├── assets/                    # Static assets directory
│   ├── images/               # Image files
│   │   ├── logo.png          # Company logo
│   │   ├── hero-bg.jpg       # Hero section background
│   │   └── gallery/          # Gallery images
│   ├── videos/               # Video files for gallery
│   └── icons/                # Favicon and other icons
└── documentation/            # Additional documentation
    └── deployment-guide.md   # Deployment instructions
```

## 🚀 Installation

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic text editor (VS Code, Sublime Text, etc.)
- Local server for development (optional)

### Quick Start
1. **Clone or Download the Repository**
   ```bash
   git clone https://github.com/your-username/vidyut-shakti-website.git
   cd vidyut-shakti-website
   ```

2. **Open the Website**
   - Simply open `index.html` in your web browser, or
   - Use a local server for better development experience

### Using Local Server (Recommended)
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 🎨 Customization

### 🔧 Basic Customizations

#### 1. Company Information
Update the following sections in `index.html`:

**Contact Information:**
```html
<!-- Update in Contact Section -->
<p>+91-YOUR-PHONE-NUMBER</p>
<p>your-email@company.com</p>
<p>Your Company Address</p>
```

**Social Media Links:**
```html
<!-- Update social media URLs -->
<a href="https://facebook.com/yourpage"><i class="fab fa-facebook-f"></i></a>
<a href="https://twitter.com/yourhandle"><i class="fab fa-twitter"></i></a>
```

#### 2. Color Scheme
Modify CSS variables in the `:root` selector:
```css
:root {
    --primary: #ff9800;    /* Main brand color */
    --secondary: #2196f3;  /* Secondary color */
    --accent: #4caf50;     /* Accent color */
    --dark: #333333;       /* Text color */
    --light: #f5f5f5;      /* Background color */
}
```

#### 3. Content Updates
- **Hero Section**: Update tagline and main heading
- **Benefits**: Modify service offerings and features
- **Subsidy**: Update subsidy amounts as per current schemes
- **Gallery**: Add your actual project images and videos

### 🖼 Adding Your Logo

1. **Prepare Your Logo**:
   - Recommended format: PNG with transparent background
   - Optimal size: 120px × 120px (will be scaled to 60px height)
   - File name: `logo.png`

2. **Replace Logo**:
   - Place your logo file in the `assets/images/` directory
   - Update the logo `src` attribute in both header and footer:
   ```html
   <img src="assets/images/your-logo.png" alt="Vidyut Shakti Logo" class="company-logo">
   ```

### 🎬 Adding Gallery Content

#### Adding Images:
1. Place images in `assets/images/gallery/` directory
2. Update gallery items in the HTML:
```html
<div class="gallery-item" data-category="residential">
    <img src="assets/images/gallery/your-image.jpg" alt="Project Description">
    <div class="gallery-type">Residential</div>
    <div class="gallery-overlay">
        <h3>Project Title</h3>
        <p>Location - Additional details</p>
    </div>
</div>
```

#### Adding Videos:
1. Place videos in `assets/videos/` directory
2. Update video sources:
```html
<video muted>
    <source src="assets/videos/your-video.mp4" type="video/mp4">
</video>
```

## 🌐 Deployment

### Option 1: Static Hosting (Recommended)
1. **Netlify**:
   - Drag and drop the project folder to Netlify
   - Or connect your GitHub repository for automatic deployments

2. **Vercel**:
   - Import your GitHub repository
   - Deploy with zero configuration

3. **GitHub Pages**:
   - Push code to GitHub repository
   - Enable GitHub Pages in repository settings

### Option 2: Traditional Web Hosting
1. Upload all files to your web server via FTP/SFTP
2. Ensure the server supports static HTML files
3. Update DNS settings if using a custom domain

### Deployment Checklist
- [ ] Test all links and forms
- [ ] Verify responsive design on multiple devices
- [ ] Check loading speed and optimize images
- [ ] Update contact information and social media links
- [ ] Test form submission functionality
- [ ] Verify SEO meta tags
- [ ] Check browser compatibility

## 🤝 Contributing

We welcome contributions to improve the website! Here's how you can help:

### Reporting Issues
1. Check existing issues to avoid duplicates
2. Use the issue template to provide detailed information
3. Include browser/device information for bug reports

### Suggesting Enhancements
1. Open an issue with the "enhancement" label
2. Describe the feature and its benefits
3. Provide examples or references if possible

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Standards
- Use semantic HTML5 elements
- Follow CSS naming conventions
- Ensure responsive design principles
- Maintain accessibility standards

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- 📧 Email: info@vidyutshakti.com
- 📞 Phone: +91-XXXXX-XXXXX
- 🐛 [Create an Issue](https://github.com/your-username/vidyut-shakti-website/issues) on GitHub

## 🔄 Update Log

### v1.0.0 (Initial Release)
- Complete website with all core sections
- Responsive design implementation
- Interactive gallery with lightbox
- Contact form with validation
- SEO optimization

## 🙏 Acknowledgments

- Icons by [Font Awesome](https://fontawesome.com)
- placeholder images from [Unsplash](https://unsplash.com)
- placeholder videos from [Mixkit](https://mixkit.co)
- Inspiration from modern web design trends

---

**Note**: This website is built with pure HTML, CSS, and JavaScript - no frameworks or build processes required. It's designed to be easy to customize and deploy while maintaining high performance and accessibility standards.

For the latest updates and documentation, always refer to the [GitHub repository](https://github.com/your-username/vidyut-shakti-website).
