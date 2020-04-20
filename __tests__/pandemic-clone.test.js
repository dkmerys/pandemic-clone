import { Pandemic } from '../src/pandemic-clone.js'
import { Player } from '../src/pandemic-clone.js'
import { Virus } from '../src/pandemic-clone.js'
import { City } from '../src/pandemic-clone.js'

describe('Pandemic', () => {

  test('should create new player object', () => {
    let pandemic = new Pandemic;
    expect(pandemic.person).toEqual()
  })
  test('should create new Virus with base number of 20', () => {
    let virus = new Virus(9,9);
    let player = new Player("Circus Clown");
    let city = new City(9);
    expect(player.profession).toEqual("Scientist")
    expect(virus.potency).toEqual(10)
    expect(city.population).toEqual(10)
  })
})