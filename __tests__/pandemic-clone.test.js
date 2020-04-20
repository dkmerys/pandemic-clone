import { Pandemic } from '../src/pandemic-clone.js'
import { Player } from '../src/pandemic-clone.js'
import { Virus } from '../src/pandemic-clone.js'
import { City } from '../src/pandemic-clone.js'

describe('Pandemic', () => {
  jest.useFakeTimers();
  let pandemic;
  let player;
  let virus;
  let city;

  beforeEach(function() {
    player = new Player("Scientist")
    virus = new Virus(10,10);
    city = new City(100);
    pandemic = new Pandemic(player, virus, city);
  });

  afterEach(function(){
    jest.clearAllTimers();
  });

  test('should create new player object', () => {
    expect(pandemic.person).toEqual()
  })
  test('should create new Virus with base number of 10', () => {
  
    expect(player.profession).toEqual("Scientist")
    expect(virus.infected).toEqual(10)
    expect(city.population).toEqual(100)
  })
  test('virus infected to increase to 15 after 60000 milliseconds', () => {
    pandemic.setInfected();
    jest.advanceTimersByTime(60001);
    expect(pandemic.virus.infected).toEqual(15);
  });
});