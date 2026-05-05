# RankFlow UI/UX Design Brief

## 1. Brand Identity & Aesthetic
*   **Product Name:** RankFlow
*   **Niche:** SEO and Content Ranking SaaS Platform
*   **Vibe/Mood:** Modern, technical, confident, premium SaaS (Dark Luxury / Atmospheric). 
*   **Color Palette:**
    *   **Background:** Deep dark theme (e.g., `#09090b` or very dark violet-navy).
    *   **Primary Accents:** Custom HSL-tuned Cyan and Violet (e.g., glowing cyan `#00f0ff` and deep violet `#8a2be2`).
    *   **Surfaces:** Glassmorphism – translucent panels with backdrop blur (`backdrop-filter: blur(12px)`), subtle 1px semi-transparent borders.
*   **Typography:**
    *   **Headings:** Modern, geometric sans-serif (e.g., *Inter*, *Space Grotesk*, or *Plus Jakarta Sans*) with tight line heights and tracking.
    *   **Body:** Clean, legible sans-serif (*Inter*).
    *   **Code/Data:** Monospace (*JetBrains Mono*) for developer previews and live analytics.

## 2. Layout & Section Requirements

### 1. Hero Section
*   **Headline:** Massive, animated display text (focus on value prop).
*   **CTA:** Primary glowing button, secondary ghost/glass button.
*   **Visual Asset:** An interactive, faux "Live Dashboard" mock-up built as a DOM/CSS element (floating cards, mocked progress bars, glowing metric indicators).

### 2. Features Section
*   **Style:** Bento-grid or 3-column layout. 
*   **Cards:** Glassmorphism borders and backgrounds. Hover states should include a slight lift/scaling and border gradient glow.
*   **Icons:** Minimalist line icons (Lucide/Feather styles).

### 3. How It Works
*   **Style:** Visual process flow. Step-by-step numbered list (e.g., 01, 02, 03) connected by subtle dashed or glowing lines.

### 4. Pricing Section
*   **Layout:** 3-tier responsive cards. 
*   **Middle Card:** Highlighted/scale-up for the "Pro" tier with a glowing cyan/violet border.
*   **Interactivity:** A functional toggle switch for Monthly vs. Annual billing, revealing a "Save 20%" pill badge on annual.

### 5. Integrations ("Elevate Your Brand")
*   **Visuals:** A floating "cloud" or animated marquee grid of gray-scale/monochrome platform logos (GSC, Ahrefs, Semrush, Slack, Notion). Logos light up or gain color on hover.

### 6. Testimonials Section
*   **Layout:** Auto-advancing horizontal carousel or a masonry grid. 
*   **Cards:** User avatar, name, role, 5-star rating (yellow/gold), and review text.
*   **Controls:** Left/Right arrows and dot indicators.

### 7. Developer Section
*   **Layout:** Split pane (50/50). Left side: value prop for developers. Right side: A dark-mode code editor UI.
*   **Interactivity:** Tab switcher inside the code pane (REST, Webhooks, SDKs) updating the syntax-highlighted code.

### 8. Newsletter / CTA Banner
*   **Style:** Edge-to-edge container or a large rounded-corner card at the bottom. 
*   **Content:** Final push for conversion. Input field for email and a submit button with a gradient background.

### 9. Footer
*   **Layout:** Multi-column (Brand/Logo left, 3 columns of links: Product, Company, Legal right).
*   **Details:** Social icons, copyright text.

### 10. Floating AI Live Chat Widget (Bottom Right)
*   **UI:** A minimal chat bubble icon. When clicked, it expands into a glassmorphism chat window.
*   **Elements:** Chat header, message area (differentiating bot vs user bubbles), typing indicator animation ("..."), input field, and send button.

## 3. Micro-Interactions & Animation Needs
*   **Loading:** Elements should stagger fade-in on page scroll (Intersection Observers).
*   **Hover states:** Buttons need gradient shifts, cards need Y-axis lift and border illumination.
*   **Scroll:** Smooth scrolling for anchors. 

## 4. Technical / DOM Hand-off Notes
*   Design must accommodate semantic HTML (using `<main>`, `<section>`, `<nav>`, `<article>`).
*   Mockups must clearly specify exact hex/HSL codes so the engineering implementation perfectly matches the requested violet/cyan glassmorphism.
