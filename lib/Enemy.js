const Potion = require('./Potion');
const Charcter = require('./Character');

class Enemy extends Charcter {
  constructor(name, weapon, potion) {
  super(name);
 
  this.weapon = weapon;
  this.potion = new Potion();
}
  getDescription() {
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
  }
}


module.exports = Enemy;