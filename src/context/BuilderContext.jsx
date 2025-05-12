// context/BuilderContext.js
import React, { createContext, useState } from 'react';
import { nanoid } from 'nanoid';

export const BuilderContext = createContext();

export function BuilderProvider({ children }) {
  const [elements, setElements] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  // ✅ Updated to allow custom properties and position
  const addElement = (type, properties, position) => {
    const newEl = {
      id: nanoid(), // or use Date.now().toString()
      type,
      properties: {
        text: properties?.text || 'Sample Text',
        color: properties?.color || '#000000',
        url: properties?.url || '',
        ...properties,
      },
      position: position || { x: 100, y: 100 },
    };
    setElements((prev) => [...prev, newEl]);
  };

  const updateElement = (id, updatedProperties = {}, updatedPosition = null) => {
    setElements((prev) =>
      prev.map((el) =>
        el.id === id
          ? {
              ...el,
              properties: { ...el.properties, ...updatedProperties },
              position: updatedPosition ? { ...el.position, ...updatedPosition } : el.position,
            }
          : el
      )
    );
  };

  return (
    <BuilderContext.Provider
      value={{
        elements,
        selectedId,
        setSelectedId,
        addElement,
        updateElement,
      }}
    >
      {children}
    </BuilderContext.Provider>
  );
}
