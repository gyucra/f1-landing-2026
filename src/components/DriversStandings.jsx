// ================================
// DRIVERS STANDINGS - Consume el hook useF1Data
// Muestra la tabla de pilotos con datos reales de la API
// ================================

import { useF1Data } from '../hooks/useF1Data'

// Colores por equipo para las barras
const teamColors = {
  'Mercedes': '#00D2BE',
  'Ferrari': '#DC0000',
  'McLaren': '#FF8000',
  'Red Bull': '#3671C6',
  'Aston Martin': '#358C75',
  'Sauber': '#B5B5B5',
  'Alpine': '#0090FF',
  'Williams': '#005AFF',
  'Haas F1 Team': '#B6BABD',
  'RB F1 Team': '#6692FF',
  'Cadillac': '#333333',
}

function DriversStandings() {
  const { drivers, loading, error } = useF1Data()

  if (loading) return (
    <section id="pilotos" style={{ background: '#0f0f1a', padding: '4rem 2rem', textAlign: 'center' }}>
      <p style={{ color: '#a0aec0', fontSize: '1.2rem' }}>🔄 Cargando standings...</p>
    </section>
  )

  if (error) return (
    <section id="pilotos" style={{ background: '#0f0f1a', padding: '4rem 2rem', textAlign: 'center' }}>
      <p style={{ color: '#e10600' }}>❌ {error}</p>
    </section>
  )

  // Puntos máximos para calcular el ancho de las barras
  const maxPuntos = drivers[0]?.points ? parseInt(drivers[0].points) : 100

  return (
    <section id="pilotos" style={{
      background: '#0f0f1a',
      padding: '5rem 2rem',
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* Título sección */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{
            background: '#e10600',
            color: 'white',
            padding: '4px 16px',
            borderRadius: '20px',
            fontSize: '0.8rem',
            fontWeight: 'bold',
            letterSpacing: '2px',
            textTransform: 'uppercase'
          }}>
            Campeonato
          </span>
          <h2 style={{
            color: 'white',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: '900',
            margin: '1rem 0 0.5rem',
            textTransform: 'uppercase'
          }}>
            🏆 Standings Pilotos
          </h2>
          <p style={{ color: '#a0aec0' }}>Actualizado automáticamente desde la API oficial</p>
        </div>

        {/* Tabla */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {drivers.map((driver, index) => {
            const nombre = `${driver.Driver.givenName} ${driver.Driver.familyName}`
            const equipo = driver.Constructors[0]?.name || 'N/A'
            const puntos = parseInt(driver.points)
            const color = teamColors[equipo] || '#666'
            const porcentaje = (puntos / maxPuntos) * 100

            return (
              <div key={driver.Driver.driverId} style={{
                background: index === 0 ? 'rgba(225, 6, 0, 0.1)' : 'rgba(255,255,255,0.03)',
                border: `1px solid ${index === 0 ? '#e10600' : 'rgba(255,255,255,0.08)'}`,
                borderRadius: '12px',
                padding: '1rem 1.5rem',
                display: 'grid',
                gridTemplateColumns: '40px 1fr auto',
                alignItems: 'center',
                gap: '1rem',
                transition: 'transform 0.2s',
                cursor: 'default'
              }}
                onMouseOver={e => e.currentTarget.style.transform = 'translateX(4px)'}
                onMouseOut={e => e.currentTarget.style.transform = 'translateX(0)'}
              >
                {/* Posición */}
                <div style={{
                  fontSize: index < 3 ? '1.5rem' : '1.2rem',
                  fontWeight: '900',
                  color: index === 0 ? '#e10600' : index === 1 ? '#silver' : '#a0aec0',
                  textAlign: 'center'
                }}>
                  {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : driver.position}
                </div>

                {/* Nombre y equipo */}
                <div>
                  <div style={{
                    color: 'white',
                    fontWeight: '700',
                    fontSize: '1rem',
                    marginBottom: '4px'
                  }}>
                    {nombre}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {/* Barra de color del equipo */}
                    <div style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '2px',
                      background: color,
                      flexShrink: 0
                    }} />
                    <span style={{ color: '#a0aec0', fontSize: '0.85rem' }}>{equipo}</span>
                  </div>
                  {/* Barra de progreso */}
                  <div style={{
                    marginTop: '6px',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '4px',
                    height: '4px',
                    width: '100%'
                  }}>
                    <div style={{
                      width: `${porcentaje}%`,
                      height: '100%',
                      background: color,
                      borderRadius: '4px',
                      transition: 'width 1s ease'
                    }} />
                  </div>
                </div>

                {/* Puntos */}
                <div style={{
                  fontSize: '1.8rem',
                  fontWeight: '900',
                  color: index === 0 ? '#e10600' : 'white',
                  minWidth: '60px',
                  textAlign: 'right'
                }}>
                  {puntos}
                  <div style={{ fontSize: '0.7rem', color: '#a0aec0', fontWeight: 'normal' }}>pts</div>
                </div>

              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default DriversStandings