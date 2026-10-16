# Boya Ajay Varma — Portfolio Website

A modern, minimalist, recruiter-optimized portfolio website built with **React**, **Vite**, and **Tailwind CSS**. Designed specifically for an **AI & Backend Engineer** targeting product teams and high-impact software engineering roles.

---

## ⚡ Quick Start (Run Locally)

1. **Install dependencies** (already done if in this repository):
   ```bash
   npm install
   ```

2. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173`.

3. **Build for production**:
   ```bash
   npm run build
   ```

---

## 🛠️ How to Customize Your Portfolio

All your personal details, projects, skills, and links live in **one single file**:
📁 `src/data/portfolioData.js`

### 1. Adding or Updating Projects
Open `src/data/portfolioData.js` and edit the `featuredProjects` array:
```javascript
{
  id: "new-project",
  title: "My New Distributed Agent",
  category: "GenAI / Backend",
  badge: "Production Ready",
  badgeColor: "emerald", // 'emerald' | 'blue' | 'purple' | 'amber'
  description: "Short impact-focused summary...",
  tech: ["Python", "LangGraph", "Docker", "PostgreSQL"],
  github: "https://github.com/ajayvarmaboya/new-project",
  liveDemo: "https://demo.com",
  highlights: [
    "Key architectural achievement 1",
    "Key performance metric 2"
  ]
}
```

### 2. Adding Your LinkedIn Profile Once Restored
In `src/data/portfolioData.js`, change:
```javascript
// From:
linkedin: null,

// To:
linkedin: "https://www.linkedin.com/in/ajayvarmaboya",
```
The LinkedIn link will automatically appear in your navigation bar and footer!

### 3. Adding Your PDF Resume
Drop your updated resume into the `public/` folder and name it:
```
public/resume.pdf
```
The **"Download Resume"** button on the website will automatically serve this file.

### 4. Changing Your Profile Photo
* By default, the website pulls your live avatar directly from GitHub: `https://github.com/ajayvarmaboya.png`.
* To use a custom photo, place your image into `public/photo.jpg` and in `src/data/portfolioData.js` change:
  ```javascript
  avatarUrl: "/photo.jpg",
  ```
* If no photo is provided, it gracefully falls back to the minimalist **AV** monogram badge.

---

## 🚀 How to Deploy Live (100% Free)

### Option A: Deploy to Vercel (Recommended — Takes 2 Minutes)
1. Push this folder to a new GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of portfolio"
   git branch -M main
   git remote add origin https://github.com/ajayvarmaboya/portfolio.git
   git push -u origin main
   ```
2. Go to **[vercel.com](https://vercel.com)** and sign in with GitHub.
3. Click **"Add New Project"** and select your `portfolio` repository.
4. Click **Deploy**. Vercel will build and host your site with free HTTPS in ~30 seconds!
5. Any time you push a change to GitHub, Vercel will redeploy automatically.

### Option B: Deploy to Netlify
1. Go to **[netlify.com](https://netlify.com)** and sign in with GitHub.
2. Select your repository, leave build command as `npm run build` and publish directory as `dist`.
3. Click **Deploy Site**.
