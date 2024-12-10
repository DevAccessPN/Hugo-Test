# Hugo + Tailwind CSS Project

This repository contains the implementation of the test project, which involves setting up a Hugo site, converting a Figma design to HTML/CSS, and ensuring compatibility with CloudCannon. Below, you'll find details about the approach, assumptions, and project structure.

---

## 🚀 Project Overview

### **Tasks Completed:**
1. **Hugo Setup:**  
   - Forked the provided Hugo + Tailwind CSS repository.
   - Installed required dependencies using `npm install`.
   - Used `npm run dev` for local development.

2. **Figma-to-HTML/CSS Conversion:**  
   - Translated the provided Figma design into HTML and CSS using Tailwind CSS.
   - Created reusable components and partials for efficient and maintainable code.

3. **CloudCannon Compatibility:**  
   - Added front matter fields in the `content/` directory to match the structure of the Figma design.
   - Defined complex structures like arrays and fields for easy usability in CloudCannon.

---

## 🛠️ Technology Stack

- **Hugo**: Static site generator for the project setup and templating.
- **Tailwind CSS**: Utility-first framework for styling and responsive design.
- **CloudCannon**: Content management system for non-technical editors.

---

## 📁 Project Structure

### **Hugo Directory Layout:**
- `layouts/_default/baseof.html`: Overall base structure of the site.
- `layouts/index.html`: Specific layout file for the main page.
- `partials/`: Reusable components like navbar, footer, etc.
- `content/`: Includes content files with front matter fields.
- `static/`: Contains static assets (e.g., images, CSS, JS).

