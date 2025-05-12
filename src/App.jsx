import React from 'react';
import { BuilderProvider } from './context/BuilderContext';
import ElementPalette from './components/ElementPalette';
import Canvas from './components/Canvas';
import PropertyEditor from './components/PropertyEditor';
import './styles/app.css'; // ✅ Corrected import

export default function App() {
  return (
    <BuilderProvider>
      <div className="app-container">
        <ElementPalette />
        <Canvas />
        <PropertyEditor />
      </div>
    </BuilderProvider>
  );
}
