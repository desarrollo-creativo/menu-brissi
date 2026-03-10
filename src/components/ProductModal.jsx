import { useState, useEffect, useRef } from 'react';

const TAG_COLORS = {
  Picante:   { bg: 'rgba(232,53,10,0.9)',   color: '#fff' },
  Normal:    { bg: 'rgba(236,72,153,0.85)', color: '#fff' },
  Crujiente: { bg: 'rgba(245,158,11,0.9)',  color: '#0f0408' },
  Clásica:   { bg: 'rgba(236,72,153,0.85)', color: '#fff' },
};

export default function ProductModal({ producto, onClose }) {
  const [visible, setVisible] = useState(false);
  const [dragY, setDragY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const touchStartY = useRef(0);
  const sheetRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 20);
    return () => clearTimeout(t);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 350);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) handleClose();
  };

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
    setIsDragging(false);
  };

  const handleTouchMove = (e) => {
    const sheet = sheetRef.current;
    if (!sheet) return;
    if (sheet.scrollTop > 0) return;
    const delta = e.touches[0].clientY - touchStartY.current;
    if (delta > 0) {
      setIsDragging(true);
      setDragY(delta);
    }
  };

  const handleTouchEnd = () => {
    if (dragY > 100) {
      handleClose();
    } else {
      setDragY(0);
    }
    setIsDragging(false);
  };

  const sheetTransform = !visible
    ? 'translateY(100%)'
    : `translateY(${dragY}px)`;

  return (
    <div
      onClick={handleOverlayClick}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        background: visible ? 'rgba(0,0,0,0.85)' : 'rgba(0,0,0,0)',
        transition: 'background 0.3s ease',
      }}
    >
      <div
        ref={sheetRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          width: '100%',
          maxWidth: 480,
          background: '#1e0811',
          borderRadius: '24px 24px 0 0',
          border: '1px solid rgba(236,72,153,0.3)',
          borderBottom: 'none',
          maxHeight: '90vh',
          overflowY: 'auto',
          transform: sheetTransform,
          transition: isDragging ? 'none' : 'transform 0.4s cubic-bezier(0.34, 1.2, 0.64, 1)',
          boxShadow: '0 -8px 48px rgba(236,72,153,0.2)',
          position: 'relative',
        }}>

        {/* Drag handle */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: 12,
          paddingBottom: 4,
          cursor: 'grab',
        }}>
          <div style={{
            width: 40,
            height: 4,
            borderRadius: 2,
            background: 'rgba(236,72,153,0.4)',
          }} />
        </div>

        {/* Imagen hero */}
        <div style={{ position: 'relative', height: 240, overflow: 'hidden', borderRadius: '24px 24px 0 0' }}>
          <img
            src={producto.imagen}
            alt={producto.nombre}
            style={{
              width: '100%',
              height: '110%',
              objectFit: 'cover',
              transform: 'translateY(-5%)',
              display: 'block',
            }}
          />
          {/* Overlay gradiente */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, #1e0811 0%, rgba(30,8,17,0.5) 40%, transparent 100%)',
            pointerEvents: 'none',
          }} />
          {/* Tags sobre imagen */}
          <div style={{
            position: 'absolute',
            bottom: 14, left: 14,
            display: 'flex', gap: 6,
          }}>
            {producto.tags.map(tag => {
              const s = TAG_COLORS[tag] || { bg: 'rgba(236,72,153,0.85)', color: '#fff' };
              return (
                <span key={tag} style={{
                  background: s.bg, color: s.color,
                  fontFamily: "'Bebas Neue', cursive",
                  fontSize: 12, letterSpacing: '1px',
                  padding: '3px 10px', borderRadius: 20,
                }}>
                  {tag}
                </span>
              );
            })}
          </div>
          {/* Botón cerrar */}
          <button
            onClick={handleClose}
            style={{
              position: 'absolute',
              top: 14, right: 14,
              width: 36, height: 36,
              borderRadius: '50%',
              border: '1px solid rgba(236,72,153,0.4)',
              background: 'rgba(15,4,8,0.6)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              color: '#F9A8D4',
              fontSize: 18,
              cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              outline: 'none',
              fontFamily: 'sans-serif',
            }}
          >
            ✕
          </button>
        </div>

        {/* Contenido */}
        <div style={{ padding: '16px 20px 32px' }}>
          {/* Nombre y precio */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <h2 style={{
              fontFamily: "'Bebas Neue', cursive",
              fontSize: 32,
              color: '#fff',
              letterSpacing: '1px',
              textShadow: '0 0 20px rgba(236,72,153,0.6)',
            }}>
              {producto.nombre}
            </h2>
            <span style={{
              fontFamily: "'Bebas Neue', cursive",
              fontSize: 26,
              color: '#EC4899',
              letterSpacing: '1px',
            }}>
              {producto.precio}
            </span>
          </div>

          {/* Descripción */}
          <p style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: 14,
            color: 'rgba(249,168,212,0.75)',
            lineHeight: 1.6,
            marginBottom: 22,
          }}>
            {producto.descripcion}
          </p>

          {/* Separador INGREDIENTES */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <div style={{ flex: 1, height: 1, background: 'rgba(236,72,153,0.3)' }} />
            <span style={{
              fontFamily: "'Bebas Neue', cursive",
              fontSize: 13,
              color: '#EC4899',
              letterSpacing: '3px',
            }}>
              INGREDIENTES
            </span>
            <div style={{ flex: 1, height: 1, background: 'rgba(236,72,153,0.3)' }} />
          </div>

          {/* Grid de ingredientes */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 10,
          }}>
            {producto.ingredientes.map((ing, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(236,72,153,0.08)',
                  border: '1px solid rgba(236,72,153,0.2)',
                  borderRadius: 14,
                  padding: '12px 10px',
                  textAlign: 'center',
                  animation: `fade-in-up 0.4s ease both`,
                  animationDelay: `${i * 60 + 100}ms`,
                }}
              >
                <div style={{ fontSize: 28, marginBottom: 6 }}>{ing.icono}</div>
                <div style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: 12,
                  color: 'rgba(249,168,212,0.8)',
                  lineHeight: 1.3,
                }}>
                  {ing.nombre}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
