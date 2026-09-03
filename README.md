# News Homepage

A responsive news homepage built as a Frontend Mentor challenge, focusing on responsive layouts, semantic HTML, accessibility, and performance.

![News Homepage Screenshot](./src/images/preview.jpg.jpg)

### 🔗 Links

- **Frontend Mentor Challenge:** [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl)


## 🚀 Live Preview

[https://rodrigojesus7.github.io/news-homepage/](https://rodrigojesus7.github.io/news-homepage/)

## 🛠️ Built With

- HTML5
- CSS3
- Flexbox
- CSS Grid
- JavaScript
- Responsive Design
- Semantic HTML
- Accessibility (ARIA)
- Google Fonts (Inter)

## 📋 About The Project

This project is a solution to the **News Homepage** challenge from Frontend Mentor.

The goal was to reproduce the provided design as accurately as possible while creating a responsive and accessible interface that works across different screen sizes.

The page includes:

- Responsive desktop and mobile layouts
- Desktop navigation menu
- Mobile navigation menu with overlay
- Featured article
- "New" articles section
- Additional article cards
- Responsive images using `<picture>` and `<source>`
- Keyboard-friendly interactions
- Accessible navigation and menu controls
- Hover and focus states

## ✨ Features

### Responsive Layout

The layout adapts to different screen sizes using CSS media queries, Flexbox, and CSS Grid.

The desktop version uses a grid-based layout to organize:

- Featured article
- New articles sidebar
- Additional articles

The mobile version switches to a single-column layout with a mobile navigation menu.

### 📱 Mobile Navigation

The mobile menu can be opened and closed using JavaScript.

The menu also includes accessibility attributes such as:

- `aria-label`
- `aria-expanded`
- `aria-controls`

The navigation state is updated dynamically when the menu is opened or closed.

### ♿ Accessibility

Accessibility was considered throughout the project.

Some of the implemented practices include:

- Semantic HTML elements such as `<header>`, `<nav>`, `<main>`, `<section>`, and `<article>`
- Proper heading hierarchy
- Descriptive alternative text for informative images
- Empty `alt` attributes for decorative images
- Accessible names for icon-only buttons
- `aria-expanded` for the mobile navigation state
- `aria-controls` to associate the menu button with the navigation menu
- Visible keyboard focus states
- Keyboard interaction for closing the mobile menu
- Correct use of links and buttons according to their purpose


### 💡 What I Learned

During this challenge, I deepened my knowledge of modern CSS layout techniques and accessible DOM manipulation.

* **CSS Grid & Responsive Layouts:** Structuring the main content grid allowed me to maintain a clean layout on desktop while seamlessly shifting to a single-column flow on mobile viewports.
* **Semantic HTML Picture Tag:** Used the `<picture>` element with `<source>` to cleanly serve different image dimensions for desktop and mobile without relying solely on background images.
* **Accessible Mobile Navigation:** Implemented dynamic aria-expanded toggles using JavaScript to communicate navigation state to screen readers and handled dynamic background overlaying.