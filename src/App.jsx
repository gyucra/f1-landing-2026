import { useState } from 'react'
import DriversStandings from './components/DriversStandings'
import ConstructorsStandings from './components/ConstructorsStandings'
import Calendar from './components/Calendar'
import Teams from './components/Teams'

const tabs = [
  { id: 'home', label: '🏠 Inicio' },
  { id: 'pilotos', label: '🏆 Pilotos' },
  { id: 'constructores', label: '🏗️ Constructores' },
  { id: 'calendario', label: '🗺️ Calendario' },
  { id: 'equipos', label: '🏎️ Equipos' },
]

function App() {
  const [activeTab, setActiveTab] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  const handleTab = (id) => {
    setActiveTab(id)
    setMenuOpen(false)
  }

  return (
    <div style={{ background: '#0f0f1a', minHeight: '100vh' }}>

      {/* ESTILOS RESPONSIVE — solo afectan mobile */}
      <style>{`
        @media (max-width: 640px) {
          .nav-tabs { display: none !important; }
          .nav-hamburger { display: flex !important; }
          .stats-wrap { gap: 1.5rem !important; }
          .stats-wrap > div { min-width: 80px; }
        }
      `}</style>

      {/* NAVBAR FLOTANTE — igual que antes, solo se agrega hamburguesa */}
      <nav style={{
        position: 'fixed',
        top: '16px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        background: 'rgba(10,10,20,0.85)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: '50px',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '6px 6px 6px 20px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        whiteSpace: 'nowrap'
      }}>
        {/* Logo — igual */}
        <div
          onClick={() => handleTab('home')}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', marginRight: '8px' }}
        >
          <span style={{ fontSize: '1.2rem' }}>🏁</span>
          <span style={{ color: 'white', fontWeight: '900', fontSize: '1rem', letterSpacing: '-1px', textTransform: 'uppercase' }}>
            F1 <span style={{ color: '#e10600' }}>2026</span>
          </span>
        </div>

        <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.15)', margin: '0 4px' }} />

        {/* Tabs desktop — se ocultan en mobile */}
        <div className="nav-tabs" style={{ display: 'flex', gap: '0.5rem' }}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => handleTab(tab.id)}
              style={{
                background: activeTab === tab.id ? '#e10600' : 'transparent',
                color: activeTab === tab.id ? 'white' : '#a0aec0',
                border: 'none', padding: '8px 16px', borderRadius: '40px',
                cursor: 'pointer', fontWeight: activeTab === tab.id ? '700' : '500',
                fontSize: '1.2rem', transition: 'all 0.2s',
              }}
              onMouseOver={e => { if (activeTab !== tab.id) { e.currentTarget.style.color = 'white'; e.currentTarget.style.background = 'rgba(255,255,255,0.08)' } }}
              onMouseOut={e => { if (activeTab !== tab.id) { e.currentTarget.style.color = '#a0aec0'; e.currentTarget.style.background = 'transparent' } }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Hamburguesa — solo visible en mobile */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: menuOpen ? '#e10600' : 'rgba(255,255,255,0.1)',
            border: 'none', color: 'white', borderRadius: '50%',
            width: '36px', height: '36px', fontSize: '1.1rem',
            cursor: 'pointer', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0
          }}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* MENÚ MOBILE DESPLEGABLE */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: '70px', left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 999,
          background: 'rgba(10,10,20,0.97)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: '20px',
          padding: '8px',
          width: '85vw',
          boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px'
        }}>
          {tabs.map(tab => (
            <button key={tab.id} onClick={() => handleTab(tab.id)} style={{
              background: activeTab === tab.id ? '#e10600' : 'transparent',
              color: activeTab === tab.id ? 'white' : '#a0aec0',
              border: 'none', padding: '12px 16px', borderRadius: '12px',
              cursor: 'pointer', fontWeight: activeTab === tab.id ? '700' : '500',
              fontSize: '0.95rem', textAlign: 'left', transition: 'all 0.2s'
            }}>
              {tab.label}
            </button>
          ))}
        </div>
      )}

      <div>
        {activeTab === 'home' && (
          <section style={{ position: 'relative', maxWidth: '2000px', height: '100vh' }}>

            {/* VIDEO — igual que antes */}
            <iframe
              src="https://www.youtube.com/embed/YxzIwX5g_eY?si=lH0ScEgCoyxmeZXb&autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{
                position: 'absolute',
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%) scale(1.5)',
                width: '100vw', height: '100vh',
                border: 'none',
                pointerEvents: 'auto'
              }}
            />

            {/* Overlay — igual que antes */}
            <div style={{
              position: 'absolute', inset: 0,
            }} />

            {/* Contenido — igual que antes */}
            <div style={{
              position: 'absolute', inset: 0,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'space-evenly',
              padding: '0 2rem 5rem', textAlign: 'center'
            }}>
              <span style={{
                background: '#e10600', color: 'white', padding: '6px 20px',
                borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold',
                letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem'
              }}>🏁 Temporada 2026</span>

              <h1 style={{
                fontSize: 'clamp(3rem, 10vw, 7rem)', fontWeight: '900',
                color: 'white', margin: '0 0 1rem',
                textTransform: 'uppercase', letterSpacing: '-3px',
                textShadow: '0 4px 20px rgba(0,0,0,0.5)'
              }}>
                FORMULA <span style={{ color: '#e10600' }}>1</span>
              </h1>

              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', maxWidth: '500px', marginBottom: '2.5rem' }}>
                Todo sobre los <strong style={{ color: 'white' }}>11 equipos</strong>, standings y calendario de la temporada
              </p>

              {/* Stats — en mobile se ajustan solos con flexWrap */}
              <div className="stats-wrap" style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                {[
                  { numero: '11', label: 'Equipos' },
                  { numero: '22', label: 'Pilotos' },
                  { numero: '22', label: 'Carreras' },
                  { numero: '4', label: 'GPs disputados' },
                ].map(stat => (
                  <div key={stat.label} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#e10600', textShadow: '0 2px 10px rgba(225,6,0,0.5)' }}>
                      {stat.numero}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeTab === 'pilotos' && <div style={{ paddingTop: '80px' }}><DriversStandings /></div>}
        {activeTab === 'constructores' && <div style={{ paddingTop: '80px' }}><ConstructorsStandings /></div>}
        {activeTab === 'calendario' && <div style={{ paddingTop: '80px' }}><Calendar /></div>}
        {activeTab === 'equipos' && <div style={{ paddingTop: '80px' }}><Teams /></div>}
      </div>
    </div>
  )
}

export default App