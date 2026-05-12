import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// ================================
// Mock del hook useF1Data
// No hacemos llamadas reales a la API en los tests
// ================================
vi.mock('../hooks/useF1Data', () => ({
  useF1Data: () => ({
    drivers: [
      {
        position: '1',
        Driver: { driverId: 'antonelli', givenName: 'Kimi', familyName: 'Antonelli' },
        Constructors: [{ name: 'Mercedes' }],
        points: '100'
      },
      {
        position: '2',
        Driver: { driverId: 'russell', givenName: 'George', familyName: 'Russell' },
        Constructors: [{ name: 'Mercedes' }],
        points: '80'
      }
    ],
    constructors: [
      {
        position: '1',
        Constructor: { constructorId: 'mercedes', name: 'Mercedes', nationality: 'German' },
        points: '180'
      }
    ],
    loading: false,
    error: null
  })
}))

import DriversStandings from '../components/DriversStandings'
import ConstructorsStandings from '../components/ConstructorsStandings'
import Teams from '../components/Teams'

// ================================
// TESTS DriversStandings
// ================================
describe('DriversStandings', () => {

  it('debe renderizar el título', () => {
    render(<DriversStandings />)
    expect(screen.getByText(/Standings Pilotos/i)).toBeInTheDocument()
  })

  it('debe mostrar los pilotos', () => {
    render(<DriversStandings />)
    expect(screen.getByText('Kimi Antonelli')).toBeInTheDocument()
    expect(screen.getByText('George Russell')).toBeInTheDocument()
  })

  it('debe mostrar los puntos', () => {
    render(<DriversStandings />)
    expect(screen.getByText('100')).toBeInTheDocument()
    expect(screen.getByText('80')).toBeInTheDocument()
  })

  it('debe mostrar el equipo Mercedes', () => {
    render(<DriversStandings />)
    const mercedesElements = screen.getAllByText('Mercedes')
    expect(mercedesElements.length).toBeGreaterThan(0)
  })

})

// ================================
// TESTS ConstructorsStandings
// ================================
describe('ConstructorsStandings', () => {

  it('debe renderizar el título', () => {
    render(<ConstructorsStandings />)
    expect(screen.getByText(/Standings Constructores/i)).toBeInTheDocument()
  })

  it('debe mostrar Mercedes con 180 puntos', () => {
    render(<ConstructorsStandings />)
    expect(screen.getByText('Mercedes')).toBeInTheDocument()
    expect(screen.getByText('180')).toBeInTheDocument()
  })

})

// ================================
// TESTS Teams
// ================================
describe('Teams', () => {

  it('debe renderizar el título de equipos', () => {
    render(<Teams />)
    expect(screen.getByText(/Los 11 Equipos/i)).toBeInTheDocument()
  })

  it('debe mostrar Ferrari', () => {
    render(<Teams />)
    expect(screen.getByText(/FERRARI/i)).toBeInTheDocument()
  })

  it('debe mostrar Mercedes', () => {
    render(<Teams />)
    expect(screen.getByText(/MERCEDES/i)).toBeInTheDocument()
  })

  it('debe mostrar la base de Ferrari', () => {
    render(<Teams />)
    expect(screen.getByText(/Maranello/i)).toBeInTheDocument()
  })

})