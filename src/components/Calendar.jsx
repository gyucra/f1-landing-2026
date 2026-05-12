import { useState, useEffect } from 'react'

function Calendar() {
  const [races, setRaces] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://api.jolpi.ca/ergast/f1/2026/races/')
      .then(r => r.json())
      .then(data => {
        const lista = data?.MRData?.RaceTable?.Races || []
        setRaces(lista)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  // Saber si una carrera ya pasó
  const yaPaso = (fecha) => new Date(fecha) < new Date()

  if (loading) return (
    <section id="calendario" style={{ background: '#080812', padding: '4rem 2rem', textAlign: 'center' }}>
      <p style={{ color: '#a0aec0' }}>🔄 Cargando calendario...</p>
    </section>
  )

  return (
    <section id="calendario" style={{ background: '#080812', padding: '5rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Título */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{
            background: '#ff8000', color: 'white', padding: '4px 16px',
            borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold',
            letterSpacing: '2px', textTransform: 'uppercase'
          }}>Temporada 2026</span>
          <h2 style={{
            color: 'white', fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: '900', margin: '1rem 0 0.5rem', textTransform: 'uppercase'
          }}>🗺️ Calendario de Carreras</h2>
          <p style={{ color: '#a0aec0' }}>{races.length} Grandes Premios · Datos via Jolpica API</p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '1rem'
        }}>
          {races.map((race) => {
            const completada = yaPaso(race.date)
            return (
              <div key={race.round} style={{
                borderRadius: '12px',
                border: `1px solid ${completada ? 'rgba(74,222,128,0.3)' : 'rgba(255,255,255,0.08)'}`,
                background: completada ? 'rgba(74,222,128,0.05)' : 'rgba(255,255,255,0.02)',
                padding: '1.25rem',
                transition: 'transform 0.2s',
              }}
                onMouseOver={e => e.currentTarget.style.transform = 'translateY(-3px)'}
                onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                {/* Ronda + estado */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ color: '#a0aec0', fontSize: '0.75rem' }}>R{race.round}</span>
                  <span style={{
                    fontSize: '0.7rem', padding: '2px 8px', borderRadius: '10px',
                    background: completada ? 'rgba(74,222,128,0.15)' : 'rgba(96,165,250,0.15)',
                    color: completada ? '#4ade80' : '#60a5fa', fontWeight: 'bold'
                  }}>
                    {completada ? '✅ Finalizada' : '🔜 Próxima'}
                  </span>
                </div>

                {/* Nombre */}
                <h3 style={{ color: 'white', fontWeight: '700', fontSize: '0.95rem', margin: '0 0 6px' }}>
                  {race.raceName}
                </h3>

                {/* Circuito y ciudad */}
                <p style={{ color: '#a0aec0', fontSize: '0.8rem', margin: '0 0 4px' }}>
                  📍 {race.Circuit.circuitName}
                </p>
                <p style={{ color: '#a0aec0', fontSize: '0.8rem', margin: '0 0 8px' }}>
                  🌍 {race.Circuit.Location.locality}, {race.Circuit.Location.country}
                </p>

                {/* Fecha */}
                <div style={{
                  color: completada ? '#4ade80' : '#60a5fa',
                  fontSize: '0.85rem', fontWeight: 'bold'
                }}>
                  📅 {new Date(race.date).toLocaleDateString('es-ES', {
                    day: 'numeric', month: 'long', year: 'numeric'
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Calendar