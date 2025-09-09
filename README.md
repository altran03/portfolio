# Alvin Tran - Portfolio

A modern, responsive portfolio website built with React.js, featuring a clean design similar to Nathan Tran's portfolio.

## Features

- **Home Page**: About me section with call-to-action to view portfolio
- **Portfolio Page**: Showcase of projects with descriptions, technologies, and links
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Social Links**: Footer with links to GitHub, LinkedIn, Twitter, and Email

## Technologies Used

- React.js 18
- React Router for navigation
- CSS3 with Flexbox and Grid
- Font Awesome icons
- Google Fonts (Inter)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── components/
│   ├── Home.js          # Home page component
│   ├── Home.css         # Home page styles
│   ├── Portfolio.js     # Portfolio page component
│   ├── Portfolio.css    # Portfolio page styles
│   ├── Footer.js        # Footer component
│   └── Footer.css       # Footer styles
├── App.js               # Main app component with routing
├── App.css              # Global app styles
├── index.js             # React entry point
└── index.css            # Global styles
```

## Customization

To customize the portfolio for your own use:

1. Update personal information in `src/components/Home.js`
2. Modify project data in `src/components/Portfolio.js`
3. Update social links in `src/components/Footer.js`
4. Customize colors and fonts in the CSS files
5. Replace placeholder images with your own project screenshots

## Deployment

Build the project for production:

```bash
npm run build
```

The build folder will contain the optimized production build ready for deployment to any static hosting service.
