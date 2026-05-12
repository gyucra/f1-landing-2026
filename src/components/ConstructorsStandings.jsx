import { useF1Data } from '../hooks/useF1Data'

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

function ConstructorsStandings() {
  const { constructors, loading, error } = useF1Data()

  if (loading) return (
    <section id="constructores" style={{ background: '#0a0a14', padding: '4rem 2rem', textAlign: 'center' }}>
      <p style={{ color: '#a0aec0' }}>🔄 Cargando constructores...</p>
    </section>
  )

  if (error) return (
    <section id="constructores" style={{ background: '#0a0a14', padding: '4rem 2rem', textAlign: 'center' }}>
      <p style={{ color: '#e10600' }}>❌ {error}</p>
    </section>
  )

  const maxPuntos = constructors[0]?.points ? parseInt(constructors[0].points) : 100

  return (
    <section id="constructores" style={{
      background: '#0a0a14',
      padding: '5rem 2rem',
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* Título */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{
            background: '#ff8000',
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
            🏗️ Standings Constructores
          </h2>
          <p style={{ color: '#a0aec0' }}>Clasificación por equipos — Temporada 2026</p>
        </div>

        {/* Cards de equipos */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
          gap: '1rem'
        }}>
          {constructors.map((constructor, index) => {
            const nombre = constructor.Constructor.name
            const puntos = parseInt(constructor.points)
            const color = teamColors[nombre] || '#666'
            const porcentaje = (puntos / maxPuntos) * 100

            return (
              <div key={constructor.Constructor.constructorId} style={{
                background: index === 0 ? `${color}15` : 'rgba(255,255,255,0.03)',
                border: `1px solid ${index === 0 ? color : 'rgba(255,255,255,0.08)'}`,
                borderRadius: '12px',
                padding: '1.25rem 1.5rem',
                borderLeft: `4px solid ${color}`,
                transition: 'transform 0.2s',
              }}
                onMouseOver={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    {/* Posición */}
                    <span style={{
                      fontSize: '1.2rem',
                      fontWeight: '900',
                      color: index === 0 ? color : '#a0aec0',
                      minWidth: '30px'
                    }}>
                      {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `${constructor.position}.`}
                    </span>
                    {/* Nombre equipo */}
                    <span style={{
                      color: 'white',
                      fontWeight: '700',
                      fontSize: '1rem'
                    }}>
                      {nombre}
                    </span>
                  </div>
                  {/* Puntos */}
                  <span style={{
                    fontSize: '1.8rem',
                    fontWeight: '900',
                    color: color
                  }}>
                    {puntos}
                    <span style={{ fontSize: '0.7rem', color: '#a0aec0', fontWeight: 'normal' }}> pts</span>
                  </span>
                </div>

                {/* Barra de progreso */}
                <div style={{
                  background: 'rgba(255,255,255,0.08)',
                  borderRadius: '4px',
                  height: '6px',
                }}>
                  <div style={{
                    width: `${porcentaje}%`,
                    height: '100%',
                    background: color,
                    borderRadius: '4px',
                    transition: 'width 1s ease'
                  }} />
                </div>

                {/* Pilotos */}
                <div style={{ marginTop: '0.5rem', color: '#a0aec0', fontSize: '0.8rem' }}>
                  {constructor.Constructor.nationality} · {puntos} puntos
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ConstructorsStandings