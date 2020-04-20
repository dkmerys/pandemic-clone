export class Pandemic {
  
  constructor(player, virus, city) {
    this.player = player;
    this.virus = virus;
    this.city = city;
  }
  
  portlandOutbreak() {
    setTimeout(() => {
      portland.setInfected(10);
    },45000);
  }
  
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
  constructor(profession, location) {
    this.profession = profession;
    this.location = location
  }
}

export class Virus {
  constructor(cure) {
    this.cure = cure;
  }
}

export class City {
  constructor(infected) {
    this.infected = infected;
    
  }
  setInfected() {
    if (this.infected >= 80) {
      setTimeout(() => {
        this.infected +=5;
        this.setInfected();
      }, 20000);
    } else if (this.infected >= 40) {
      setTimeout(() => {
        this.infected +=5;
        this.setInfected();
      }, 30000);
    } else if (this.infected >= 20) {
      setTimeout(() => {
        this.infected +=5;
        this.setInfected();
      }, 45000);
    } else if (this.infected < 20) {
      setTimeout(() => {
        this.infected += 5;
        this.setInfected();
      }, 60000);
    };
  };
}



