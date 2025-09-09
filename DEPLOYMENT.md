# Vercel Deployment Guide

## 🚀 Deploy to Vercel

Your Next.js portfolio is fully optimized for Vercel deployment! Here are multiple ways to deploy:

### Method 1: Vercel CLI (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy from your project directory:**
   ```bash
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? **Y**
   - Which scope? **Your account**
   - Link to existing project? **N**
   - Project name: **alvin-tran-portfolio** (or your preference)
   - Directory: **./** (current directory)
   - Override settings? **N**

### Method 2: GitHub Integration

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

### Method 3: Drag & Drop

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Go to Vercel Dashboard:**
   - Visit [vercel.com](https://vercel.com)
   - Drag and drop your project folder

## ⚡ Vercel Optimizations Included

- **Automatic HTTPS** - SSL certificates
- **Global CDN** - Fast loading worldwide
- **Serverless Functions** - Automatic scaling
- **Preview Deployments** - Test before going live
- **Custom Domains** - Add your own domain
- **Analytics** - Built-in performance monitoring

## 🔧 Environment Variables

If you need environment variables, add them in:
- Vercel Dashboard → Project Settings → Environment Variables
- Or create `.env.local` for local development

## 📊 Performance Features

- **Image Optimization** - Automatic image compression
- **Code Splitting** - Faster page loads
- **Static Generation** - Pre-rendered pages
- **Edge Functions** - Global edge computing

## 🌐 Custom Domain

1. **Add domain in Vercel:**
   - Project Settings → Domains
   - Add your custom domain

2. **Update DNS:**
   - Point your domain to Vercel's servers
   - Vercel provides DNS instructions

## 🚀 Deployment Commands

```bash
# Deploy to production
vercel --prod

# Deploy preview
vercel

# Check deployment status
vercel ls

# View logs
vercel logs
```

Your portfolio will be live at: `https://your-project-name.vercel.app`
