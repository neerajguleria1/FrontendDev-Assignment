import React, { useContext, useRef } from 'react';
import { BuilderContext } from '../context/BuilderContext';

export default function Canvas() {
  const { elements, setSelectedId, selectedId, updateElement } = useContext(BuilderContext);
  const dragInfo = useRef({ isDragging: false, offsetX: 0, offsetY: 0, id: null });

  const handleMouseDown = (e, el) => {
    e.stopPropagation();
    dragInfo.current = {
      isDragging: true,
      offsetX: e.clientX - el.position.x,
      offsetY: e.clientY - el.position.y,
      id: el.id,
    };
    setSelectedId(el.id);
  };

  const handleMouseMove = (e) => {
    if (!dragInfo.current.isDragging) return;

    const { offsetX, offsetY, id } = dragInfo.current;
    const newX = e.clientX - offsetX;
    const newY = e.clientY - offsetY;

    updateElement(id, null, { x: newX, y: newY });
  };

  const handleMouseUp = () => {
    dragInfo.current.isDragging = false;
  };

  return (
    <div
      className="flex-1 relative bg-white border"
      style={{ overflow: 'auto', position: 'relative', height: '100%' }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {elements.map((el) => (
        <div
          key={el.id}
          onMouseDown={(e) => handleMouseDown(e, el)}
          className="absolute"
          style={{
            left: el.position.x,
            top: el.position.y,
            cursor: 'move',
            border: selectedId === el.id ? '2px solid #007bff' : '1px dashed #ccc',
            padding: '4px',
            borderRadius: '6px',
            backgroundColor: '#fff',
          }}
        >
          {el.type === 'text' && <p style={{ color: el.properties.color, margin: 0 }}>{el.properties.text}</p>}
          {el.type === 'image' && (
            <img
              src={el.properties.url}
              alt=""
              width={150}
              style={{ borderRadius: '6px', pointerEvents: 'none' }}
            />
          )}
          {el.type === 'button' && (
            <button
              style={{
                backgroundColor: el.properties.color,
                color: '#fff',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '6px',
                pointerEvents: 'none',
              }}
            >
              {el.properties.text}
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
