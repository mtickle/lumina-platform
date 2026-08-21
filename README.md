# Grace & Truth Fellowship: Web Prototype

A modern, fast, and highly modular web application prototype built to demonstrate a scalable architecture for a community church platform. 

This project shifts away from traditional heavy CMS platforms in favor of a decoupled, component-based frontend that guarantees instant page loads, easy maintainability, and a pristine user experience across all devices.

## 🚀 The Tech Stack

* **React:** For a modular, component-based user interface.
* **Vite:** Next-generation frontend tooling for lightning-fast hot module replacement and optimized production builds.
* **Tailwind CSS:** Utility-first CSS framework for rapid, consistent, and responsive styling without leaving the markup.
* **JSON-Driven Architecture:** All static content (staff directories, ministry schedules, service times) is decoupled from the UI components and stored in highly organized JSON files.

## ✨ Key Features

* **Decoupled Content:** Content updates are as simple as modifying a JSON file, keeping the React components clean and focused strictly on presentation.
* **Progressive Web App (PWA):** Fully configured with manifest and icons for offline support and mobile home screen installation.
* **Responsive Design:** Fluid layouts that scale perfectly from large desktop monitors down to mobile devices.
* **AI-Assisted Architecture:** The foundational component structure, Tailwind styling, and data pipelines were pair-programmed alongside AI tools to rapidly accelerate the prototyping phase.

## 📦 Deployment

This application is optimized to be statically compiled and hosted via GitHub Pages. Deployments are handled automatically by pushing the compiled dist directory or utilizing GitHub Actions for continuous integration.

## 🗺️ Future Roadmap

While the current phase focuses entirely on frontend architecture and static data delivery, the next phase will introduce a robust backend database (e.g., PostgreSQL/Supabase). This will power dynamic features and provide true value through:

* **Seamless Administration Tools:** A secure dashboard for staff to manage events, directories, and content without touching code.
* **User Authentication:** Secure portals for member directories and giving history.
* **Dynamic Registrations:** Live sign-ups for Life Groups and volunteer scheduling.
