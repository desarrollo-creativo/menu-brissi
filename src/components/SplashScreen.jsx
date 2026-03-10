import { useState, useEffect } from 'react';

export default function SplashScreen({ onDone }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 100);
    const t2 = setTimeout(() => setPhase(2), 800);
    const t3 = setTimeout(() => setPhase(3), 2200);
    const t4 = setTimeout(() => onDone(), 2800);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, [onDone]);

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'radial-gradient(ellipse at center, #2d0a1e 0%, #0f0408 70%)',
      transition: 'opacity 0.6s ease',
      opacity: phase === 3 ? 0 : 1,
      pointerEvents: phase === 3 ? 'none' : 'all',
    }}>

      {/* Anillos pulsantes */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{
          width: 'min(92vw, 320px)', height: 'min(92vw, 320px)',
          borderRadius: '50%',
          border: '1px solid rgba(236,72,153,0.15)',
          animation: 'pulse-ring 3s ease-in-out infinite',
          position: 'absolute',
        }} />
        <div style={{
          width: 'min(65vw, 220px)', height: 'min(65vw, 220px)',
          borderRadius: '50%',
          border: '1px solid rgba(236,72,153,0.25)',
          animation: 'pulse-ring 3s ease-in-out infinite 0.5s',
          position: 'absolute',
        }} />
      </div>

      {/* Logo */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        transition: 'opacity 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
        opacity: phase >= 1 ? 1 : 0,
        transform: phase >= 1 ? 'scale(1) translateY(0)' : 'scale(0.7) translateY(20px)',
      }}>
        <img
          src="/images/logo.avif"
          alt="El Sazón de Brissi"
          style={{
            width: 'min(80vw, 260px)',
            height: 'min(80vw, 260px)',
            objectFit: 'contain',
            filter: 'drop-shadow(0 0 24px rgba(236,72,153,0.7)) drop-shadow(0 0 48px rgba(236,72,153,0.3))',
          }}
        />
      </div>

      {/* Texto */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        marginTop: 24,
        textAlign: 'center',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
        opacity: phase >= 2 ? 1 : 0,
        transform: phase >= 2 ? 'translateY(0)' : 'translateY(12px)',
      }}>
        <p style={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: 18,
          color: 'rgba(249,168,212,0.85)',
          marginBottom: 4,
        }}>
          Ven a probar el
        </p>
        <p style={{
          fontFamily: "'Bebas Neue', cursive",
          fontSize: 28,
          color: '#EC4899',
          letterSpacing: '4px',
        }}>
          verdadero sabor ✨
        </p>
      </div>

      {/* Dots de carga */}
      <div style={{
        display: 'flex',
        gap: 8,
        marginTop: 40,
        position: 'relative',
        zIndex: 1,
        opacity: phase >= 2 ? 1 : 0,
        transition: 'opacity 0.4s ease',
      }}>
        {[0, 1, 2].map(i => (
          <div key={i} style={{
            width: 8, height: 8,
            borderRadius: '50%',
            background: '#EC4899',
            animation: `bounce-dot 1.4s ease-in-out ${i * 0.16}s infinite`,
          }} />
        ))}
      </div>
    </div>
  );
}
