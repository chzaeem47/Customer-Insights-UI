# Prospective Customer Segmentation Dashboard
A clean, modern, and highly responsive frontend dashboard built with React.js and Tailwind CSS. 
This project showcases a user interface design for an audience segmentation platform, featuring a dynamic layout, reusable component architecture, and fluid horizontal card navigation.

---

## 🚀 Features
Reusable Component Architecture: Uses an optimized layout where a single template component dynamically generates multiple customized segment cards using React props.

Modern Flexbox Layout: Replaced rigid positioning systems with native CSS Flexbox and responsive grids to ensure fluid alignment.

Hidden Scrollbar Navigation: Implement a smooth horizontal track layout for scrolling through customer segments without bulky native browser scrollbars.

Clean Vector UI Elements: Integrated crisp custom inline SVG iconography optimized for high-resolution displays.

---

## 🛠️ Tech Stack
Frontend Framework: React.js

Styling Engine: Tailwind CSS

Icons: Custom SVG Assets

--- 

## 💻 Getting Started
Follow these quick steps to get the development server running locally:

1. Clone the Repository
```
Bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
3. Install Dependencies
Bash
npm install
4. Run the Development Server
Bash
npm run dev
Open http://localhost:5173 in your browser to view the application.
```

## 📂 Project Structure Overview
```
src/
├── componets/
│   ├── leftHalf.jsx     # Header text and overview section
│   ├── navbar.jsx       # Global application navigation header
│   └── rightHalf.jsx    # Reusable card component accepting dynamic props
├── App.jsx              # Main layout orchestration and prop distribution
└── index.css            # Global Tailwind injections and scrollbar utility overrides
```
