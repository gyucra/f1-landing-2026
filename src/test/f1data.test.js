import { describe, it, expect } from 'vitest'
import { equiposInfo } from '../data/f1data'


describe('equiposInfo', () => {

  it('debe tener 11 equipos', () => {
    const totalEquipos = Object.keys(equiposInfo).length
    expect(totalEquipos).toBe(11)
  })

  it('cada equipo debe tener las propiedades requeridas', () => {
    Object.entries(equiposInfo).forEach(([id, equipo]) => {
      expect(equipo).toHaveProperty('color')
      expect(equipo).toHaveProperty('historia')
      expect(equipo).toHaveProperty('titulos')
      expect(equipo).toHaveProperty('base')
      expect(equipo).toHaveProperty('pais')
    })
  })

  it('Mercedes debe tener 9 títulos', () => {
    expect(equiposInfo.mercedes.titulos).toBe(9)
  })

  it('Ferrari debe tener 16 títulos', () => {
    expect(equiposInfo.ferrari.titulos).toBe(16)
  })

  it('el color de cada equipo debe ser un hex válido', () => {
    const hexRegex = /^#[0-9A-Fa-f]{6}$/
    Object.entries(equiposInfo).forEach(([id, equipo]) => {
      expect(equipo.color).toMatch(hexRegex)
    })
  })

  it('ningún equipo debe tener historia vacía', () => {
    Object.entries(equiposInfo).forEach(([id, equipo]) => {
      expect(equipo.historia.trim()).not.toBe('')
      expect(equipo.historia.length).toBeGreaterThan(20)
    })
  })

  it('Cadillac debe tener 0 títulos', () => {
    expect(equiposInfo.cadillac.titulos).toBe(0)
  })

})