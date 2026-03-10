import { useState } from 'react';

const TAG_COLORS = {
  Picante:   { bg: 'rgba(232,53,10,0.9)',   color: '#fff' },
  Normal:    { bg: 'rgba(236,72,153,0.85)', color: '#fff' },
  Crujiente: { bg: 'rgba(245,158,11,0.9)',  color: '#0f0408' },
  Clásica:   { bg: 'rgba(236,72,153,0.85)', color: '#fff' },
};

export default function ProductCard({ producto, index, onClick }) {
  const [hovered, setHovered] = useState(false);

  const shortDesc = producto.descripcion.length > 60
    ? producto.descripcion.slice(0, 60) + '...'
    : producto.descripcion;

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#2d1020' : '#1e0811',
        border: `1px solid ${hovered ? 'rgba(236,72,153,0.55)' : 'rgba(236,72,153,0.18)'}`,
        borderRadius: 16,
        overflow: 'hidden',
        cursor: 'pointer',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered
          ? '0 8px 32px rgba(236,72,153,0.25)'
          : '0 2px 12px rgba(0,0,0,0.4)',
        transition: 'all 0.3s ease',
        animation: `fade-in-up 0.5s ease both`,
        animationDelay: `${index * 150}ms`,
      }}
    >
      {/* Imagen */}
      <div style={{ position: 'relative', height: 180, overflow: 'hidden' }}>
        <img
          src={producto.imagen}
          alt={producto.nombre}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: hovered ? 'scale(1.08)' : 'scale(1)',
            transition: 'transform 0.5s ease',
            display: 'block',
          }}
        />
        {/* Overlay gradiente */}
        <div style={{
          position: 'absolute',
          bottom: 0, left: 0, right: 0,
          height: '60%',
          background: 'linear-gradient(to top, #1e0811, transparent)',
          pointerEvents: 'none',
        }} />
        {/* Tags */}
        <div style={{
          position: 'absolute',
          top: 10, left: 10,
          display: 'flex',
          gap: 6,
          flexWrap: 'wrap',
        }}>
          {producto.tags.map(tag => {
            const style = TAG_COLORS[tag] || { bg: 'rgba(236,72,153,0.85)', color: '#fff' };
            return (
              <span key={tag} style={{
                background: style.bg,
                color: style.color,
                fontFamily: "'Bebas Neue', cursive",
                fontSize: 11,
                letterSpacing: '1px',
                padding: '2px 8px',
                borderRadius: 20,
              }}>
                {tag}
              </span>
            );
          })}
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: '12px 14px 14px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
          <span style={{
            fontFamily: "'Bebas Neue', cursive",
            fontSize: 20,
            color: '#fff',
            letterSpacing: '0.5px',
          }}>
            {producto.nombre}
          </span>
          <span style={{
            fontFamily: "'Bebas Neue', cursive",
            fontSize: 18,
            color: '#EC4899',
            letterSpacing: '0.5px',
          }}>
            {producto.precio}
          </span>
        </div>

        <p style={{
          fontFamily: "'Nunito', sans-serif",
          fontSize: 13,
          color: 'rgba(249,168,212,0.65)',
          lineHeight: 1.5,
          marginBottom: 10,
        }}>
          {shortDesc}
        </p>

        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 4,
          fontFamily: "'Nunito', sans-serif",
          fontSize: 12,
          fontWeight: 600,
          color: '#EC4899',
        }}>
          Ver ingredientes
          <span style={{
            display: 'inline-block',
            transform: hovered ? 'translateX(4px)' : 'translateX(0)',
            transition: 'transform 0.25s ease',
          }}>→</span>
        </div>
      </div>
    </div>
  );
}
