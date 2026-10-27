import { useState } from 'react';
import { contacto, whatsappUrl } from '../data/contacto';

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Escríbenos por WhatsApp al ${contacto.whatsappVisible}`}
      title="Pedir por WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'fixed',
        right: 18,
        bottom: 'calc(18px + env(safe-area-inset-bottom))',
        zIndex: 40,
        width: 58,
        height: 58,
        borderRadius: '50%',
        background: '#25D366',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: hovered
          ? '0 8px 28px rgba(37,211,102,0.55)'
          : '0 4px 18px rgba(0,0,0,0.45)',
        transform: hovered ? 'scale(1.08)' : 'scale(1)',
        transition: 'all 0.25s ease',
        animation: 'fade-in-up 0.6s ease both',
        animationDelay: '0.6s',
      }}
    >
      <svg width="30" height="30" viewBox="0 0 32 32" fill="#fff" aria-hidden="true">
        <path d="M16.004 3C8.837 3 3.004 8.832 3.004 16c0 2.293.6 4.533 1.74 6.507L3 29l6.66-1.713A12.94 12.94 0 0 0 16.004 29C23.17 29 29 23.168 29 16S23.17 3 16.004 3Zm0 23.636c-2.03 0-4.02-.546-5.756-1.578l-.413-.245-3.952 1.017 1.055-3.85-.27-.427A10.6 10.6 0 0 1 5.367 16c0-5.866 4.772-10.637 10.637-10.637 5.864 0 10.633 4.771 10.633 10.637 0 5.865-4.769 10.636-10.633 10.636Zm5.834-7.966c-.32-.16-1.89-.933-2.183-1.04-.293-.107-.507-.16-.72.16-.213.32-.826 1.04-1.013 1.253-.186.213-.373.24-.693.08-.32-.16-1.35-.498-2.572-1.588-.95-.848-1.592-1.896-1.779-2.216-.186-.32-.02-.493.14-.652.144-.143.32-.373.48-.56.16-.186.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.986-2.373-.26-.624-.524-.54-.72-.55l-.613-.01a1.18 1.18 0 0 0-.853.4c-.293.32-1.12 1.093-1.12 2.666 0 1.573 1.146 3.093 1.306 3.306.16.213 2.256 3.444 5.466 4.83.764.33 1.36.527 1.825.674.767.244 1.465.21 2.017.127.615-.092 1.89-.773 2.157-1.52.267-.746.267-1.386.187-1.52-.08-.133-.293-.213-.613-.373Z" />
      </svg>
    </a>
  );
}
