# 🎨 Excalidraw Clone v2

A high-performance, real-time collaborative whiteboard application built with the modern **Bun** runtime and **Next.js**. This project features a custom-built HTML5 Canvas engine and secure JWT authentication.

---

## 🚀 Tech Stack

- **Runtime:** [Bun](https://bun.sh/)
- **Framework:** [Next.js 15+](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Database/Auth:** JWT (JSON Web Tokens) & Custom Middleware
- **Tools:** Axios, Lucide React, HTML5 Canvas API

---

## ✨ Features

- **Custom Drawing Engine:** Implementation of rectangle and free-hand drawing logic using `2D Context`.
- **Coordinate Precision:** Optimized for different screen sizes using `getBoundingClientRect` and `offsetX/Y` mapping.
- **Fast Refresh:** Leveraging Bun's ultra-fast hot-reloading for a seamless developer experience.
- **Secure Routes:** Custom middleware to protect drawing boards via JWT validation.
- **Responsive UI:** Fully fluid layout designed with Tailwind CSS utility classes.

---

## 🚦 Getting Started

### 1. Prerequisites
Ensure you have [Bun](https://bun.sh/) installed:
```bash
curl -fsSL [https://bun.sh/install](https://bun.sh/install) | bash
