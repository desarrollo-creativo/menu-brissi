export default function CategoryTabs({ activeTab, onTabChange }) {
  const tabs = [
    { id: 'comidas', label: '🍽️ Comidas' },
    { id: 'bebidas', label: '🥤 Bebidas' },
  ];

  return (
    <div style={{
      display: 'flex',
      gap: 10,
      padding: '0 16px',
      marginBottom: 20,
    }}>
      {tabs.map(tab => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            style={{
              flex: 1,
              padding: '10px 0',
              borderRadius: 12,
              border: isActive ? 'none' : '1px solid rgba(236,72,153,0.25)',
              background: isActive
                ? 'linear-gradient(135deg, #EC4899, #BE185D)'
                : 'rgba(236,72,153,0.08)',
              color: isActive ? '#fff' : 'rgba(249,168,212,0.6)',
              fontFamily: "'Bebas Neue', cursive",
              fontSize: 17,
              letterSpacing: '1.5px',
              cursor: 'pointer',
              boxShadow: isActive ? '0 4px 18px rgba(236,72,153,0.45)' : 'none',
              transition: 'all 0.3s ease',
              outline: 'none',
            }}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
