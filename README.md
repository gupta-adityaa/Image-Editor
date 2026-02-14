# 🎨 Canvas Image Editor

A sleek, browser-based image editing tool that allows users to upload photos, apply real-time CSS filters, and experiment with over 20 professional presets. Built using the HTML5 Canvas API for high-performance rendering.

---

## 🚀 Features

### 🖼️ Image Upload & Preview
- Drag or select images from your local machine.
- Instant preview rendered onto the HTML5 `<canvas>`.

### 🎛️ Real-time Manual Filters
Fine-tune your images using interactive sliders for:

- Brightness  
- Contrast  
- Saturation  
- Hue Rotation  
- Sepia  
- Grayscale  
- Blur  
- Opacity  
- Inversion  

All updates are applied instantly.

### 🎨 One-Click Presets
22 professionally tuned presets including:

- Cinematic  
- Vintage  
- Moody  
- Black & White  
- Warm Glow  
- Cool Tone  
- Dramatic  
- Soft Fade  
- And many more  

### ⬇️ Instant Download
- Export edited images as `.png` files.
- Uses Canvas `toDataURL()` for image generation.

### 📱 Responsive UI
- Dark-themed modern interface  
- Built using custom CSS variables  
- Clean layout with Flexbox  
- Styled sliders and components  
- Remix Icons integration  

---

## 🛠️ Tech Stack

- **HTML5** – Semantic structure & Canvas API  
- **CSS3** – Custom properties (variables), Flexbox, advanced slider styling  
- **JavaScript (ES6+)** – DOM manipulation & image processing logic  
- **Remix Icon** – Vector icons for UI enhancement  

---

## 📂 Project Structure

```
├── index.html # Main application structure
├── script.js # Filter logic, preset data, and canvas rendering
├── style.css # Layout and component styling
├── theme.css # Design system (colors, spacing, typography)
└── README.md # Project documentation
```

---

## ⚙️ How It Works

### 🎯 The Canvas Core
When an image is uploaded:
1. It is drawn onto an HTML5 `<canvas>`.
2. The canvas acts as the rendering engine.

### 🎛️ Filter Construction
JavaScript dynamically builds a CSS filter string like:

```
brightness(110%) contrast(90%) saturate(120%)
```

This string is applied to the canvas context before redrawing.

### 🔄 Redraw Loop
- When a slider is adjusted or preset selected:
  - Canvas is cleared
  - Updated filter string is applied
  - Image is redrawn instantly

### 📤 Export
- `canvas.toDataURL()` converts pixel data into a downloadable `.png` file.
- A temporary anchor element triggers the download.

---

## 🚦 Getting Started

1. Clone this repository:

```bash
git clone <repository-url>
```

Open the project folder.

Launch index.html in any modern web browser.

⚠️ Note:
To avoid potential CORS issues with advanced canvas operations, it is recommended to run this using a local development server (e.g., VS Code Live Server extension).
