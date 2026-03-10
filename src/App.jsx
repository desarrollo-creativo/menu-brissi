import { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import CategoryTabs from './components/CategoryTabs';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import BeverageCard from './components/BeverageCard';
import { productos, bebidas } from './data/menu';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeTab, setActiveTab] = useState('comidas');

  return (
    <>
      {/* Splash */}
      {showSplash && <SplashScreen onDone={() => setShowSplash(false)} />}

      {/* Blobs ambientales de fondo */}
      <div style={{ pointerEvents: 'none', position: 'fixed', inset: 0, zIndex: 0, overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          top: -60, right: -60,
          width: 300, height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(236,72,153,0.12) 0%, transparent 70%)',
          animation: 'blob-pulse 8s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute',
          bottom: -40, left: -40,
          width: 250, height: 250,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(190,24,93,0.08) 0%, transparent 70%)',
          animation: 'blob-pulse 10s ease-in-out infinite 1s',
        }} />
      </div>

      {/* Contenedor principal */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: 480,
        margin: '0 auto',
        minHeight: '100vh',
        paddingBottom: 40,
        opacity: showSplash ? 0 : 1,
        transition: 'opacity 0.5s ease 0.1s',
      }}>

        {/* Header */}
        <header style={{
          textAlign: 'center',
          padding: '32px 20px 24px',
          animation: 'fade-in-up 0.6s ease both',
          animationDelay: '0.1s',
        }}>
          <img
            src="/images/logo.avif"
            alt="El Sazón de Brissi"
            style={{
              width: 'min(65vw, 200px)',
              height: 'auto',
              objectFit: 'contain',
              filter: 'drop-shadow(0 0 16px rgba(236,72,153,0.6))',
              animation: 'float 4s ease-in-out infinite',
              marginBottom: 14,
            }}
          />
          <p style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: 18,
            color: 'rgba(249,168,212,0.9)',
            marginBottom: 6,
            lineHeight: 1.3,
          }}>
            Ven a probar el verdadero sabor
          </p>
          <p style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: 12,
            color: 'rgba(249,168,212,0.55)',
            letterSpacing: '0.5px',
          }}>
            📍 Trinidad – Beni, Bolivia
          </p>
        </header>

        {/* Tabs */}
        <CategoryTabs activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Contenido según tab */}
        <div style={{ padding: '0 16px' }}>
          {activeTab === 'comidas' ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {productos.map((producto, i) => (
                <ProductCard
                  key={producto.id}
                  producto={producto}
                  index={i}
                  onClick={() => setSelectedProduct(producto)}
                />
              ))}
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              {bebidas.map((bebida, i) => (
                <BeverageCard key={bebida.nombre} bebida={bebida} index={i} />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <footer style={{
          textAlign: 'center',
          marginTop: 40,
          padding: '20px 16px',
          borderTop: '1px solid rgba(236,72,153,0.15)',
        }}>
          <p style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: 17,
            color: '#EC4899',
            marginBottom: 4,
          }}>
            El Sazón de Brissi
          </p>
          <p style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: 11,
            color: 'rgba(249,168,212,0.4)',
          }}>
            📍 Trinidad – Beni, Bolivia · Menú Digital
          </p>
        </footer>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <ProductModal
          producto={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}
