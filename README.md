# Portfolio Landing Page

A sleek, modern landing page for a UX Designer portfolio, inspired by contemporary design trends and best practices.

## Features

- **Modern Design**: Clean, minimalist design with generous whitespace
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Subtle fade-in animations and smooth scrolling
- **Interactive Elements**: Hover effects, form validation, and dynamic navigation
- **Performance Optimized**: Lightweight and fast-loading

## Structure

```
Portfolio website/
├── index.html      # Main HTML structure
├── styles.css      # All styling and responsive design
├── script.js       # Interactive features and animations
└── README.md       # This file
```

## Getting Started

1. **Open the website**: Simply open `index.html` in your web browser
   - Double-click the file, or
   - Right-click and select "Open with" your preferred browser

2. **Local Development Server** (recommended):
   ```bash
   # Using Python 3
   python3 -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   
   # Then visit http://localhost:8000
   ```

## Customization

### Update Your Information

1. **Hero Section** (`index.html`):
   - Update the hero title and subtitle
   - Modify the badge text

2. **Projects** (`index.html`):
   - Replace project placeholders with your actual projects
   - Add project images (replace the placeholder divs)
   - Update project titles, descriptions, and tags

3. **About Section** (`index.html`):
   - Update the about description
   - Modify skills list to match your expertise

4. **Contact Section** (`index.html`):
   - Update email address
   - Add your social media links
   - Configure form submission (currently shows a demo message)

### Styling

- **Colors**: Modify CSS variables in `styles.css` (lines 5-12)
- **Typography**: Change the font family in the `:root` section
- **Spacing**: Adjust spacing variables for different layouts

### Form Submission

The contact form currently shows a demo message. To enable actual form submission:

1. Set up a backend service (e.g., Formspree, Netlify Forms, or your own API)
2. Update the form submission handler in `script.js` (around line 100)
3. Replace the simulated submission with actual API calls

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Tips

- Optimize images before adding them to project cards
- Consider lazy loading for images
- Minify CSS and JavaScript for production
- Use a CDN for fonts if needed

## Next Steps

1. Add your actual project images and content
2. Set up form submission backend
3. Add Google Analytics or other tracking (if needed)
4. Deploy to a hosting service (Netlify, Vercel, GitHub Pages, etc.)

## License

This project is open source and available for personal use.

