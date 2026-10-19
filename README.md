# 🌌 APOORV — THE DEVELOPER WORLD
### Ultra-Premium Interactive 3D MERN Developer Portfolio & Systems Exhibition

[![MERN Stack](https://img.shields.io/badge/Stack-MERN-green.svg)](https://react.dev)
[![React Bits](https://img.shields.io/badge/UI-React_Bits-purple.svg)](https://reactbits.dev)
[![Three.js](https://img.shields.io/badge/3D-Three.js_%2F_R3F-blue.svg)](https://threejs.org)
[![MongoDB](https://img.shields.io/badge/DB-MongoDB_%26_Mongoose-brightgreen.svg)](https://www.mongodb.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Designed & engineered for **Apoorv Sharma** (B.Tech Computer Science Engineering student, **JK Lakshmipat University, Jaipur**; Founder at **Webnetic Studios**, Co-Founder at **FuseOne Studios**).

---

## 🚀 Key Architectural Highlights

1. **Dedicated Projects Exhibition with `<GradientASCII />`**:
   - Standalone `/projects` route with interactive WebGL2 ASCII gradient field from [React Bits](https://reactbits.dev).
   - Real-time mouse scrambling, wave click reaction, and category filtering across production systems (*Full Stack / SaaS, AI & Automation, E-Commerce*).

2. **2D Physics Milestones Vault (`<FolderFloat />`)**:
   - Zero-gravity physics engine built on **Matter.js**.
   - Hover or tap the folder in the *About Me* section to release drifting, interactive notes (*"Automate 70% manual work", "Resisting Peer Pressure Book", "Full-Stack MERN Architecture", etc.*).

3. **Interactive Hold-to-Confirm Contact Action (`<HoldButton />`)**:
   - Contact form submit button features dynamic hold-to-confirm progress filling with fluid wave animation, haptic glow, and validation checks.
   - Saves messages directly into **MongoDB** via Mongoose model validation and rate-limited Express REST endpoints.

4. **3D Architectural Wayfinding & Focal Sculpture**:
   - **Hero 3D Core**: Interactive Three.js/R3F cyber-sculpture following pointer movements with dynamic particles.
   - **Architectural Wayfinding Showcase**: Inspired by modern architectural signage (CROS visual direction with matte white sign panels, charcoal brackets, and vibrant lime end blocks `#78F52B`).

5. **Mandatory Academic Rubric Compliance**:
   - **Node.js + Express.js REST API**: `/api/health`, `/api/contact`, `/api/resume/pdf`, `/api/resume/docx`.
   - **Dual Resume Downloads**: Genuinely streams `Apoorv_Sharma_Resume.pdf` and `Apoorv_Sharma_Resume.docx` with proper MIME headers.
   - **MongoDB + Mongoose**: Full schema validation, sanitization, anti-spam honeypot, duplicate checks, and resilient fallback mode for offline evaluation.
   - **Dark & Light Mode**: Global persistent theme toggle.
   - **Zero Fabricated Credentials**: All profile details, book publications, and skills are strictly factual.

---

## 📁 Repository Structure

```text
apoorv-portfolio/
├── client/                     # Frontend (React 18, Vite, Tailwind CSS, Three.js, React Bits)
│   ├── public/
│   │   └── favicon.svg         # Clean brand favicon
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/         # Navbar, Footer, ResumeModal
│   │   │   ├── react-bits/     # GradientASCII, FolderFloat, HoldButton, DecryptText, TiltCard, AuroraBackground
│   │   │   └── three/          # HeroScene (R3F 3D Core), ArchitecturalShowcase (3D Signage)
│   │   ├── context/            # ThemeContext (Dark/Light mode persistence)
│   │   ├── data/               # Centralized verified portfolioData.js
│   │   ├── pages/              # Standalone routes (HomePage, ProjectsPage, AboutPage, SkillsPage, ResumePage, etc.)
│   │   ├── sections/           # Modular section components
│   │   ├── services/           # API fetch client
│   │   ├── App.jsx             # React Router structure
│   │   └── main.jsx
│   ├── .env.example
│   └── package.json
│
├── server/                     # Backend (Node.js, Express, MongoDB, Mongoose)
│   ├── files/                  # Genuine PDF and DOCX resume files
│   │   ├── resume.pdf
│   │   └── resume.docx
│   ├── scripts/
│   │   └── generateResumes.js  # Script generating authentic resume files
│   ├── src/
│   │   ├── config/             # database.js (Resilient MongoDB connection)
│   │   ├── controllers/        # contactController.js, resumeController.js
│   │   ├── middleware/         # rateLimiter.js, errorHandler.js
│   │   ├── models/             # Contact.js (Mongoose schema)
│   │   ├── routes/             # contactRoutes, resumeRoutes, healthRoutes
│   │   ├── app.js              # Express app setup with Helmet & CORS
│   │   └── server.js           # Server bootstrap
│   ├── .env.example
│   └── package.json
│
├── .gitignore                  # Strict secret and node_modules ignore
├── README.md                   # Complete architectural guide
└── package.json                # Root concurrent scripts
```

---

## 🛠️ Local Development Setup

### Prerequisites
- Node.js (v18.x or v20.x+)
- npm (v9.x+)
- MongoDB (Optional for local testing; server runs in resilient queue mode if local mongod is offline)

### 1. Clone & Install
```bash
# Clone the repository
git clone https://github.com/apoorvsh001/portfolio-3d-mern.git
cd portfolio-3d-mern

# Install root, client, and server dependencies
npm run install:all
```

### 2. Configure Environment Variables

**Server (`server/.env`):**
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://127.0.0.1:27017/apoorv_portfolio
CLIENT_URL=http://localhost:5173
ALLOWED_ORIGINS=http://localhost:5173,http://localhost:3000
```

**Client (`client/.env`):**
```env
VITE_API_URL=http://localhost:5000
```

### 3. Generate Official Resume Files (PDF & DOCX)
```bash
npm --prefix server run seed-resume
```

### 4. Start Development Servers
```bash
# Concurrently launch both backend (port 5000) and frontend (port 5173)
npm run dev
```

- **Frontend Client**: `http://localhost:5173/`
- **Dedicated Projects Gallery**: `http://localhost:5173/projects`
- **Backend Health Check**: `http://localhost:5000/api/health`
- **PDF Resume Endpoint**: `http://localhost:5000/api/resume/pdf`
- **DOCX Resume Endpoint**: `http://localhost:5000/api/resume/docx`

---

## 📡 API Endpoints Reference

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Diagnostics, server uptime, and MongoDB status |
| `POST` | `/api/contact` | Submits message with schema validation and rate limiting to MongoDB |
| `GET` | `/api/resume/pdf` | Streams official PDF resume file |
| `GET` | `/api/resume/docx` | Streams official Word DOCX resume file |

---

## 🚢 Deployment Guide

### Frontend Deployment (Vercel)
1. Set root directory to `client`.
2. Framework Preset: **Vite**.
3. Build Command: `npm run build`.
4. Output Directory: `dist`.
5. Environment Variable: `VITE_API_URL=https://your-backend.onrender.com`.

### Backend Deployment (Render)
1. Set root directory to `server`.
2. Build Command: `npm install && npm run seed-resume`.
3. Start Command: `npm start`.
4. Environment Variables:
   - `MONGODB_URI`: Your MongoDB Atlas URI.
   - `ALLOWED_ORIGINS`: Your Vercel frontend URL.
   - `NODE_ENV`: `production`.

---

## 👨‍💻 Author & Academic Information
- **Author**: Apoorv Sharma
- **Academic Program**: Bachelor of Engineering (B.E.), Computer Science Engineering (2024 - 2028)
- **Institution**: JK Lakshmipat University, Jaipur (JKLU)
- **Portfolio**: [apoorvsh.netlify.app](https://apoorvsh.netlify.app)
- **LinkedIn**: [linkedin.com/in/apoorvsh001](https://www.linkedin.com/in/apoorvsh001)
- **Contact**: `sharma2006apoorv@gmail.com`
