# FrontendDev Assignment – Drag & Drop Website Builder

##  Tools Used
- **React.js** – Frontend framework
- **Tailwind CSS** – For modern, utility-first styling
- **nanoid** – For generating unique element IDs
- **React Context API** – To manage shared state (elements, selection, updates)

  ## 🚀 Live Preview


##  Architecture
The application is composed of 3 main parts:
1. **Element Palette** – Sidebar with buttons to add Text, Image, and Button elements.
2. **Canvas** – Central editable area where elements can be positioned freely.
3. **Property Editor** – Sidebar for editing selected element’s properties (text, color, image URL).

### State Management
All shared state (elements, selection, updates) is handled via the `BuilderContext` using React's Context API.

### Component Structure:
src/
├── components/
│ ├── Canvas.js
│ ├── ElementPalette.jsx
│ └── PropertyEditor.jsx
├── context/
│ └── BuilderContext.jsx
├── styles/
│ └── app.css 
└── App.jsx
└── main.jsx

## 🚀 How It Works
- Click any element in the palette to add it to the canvas.
- Click an element on the canvas to select it.
- Modify the selected element’s properties using the right sidebar.
- Elements can be visually rearranged on the canvas.
- 
## 🛠️ Installation & Setup
Clone the repository and run locally:
```bash
npm install
npm run dev
enter o for open 
**⚠️ Make sure Node.js and npm are installed on your system.
