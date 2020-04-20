export class Pandemic {

  constructor(player, virus, city) {
    this.player = player;
    this.virus = virus;
    this.city = city;
  }
}
export class Player {
  constructor(profession) {
    this.profession = profession;
  }
}

export class Virus {
  constructor(potency, speed) {
    this.potency = potency;
    this.speed = speed;
  }
}

export class City {
  constructor(population) {
    this.population = population;
  }
}
