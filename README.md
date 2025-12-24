# 🏗️ Project Architecture Overview
This project follows Next.js App Router with a feature-based component architecture to ensure scalability, clarity, and maintainability.

The Home page is represented by the Hero section, and each main page (About, Projects, Contact) has its own dedicated folder and components.

---

## 📁 Folder Structure Explained
```
app/
├─ layout.tsx        # Root layout (Navbar, ThemeProvider, Fonts)
├─ globals.css       # Global styles (Tailwind base)
├─ page.tsx          # Home page (renders Hero/HomeSection)
│
├─ about/
│  └─ page.tsx       # About page entry
│
├─ projects/
│  └─ page.tsx       # Projects page entry
│
├─ contact/
│  └─ page.tsx       # Contact page entry
```
Rule:
Files inside app/ are routing & composition only — no UI logic.

---

## 🧩 Components Architecture (Feature-Based)

```
components/
├─ layout/
│  └─ Navbar.tsx     # Global layout components
│
├─ home/
│  ├─ HeroContent.tsx
│  ├─ HeroImage.tsx
│  ├─ HomeSection.tsx
│  └─ index.ts
│
├─ about/
│  ├─ AboutIntro.tsx
│  ├─ AboutSection.tsx
│  ├─ SkillsList.tsx
│  └─ index.ts
│
├─ projects/
│  ├─ ProjectCard.tsx
│  ├─ ProjectsGrid.tsx
│  ├─ ProjectsSection.tsx
│  └─ index.ts
│
├─ contact/
│  ├─ ContactForm.tsx
│  ├─ ContactInfo.tsx
│  ├─ ContactSection.tsx
│  ├─ InputField.tsx
│  └─ index.ts
│
├─ ui/
│  ├─ Avatar.tsx
│  ├─ Logo.tsx
│  ├─ NavLink.tsx
│  └─ ThemeToggle.tsx

```

### Why this structure?

* ✅ Feature-based grouping (not type-based)

* ✅ Easy to scale and refactor

* ✅ Clear separation between:

* Routing (app)

* Business/UI logic (components)

* Reusable primitives (ui)

---

## 🧠 Supporting Layers

```
constants/
├─ hero.ts
├─ links.ts
├─ projects.ts
└─ skills.ts

context/
└─ ThemeContext.tsx

public/
├─ profile.jpg
├─ logo.svg
└─ cv.pdf
```

* constants/ → Static content & configuration

* context/ → Global state (Theme)

* public/ → Static assets

---

## 🎨 Styling Approach

* Tailwind CSS

* Utility-first

* Responsive by default

* Dark mode via ThemeContext

---

## 🧭 Architectural Principles

* Pages = composition only

* Components = logic + UI

* UI folder = dumb, reusable components

* No styling logic inside app/

* Clean imports via index.ts

---

## ✅ Result

✔ Clean
✔ Scalable
✔ Production-ready
✔ Easy to onboard new developers

---

## 📄 License

This project is **not open source**.

All rights reserved © 2025 Omar Monib.  
The code is published for **viewing and educational purposes only** and may not
be copied, modified, or redistributed without permission.
