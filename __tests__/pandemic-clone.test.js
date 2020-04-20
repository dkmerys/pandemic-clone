import { Pandemic } from '../src/pandemic-clone.js'

describe('Pandemic', () => {

  test('should create new player object', () => {
    let pandemic = new Pandemic;
    expect(pandemic.person).toEqual()
  })
  test('should create new Virus with base number of 20', () => {
    let pandemic = new Pandemic;
    pandemic.virus = 20;
    expect(pandemic.virus).toEqual(20)
  })
})