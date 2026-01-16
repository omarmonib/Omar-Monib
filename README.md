# 🚀 My Portfolio

A modern and elegant personal portfolio website built with the latest web development technologies.

## 🌟 Features

- Modern and interactive user interface
- Fully responsive design for all devices
- Light/Dark mode support
- Multiple pages (Home, About, Projects, Contact)
- Fast loading and high performance

## 🛠️ Tech Stack

- **Next.js 13+** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Icons** for beautiful icons
- **ESLint** and **Prettier** for code quality

## 📂 Project Structure

```
app/
├─ layout.tsx        # Root layout
├─ globals.css       # Global styles
├─ page.tsx          # Home page
├─ about/            # About page
├─ projects/         # Projects page
└─ contact/          # Contact page

components/
├─ layout/           # Layout components
├─ home/             # Home page components
├─ about/            # About page components
├─ projects/         # Projects page components
├─ contact/          # Contact page components
└─ ui/               # Reusable UI components

public/              # Static assets
constants/           # Constants and text content
context/             # React contexts
```

## 🚀 Getting Started

1. Clone the repository:

   ```bash
   git clone [repository-url]
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Run the development server:

   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Build for Production

To create a production build:

```bash
pnpm build
pnpm start
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

Built with ❤️ by Omar Monib

- constants/ → Static content & configuration

- context/ → Global state (Theme)

- public/ → Static assets

---

## 🎨 Styling Approach

- Tailwind CSS

- Utility-first

- Responsive by default

- Dark mode via ThemeContext

---

## 🧭 Architectural Principles

- Pages = composition only

- Components = logic + UI

- UI folder = dumb, reusable components

- No styling logic inside app/

- Clean imports via index.ts

---

## ✅ Result

✔ Clean
✔ Scalable
✔ Production-ready
✔ Easy to onboard new developers

---

## 📄 License

This project is **not open source**.

All rights reserved © 2026 Omar Monib.
The code is published for **viewing and educational purposes only** and may not
be copied, modified, or redistributed without permission.

```

```
