# 🐺 Wolf Pack Fitness - Next-Gen PWA Fitness App

**Built for Jaipur. Built for Alpha Energy. Built for Scale.**

---

## 🎯 Project Status

### ✅ PHASE 1 COMPLETE: Cyberpunk Foundation
- [x] Landing page with animated title + wolf eyes tracking
- [x] Particle effect system (neon blue/cyan particles)
- [x] Glassmorphism login cards with backdrop blur
- [x] PWA manifest configured (installable)
- [x] Service worker ready (offline support + caching)
- [x] OTP login flow scaffolded (Supabase integration ready)
- [x] Web Audio API howl effect on button hover
- [x] Full mobile-responsive design
- [x] Dark theme with neon-blue cyberpunk aesthetic

### ⏳ NEXT PHASES
1. **Logo & Branding** - Replace placeholder wolf-logo.png
2. **Backend Integration** - Connect Supabase OTP + database
3. **Mood Analysis UI** - Text/voice/camera input screen
4. **Gamification** - Howl Streaks, levels, quests
5. **AI Plans** - Diet + workout generation
6. **Portfolio** - Raj's "Alpha Wolf" bio section

---

## 📁 Project Structure

```
wolf-pack-fitness/
├── index.html              # Main landing page
├── app.js                  # OTP + PWA login logic
├── particles.js            # Particle system + eye tracking
├── service-worker.js       # PWA service worker
├── styles.css              # Full cyberpunk theme
├── manifest.json           # PWA manifest
├── wolf-logo.png           # 🐺 NEEDS CREATION (see below)
└── README.md               # This file
```

---

## 🐺 WOLF LOGO / FAVICON SETUP

### Quick Start: Use Placeholder PNG
1. Download a neon wolf avatar from [Dicebear](https://www.dicebear.com/styles/avataaars/) 
2. Save as **`wolf-logo.png`** in project root
3. Create versions: 192x192 and 512x512

### Professional Setup (Recommended):
Create custom wolf logo with:
- Neon blue eyes (#00d9ff)
- Dark cyberpunk background (#0f172a)
- Geometric, minimalist style
- Sizes: 192x192, 512x512

Use: Figma, Canva, AI tools (Midjourney, DALL-E)

**Prompt for AI:**
```
"Neon blue wolf head, cyberpunk style, glowing cyan eyes, 
dark background, geometric, minimalist, app icon, 512x512"
```

Files needed:
- `wolf-logo.png` (192x192) - Favicon
- `wolf-logo-512.png` (512x512) - High-res

---

## 🚀 HOW TO RUN

### Quick Python Server
```bash
python -m http.server 8000  # Windows
python3 -m http.server 8000 # macOS/Linux
```
Open: `http://localhost:8000`

### Node.js Live Server
```bash
npm install -g http-server
http-server . -p 8000
```

### VS Code
- Install "Live Server" extension
- Right-click index.html → "Open with Live Server"

---

## ✨ FEATURES IMPLEMENTED

### 🎨 UI/UX
- Animated bouncing title with gradient text
- Wolf eyes that track mouse movement
- Floating neon particle background
- Glassmorphism login cards
- Smooth animations everywhere

### 🔐 Authentication
- OTP flow (email/phone)
- Responsive forms
- Keyboard support (Enter to submit)
- Toast notifications

### 🐺 Audio Effects
- Web Audio API howl synthesis
- Button hover sound interaction
- Click feedback

### ⚙️ PWA
- Installable ("Add to Home Screen")
- Offline support (service worker)
- App shortcuts (Mood, Workout, Diet)
- Share target API ready
- Push notifications ready

### 📱 Responsive
- Mobile first (320px+)
- Tablet optimized (768px+)
- Desktop polish (1024px+)
- Touch-friendly

---

## 🔗 NEXT: SUPABASE INTEGRATION

### Setup:
1. Create account: [supabase.com](https://supabase.com)
2. New project
3. Get API keys

### Database Tables (SQL):
```sql
-- Users
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email TEXT UNIQUE,
  phone TEXT UNIQUE,
  is_premium BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- OTP Sessions
CREATE TABLE otp_sessions (
  id UUID PRIMARY KEY,
  email_or_phone TEXT,
  otp_code TEXT,
  expires_at TIMESTAMP,
  verified BOOLEAN DEFAULT FALSE
);

-- Mood Logs
CREATE TABLE mood_logs (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  mood TEXT,
  energy INT,
  notes TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Workout Plans
CREATE TABLE workout_plans (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  plan_name TEXT,
  duration INT,
  exercises JSONB
);

-- Diet Plans
CREATE TABLE diet_plans (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  meal_name TEXT,
  calories INT,
  protein INT,
  ingredients JSONB
);

-- Daily Quests
CREATE TABLE daily_quests (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  quest TEXT,
  points INT,
  completed BOOLEAN DEFAULT FALSE
);
```

---

## 🎮 GAMIFICATION (Roadmap)

- Howl Streak - Daily login counter
- Levels: Pup → Beta → Alpha → Legendary
- Points system
- Daily quests
- Leaderboards
- Badges
- Wolf Companion chatbot

---

## 💰 MONETIZATION

**Freemium:**
- FREE: 1 session/day
- PREMIUM (₹299/mo): Unlimited, AR, leaderboard, private packs

---

## 🛠️ TECH STACK

| Component | Tech |
|-----------|------|
| Frontend | HTML5, CSS3, JavaScript |
| PWA | Service Worker, Manifest |
| Animations | CSS3, Web Audio API |
| Backend | Supabase (PostgreSQL + Auth) |
| AI | Grok / Gemini Integration |
| Hosting | Vercel / Netlify / Replit |

---

## 📋 TODO CHECKLIST

### Phase 1 ✅ DONE
- [x] Landing page
- [x] PWA setup
- [x] OTP scaffold
- [x] Animations
- [x] Service worker

### Phase 2 🔄 IN PROGRESS
- [ ] Wolf logo
- [ ] Supabase connection
- [ ] OTP backend
- [ ] User database

### Phase 3 ⏳ NEXT
- [ ] Mood analysis UI
- [ ] Workout generator
- [ ] Diet planner
- [ ] Gamification
- [ ] Leaderboards
- [ ] Portfolio section

---

## 🐺 **LET'S HUNT THIS TO SUCCESS!**

Built with 🖤 and neon by the Alpha Pack
Jaipur, 2026