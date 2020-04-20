export class Pandemic {

  constructor(player, virus, city) {
    this.player = player;
    this.virus = virus;
    this.city = city;
  }
  
  setInfected() {
    if (this.virus.infected >= 80) {
      setTimeout(() => {
        this.virus.infected +=5;
        this.setInfected();
      }, 20000);
    } else if (this.virus.infected >= 40) {
      setTimeout(() => {
        this.virus.infected +=5;
        this.setInfected();
      }, 30000);
    } else if (this.virus.infected >= 20) {
      setTimeout(() => {
        this.virus.infected +=5;
        this.setInfected();
      }, 45000);
    } else if (this.virus.infected < 20) {
      setTimeout(() => {
        this.virus.infected += 5;
        this.setInfected();
      }, 60000);
    };
  };

  sanitize() {
    this.virus.infected -= 1;
  };
  
  ppe() {
    this.virus.infected -= 5;
  };

  quarantine() {
    setInterval(() => {
      this.virus.infected -= 3;
    }, 60000);
  }
  
}
export class Player {
  constructor(profession) {
    this.profession = profession;
  }
}

export class Virus {
  constructor(infected, speed) {
    this.infected = infected;
    this.speed = speed;
  }
}

export class City {
  constructor(population) {
    this.population = population;
  }
}


// let myPlayer = new Player("asdf");
// let myVirus = new Virus(5, 3);
// let myCity = new City(20);

// let myPandemic = new Pandemic(myPlayer, myvirus, myCity);

// console.log(myPandemic.virus.infected);

// setHunger() {
//   setInterval(() => {
//     this.foodLevel--;
//   }, 1000);
// }