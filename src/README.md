# FrontendDev Assignment – Drag & Drop Website Builder

## 🔧 Tools Used
- **React.js** – Frontend framework
- **Tailwind CSS** – For modern, utility-first styling
- **nanoid** – For generating unique element IDs
- **React Context API** – To manage shared state (elements, selection, updates)

## 🧠 Architecture
The application is composed of 3 main parts:
1. **Element Palette** – Sidebar with buttons to add Text, Image, and Button elements.
2. **Canvas** – Central editable area where elements can be positioned freely.
3. **Property Editor** – Sidebar for editing selected element’s properties (text, color, image URL).

### State Management
All shared state (elements, selection, updates) is handled via the `BuilderContext` using React's Context API.

### Component Structure:
