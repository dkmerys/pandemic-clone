export class Pandemic {
  
  constructor(player, virus, city) {
    this.player = player;
    this.virus = virus;
    this.city = city;
  }
  
  Outbreak() {
    setTimeout(() => {
      this.city.setInfected();
    },45000);
  }
  
  sanitize() {
    this.city.infected -= 1;
  };
  
  ppe() {
    this.city.infected -= 5;
  };
  
  quarantine() {
    setInterval(() => {
      this.city.infected -= 3;
    }, 60000);
  }

  createResearch() {
    this.virus.cure += 1
  };
  
  win() {
    if (this.virus.cure >= 5) {
      alert("You Win!")
    }
  }
  lose() {
    if (this.city.infection >= 100) {
      alert("You Lose!")
    }
  }
}
export class Player {
  constructor(profession, location, inventory) {
    this.profession = profession;
    this.location = location;
    this.inventory = inventory;
  }
}

export class Virus {
  constructor(cure) {
    this.cure = cure;
  }
}

export class City {
  constructor(infected, research) {
    this.infected = infected;
    this.research = research;
    
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
      } else if (this.infected >= 10) {
        setTimeout(() => {
          this.infected += 5;
          this.setInfected();
        }, 60000);
      } else {
        this.infected = 10;
        this.setInfected();
    };
  };
}



