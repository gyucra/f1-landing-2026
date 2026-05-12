// ================================
// HERO - Sección principal de la landing
// Es lo primero que ve el usuario
// ================================

function Hero() {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '2rem',
      position: 'relative',
      overflow: 'hidden'
    }}>

      {/* Línea decorativa animada arriba */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'linear-gradient(90deg, #e10600, #ff8000, #e10600)',
        backgroundSize: '200% 100%',
        animation: 'slideColor 2s linear infinite'
      }} />

      {/* Etiqueta superior */}
      <span style={{
        background: '#e10600',
        color: 'white',
        padding: '6px 20px',
        borderRadius: '20px',
        fontSize: '0.85rem',
        fontWeight: 'bold',
        letterSpacing: '2px',
        marginBottom: '1.5rem',
        textTransform: 'uppercase'
      }}>
        🏁 Temporada 2026
      </span>

      {/* Título principal */}
      <h1 style={{
        fontSize: 'clamp(2.5rem, 8vw, 6rem)',
        fontWeight: '900',
        color: 'white',
        margin: '0 0 1rem 0',
        lineHeight: 1.1,
        textTransform: 'uppercase',
        letterSpacing: '-2px'
      }}>
        FORMULA <span style={{ color: '#e10600' }}>1</span>
      </h1>

      {/* Subtítulo */}
      <p style={{
        fontSize: 'clamp(1rem, 3vw, 1.5rem)',
        color: '#a0aec0',
        maxWidth: '600px',
        margin: '0 0 2.5rem 0',
        lineHeight: 1.6
      }}>
        Todo sobre los <strong style={{ color: 'white' }}>11 equipos</strong>, 
        standings actualizados y la historia de cada escudería
      </p>

      {/* Botones de navegación */}
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <a href="#pilotos" style={{
          background: '#e10600',
          color: 'white',
          padding: '14px 32px',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '1rem',
          transition: 'transform 0.2s',
        }}
          onMouseOver={e => e.target.style.transform = 'scale(1.05)'}
          onMouseOut={e => e.target.style.transform = 'scale(1)'}
        >
          🏆 Ver Standings
        </a>
        <a href="#equipos" style={{
          background: 'transparent',
          color: 'white',
          padding: '14px 32px',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '1rem',
          border: '2px solid white',
          transition: 'transform 0.2s',
        }}
          onMouseOver={e => e.target.style.transform = 'scale(1.05)'}
          onMouseOut={e => e.target.style.transform = 'scale(1)'}
        >
          🏎️ Ver Equipos
        </a>
      </div>

      {/* Stats rápidas */}
      <div style={{
        display: 'flex',
        gap: '3rem',
        marginTop: '4rem',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        {[
          { numero: '11', label: 'Equipos' },
          { numero: '22', label: 'Pilotos' },
          { numero: '24', label: 'Carreras' },
          { numero: '4', label: 'GPs disputados' },
        ].map(stat => (
          <div key={stat.label} style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: '900',
              color: '#e10600'
            }}>
              {stat.numero}
            </div>
            <div style={{
              fontSize: '0.85rem',
              color: '#a0aec0',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Línea decorativa abajo */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'linear-gradient(90deg, #ff8000, #e10600, #ff8000)',
      }} />

    </section>
  )
}

export default Hero