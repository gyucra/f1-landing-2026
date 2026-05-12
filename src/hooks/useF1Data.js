// ================================
// HOOK PERSONALIZADO - Consume API Jolpica (reemplazo de Ergast)
// Se llama así: const { drivers, constructors, loading, error } = useF1Data()
// ================================

import { useState, useEffect } from 'react'

const BASE_URL = 'https://api.jolpi.ca/ergast/f1/2026'

export function useF1Data() {
  const [drivers, setDrivers] = useState([])
  const [constructors, setConstructors] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)

        // Hacemos las dos llamadas al mismo tiempo (más rápido)
        const [driversRes, constructorsRes] = await Promise.all([
          fetch(`${BASE_URL}/driverStandings/`),
          fetch(`${BASE_URL}/constructorStandings/`)
        ])

        // Convertimos a JSON
        const driversJson = await driversRes.json()
        const constructorsJson = await constructorsRes.json()

        // Extraemos solo lo que necesitamos
        const driversData = driversJson
          ?.MRData
          ?.StandingsTable
          ?.StandingsLists?.[0]
          ?.DriverStandings || []

        const constructorsData = constructorsJson
          ?.MRData
          ?.StandingsTable
          ?.StandingsLists?.[0]
          ?.ConstructorStandings || []

        setDrivers(driversData)
        setConstructors(constructorsData)

      } catch (err) {
        setError('Error al cargar datos de F1')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, []) // [] = solo se ejecuta una vez al montar el componente

  return { drivers, constructors, loading, error }
}