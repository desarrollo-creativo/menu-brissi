import { useState } from 'react';

export default function BeverageCard({ bebida, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#2d1020' : '#1e0811',
        border: `1px solid ${hovered ? 'rgba(236,72,153,0.5)' : 'rgba(236,72,153,0.18)'}`,
        borderRadius: 16,
        padding: '20px 12px',
        textAlign: 'center',
        cursor: 'default',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: hovered
          ? '0 6px 24px rgba(236,72,153,0.2)'
          : '0 2px 10px rgba(0,0,0,0.3)',
        transition: 'all 0.3s ease',
        animation: `fade-in-up 0.5s ease both`,
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div style={{ fontSize: 40, marginBottom: 10 }}>{bebida.icono}</div>
      <div style={{
        fontFamily: "'Bebas Neue', cursive",
        fontSize: 16,
        color: '#fff',
        letterSpacing: '0.5px',
        marginBottom: 6,
      }}>
        {bebida.nombre}
      </div>
      <div style={{
        fontFamily: "'Bebas Neue', cursive",
        fontSize: 18,
        color: '#EC4899',
        letterSpacing: '0.5px',
      }}>
        {bebida.precio}
      </div>
    </div>
  );
}
