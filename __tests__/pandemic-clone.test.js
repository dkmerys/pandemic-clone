import { Pandemic } from '../src/pandemic-clone.js'
import { Player } from '../src/pandemic-clone.js'
import { Virus } from '../src/pandemic-clone.js'
import { City } from '../src/pandemic-clone.js'

describe('Pandemic', () => {

  test('should create new player object', () => {
    let pandemic = new Pandemic;
    expect(pandemic.person).toEqual()
  })
  test('should create new Virus with base number of 10', () => {
    let virus = new Virus(10, 10);
    let player = new Player("Scientist");
    let city = new City(10);
    expect(player.profession).toEqual("Scientist")
    expect(virus.potency).toEqual(10)
    expect(city.population).toEqual(10)
  })
})