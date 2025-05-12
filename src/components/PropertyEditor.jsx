import React, { useContext } from 'react';
import { BuilderContext } from '../context/BuilderContext';

export default function PropertyEditor() {
  const { elements, selectedId, updateElement } = useContext(BuilderContext);
  const selected = elements.find((el) => el.id === selectedId);

  if (!selected) return <div className="w-1/5 bg-gray-50 p-6 border-l border-gray-300 text-gray-600">Select an element</div>;

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateElement(selected.id, { [name]: value });
  };

  return (
    <div className="w-1/5 bg-gray-50 p-6 border-l border-gray-300">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">Edit Properties</h2>
      {(selected.type === 'text' || selected.type === 'button') && (
        <div className="mb-4">
          <label className="block mb-1 text-sm text-gray-700">Text</label>
          <input
            name="text"
            value={selected.properties.text}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
      )}
      {selected.type === 'image' && (
        <div className="mb-4">
          <label className="block mb-1 text-sm text-gray-700">Image URL</label>
          <input
            name="url"
            value={selected.properties.url}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-200"
          />
        </div>
      )}
      <div className="mb-4">
        <label className="block mb-1 text-sm text-gray-700">Color</label>
        <input
          name="color"
          type="color"
          value={selected.properties.color}
          onChange={handleChange}
          className="w-full h-10 rounded cursor-pointer"
        />
      </div>
    </div>
  );
}
