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
  const [soundActivated, setSoundActivated] = useState(false)

  const activateSound = () => {
    setSoundActivated(true)
  }

  return (
    <div style={{ background: '#0f0f1a', minHeight: '100vh' }}>

      {/* NAVBAR FLOTANTE */}
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
        <div
          onClick={() => setActiveTab('home')}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', marginRight: '8px' }}
        >
          <span style={{ fontSize: '1.2rem' }}>🏁</span>
          <span style={{ color: 'white', fontWeight: '900', fontSize: '1rem', letterSpacing: '-1px', textTransform: 'uppercase' }}>
            F1 <span style={{ color: '#e10600' }}>2026</span>
          </span>
        </div>
        <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.15)', margin: '0 4px' }} />
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              background: activeTab === tab.id ? '#e10600' : 'transparent',
              color: activeTab === tab.id ? 'white' : '#a0aec0',
              border: 'none', padding: '8px 16px', borderRadius: '40px',
              cursor: 'pointer', fontWeight: activeTab === tab.id ? '700' : '500',
              fontSize: '0.85rem', transition: 'all 0.2s',
            }}
            onMouseOver={e => { if (activeTab !== tab.id) { e.currentTarget.style.color = 'white'; e.currentTarget.style.background = 'rgba(255,255,255,0.08)' } }}
            onMouseOut={e => { if (activeTab !== tab.id) { e.currentTarget.style.color = '#a0aec0'; e.currentTarget.style.background = 'transparent' } }}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <div>
        {activeTab === 'home' && (
          <section style={{ position: 'relative', maxWidth: '2000px', height: '100vh' }}>

            {/* VIDEO */}
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
            {/* Overlay */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(15,15,26,0.9) 100%)'
            }} />

            {/* Botón sonido — si no está activado muestra el prompt */}
            {/* {!soundActivated ? (
              <button
                onClick={activateSound}
                style={{
                  position: 'absolute',
                  bottom: '24px', right: '24px',
                  zIndex: 10,
                  background: 'rgba(225,6,0,0.85)',
                  border: 'none', color: 'white',
                  borderRadius: '30px',
                  padding: '12px 20px',
                  fontSize: '0.9rem', fontWeight: 'bold',
                  cursor: 'pointer',
                  backdropFilter: 'blur(8px)',
                  boxShadow: '0 4px 20px rgba(225,6,0,0.4)',
                  display: 'flex', alignItems: 'center', gap: '8px',
                  animation: 'pulse 2s infinite'
                }}
              >
                🔇 Click para activar sonido
              </button>
            ) : (
              <div style={{
                position: 'absolute',
                bottom: '24px', right: '24px',
                zIndex: 10,
                background: 'rgba(0,0,0,0.5)',
                border: '1px solid rgba(255,255,255,0.2)',
                color: '#4ade80',
                borderRadius: '30px',
                padding: '8px 16px',
                fontSize: '0.8rem',
                backdropFilter: 'blur(8px)',
              }}>
                🔊 Sonido activado
              </div>
            )} */}

            {/* Contenido */}
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

              <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', justifyContent: 'center' }}>
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