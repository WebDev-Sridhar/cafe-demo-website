Frontend Design Standards
Layout Principles

Always follow these layout rules:

max-width: 1200px
section padding: 80px
grid gap: 32px

Maintain perfect spacing rhythm.

Typography

Hero Title:
48px – 64px

Section Title:
32px – 40px

Body:
16px – 18px

Line Height:
1.6

Letter Spacing:
0.02em for body
0.05em for headings

Card Design

Cards must include:

rounded-xl
soft shadow
hover lift
image zoom on hover

Use layered depth effects.

Motion Design

Animations must follow these rules:

duration: 0.4s – 0.8s
ease: ease-out

Avoid harsh animations.

Prefer:

fade
slide
scale
parallax

Hover Effects

All interactive elements must have hover states.

Buttons:

scale: 1.05
shadow increase

Cards:

translateY(-6px)
shadow-lg

Images:

scale: 1.05


---

# Color System

Use a strict palette.

Primary: espresso brown
Accent: caramel
Background: latte beige
Surface: white
Performance Rules
Avoid heavy JS animation loops.

Prefer:

Framer Motion
CSS transforms
GPU acceleration
Accessibility
Ensure:

color contrast
readable font sizes
keyboard navigation
focus states
Responsive Rules
Mobile first.

Breakpoints:

sm 640px
md 768px
lg 1024px
xl 1280px
Component Quality
Components must be:

reusable
clean
well structured
easy to maintain
Final Rule
Every UI component must look premium and production-ready.