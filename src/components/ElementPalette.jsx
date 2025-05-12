import React, { useContext } from 'react';
import { BuilderContext } from '../context/BuilderContext';

const PaletteButton = ({ type, label, color, onClick }) => (
  <button
    onClick={onClick}
    aria-label={`Add ${label}`}
    className={`w-full mb-3 px-4 py-2 rounded transition ${color} hover:opacity-80 focus:outline-none`}
  >
    {label}
  </button>
);

export default function ElementPalette() {
  const { addElement } = useContext(BuilderContext);

  return (
    <div className="w-1/5 bg-gray-100 p-6 border-r border-gray-300">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">Elements</h2>
      <PaletteButton
        type="text"
        label="Text"
        color="bg-blue-500 text-white"
        onClick={() => addElement('text')}
      />
      <PaletteButton
        type="image"
        label="Image"
        color="bg-green-500 text-white"
        onClick={() => addElement('image')}
      />
      <PaletteButton
        type="button"
        label="Button"
        color="bg-purple-500 text-white"
        onClick={() => addElement('button')}
      />
    </div>
  );
}
