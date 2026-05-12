import { equiposInfo } from '../data/f1data'

function Teams() {
  return (
    <section id="equipos" style={{
      background: '#0f0f1a',
      padding: '5rem 2rem',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Título */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{
            background: '#3671C6',
            color: 'white',
            padding: '4px 16px',
            borderRadius: '20px',
            fontSize: '0.8rem',
            fontWeight: 'bold',
            letterSpacing: '2px',
            textTransform: 'uppercase'
          }}>
            Escuderías
          </span>
          <h2 style={{
            color: 'white',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: '900',
            margin: '1rem 0 0.5rem',
            textTransform: 'uppercase'
          }}>
            🏎️ Los 11 Equipos
          </h2>
          <p style={{ color: '#a0aec0' }}>Historia y datos de cada escudería en la temporada 2026</p>
        </div>

        {/* Grid de equipos */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '1.5rem'
        }}>
          {Object.entries(equiposInfo).map(([id, equipo]) => (
            <div key={id} style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '16px',
              overflow: 'hidden',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
              onMouseOver={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = `0 8px 30px ${equipo.color}30`
              }}
              onMouseOut={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Header con color del equipo */}
              <div style={{
                background: `linear-gradient(135deg, ${equipo.color}30, ${equipo.color}10)`,
                borderBottom: `3px solid ${equipo.color}`,
                padding: '1.25rem 1.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <div style={{ fontSize: '1.5rem', marginBottom: '2px' }}>{equipo.pais}</div>
                  <h3 style={{
                    color: 'white',
                    fontWeight: '800',
                    fontSize: '1.2rem',
                    margin: 0,
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    {id.replace('_', ' ').toUpperCase()}
                  </h3>
                </div>
                {/* Títulos mundiales */}
                {equipo.titulos > 0 && (
                  <div style={{
                    background: equipo.color,
                    color: 'white',
                    borderRadius: '8px',
                    padding: '6px 12px',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '1.4rem', fontWeight: '900' }}>{equipo.titulos}</div>
                    <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '1px' }}>títulos</div>
                  </div>
                )}
              </div>

              {/* Contenido */}
              <div style={{ padding: '1.25rem 1.5rem' }}>
                {/* Historia */}
                <p style={{
                  color: '#a0aec0',
                  fontSize: '0.9rem',
                  lineHeight: 1.7,
                  margin: '0 0 1rem 0'
                }}>
                  {equipo.historia}
                </p>

                {/* Base */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 12px',
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '8px',
                  fontSize: '0.85rem',
                  color: '#a0aec0'
                }}>
                  📍 <span>{equipo.base}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{
        textAlign: 'center',
        marginTop: '5rem',
        padding: '2rem',
        borderTop: '1px solid rgba(255,255,255,0.08)'
      }}>
        <p style={{ color: '#a0aec0', fontSize: '0.9rem' }}>
          🏁 Datos actualizados via <strong style={{ color: 'white' }}>Jolpica API</strong> · Temporada F1 2026
        </p>
      </div>
    </section>
  )
}

export default Teams