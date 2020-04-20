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
    virus = new Virus(0);
    city = new City(10);
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
    expect(virus.cure).toEqual(0);
    expect(city.infected).toEqual(10);
  })
  test('virus infected to increase to 15 after 60000 milliseconds', () => {
    pandemic.city.setInfected();
    jest.advanceTimersByTime(60001);
    expect(city.infected).toEqual(15);
  });

  test('should decrease virus infected by 5', () => {
    pandemic.sanitize();
    expect(city.infected).toEqual(9);
  })

  test('should decrease virus infected by 1', () => {
    pandemic.sanitize();
    expect(city.infected).toEqual(9);
  })

  test('should decrease virus infected by 5', () => {
    pandemic.ppe();
    expect(city.infected).toEqual(5);
  })
  
  test('quarantine should reduce the rate of infected by 3 per interval', () => {
    pandemic.city.setInfected();
    pandemic.quarantine();
    jest.advanceTimersByTime(60001);
    expect(city.infected).toEqual(12);
  });

  test('should increase infected rate each time infected number doubles', () => {
    city.infected = 20;
    pandemic.city.setInfected();
    jest.advanceTimersByTime(45001);
    expect(city.infected).toEqual(25);
  })

  test('should increase infected rate each time infected number doubles', () => {
    city.infected = 40;
    pandemic.city.setInfected();
    jest.advanceTimersByTime(30000);
    expect(city.infected).toEqual(45);
  })

  test('should increase infected rate each time infected number doubles', () => {
    pandemic.city.infected = 20;
    pandemic.city.setInfected();
    jest.advanceTimersByTime(500001);
    expect(pandemic.city.infected).toEqual(100);
  })
  
  test('city with low population should have higher starting infected population', () => {
    let portland = new City(10);
    let nyc = new City(25)
    portland.setInfected();
    nyc.setInfected();
    jest.advanceTimersByTime(105000);
    expect(portland.infected).toEqual(15);
    expect(nyc.infected).toEqual(35)
  })

  test('will begin outbreak in city after 45 seconds',() => {
    let portland = new City();
    pandemic.Outbreak(portland.setInfected());
    jest.advanceTimersByTime(165001);
    expect(portland.infected).toEqual(20);
  })
});

//20  25  30  35  40  45  50  55  60  65  70  75  80  85  90  95  100
// +45 +45 +45 +45|+30 +30 +30 +30 +30 +30 +30 +30 |+20 +20 +20 +20
//    +180        |             +240               |    +80
//                   total: 500,000 milliseconds