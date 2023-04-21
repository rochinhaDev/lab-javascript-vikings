// Soldier
class Soldier {
    constructor(health, strength) {
      this.health = health;
      this.strength = strength;
    }
    attack() {
      return this.strength;
    }
    receiveDamage(damage) {
      this.health -= damage;
    }
  }
  // Viking
  class Viking extends Soldier {
    constructor(name, health, strength) {
      super(health, strength);
      this.name = name;
    }
    receiveDamage(damage) {
      this.health -= damage;
      if (this.health > 0) {
        return `${this.name} has received ${damage} points of damage`;
      } else {
        return `${this.name} has died in act of combat`;
      }
    }
    battleCry() {
      return "Odin Owns You All!";
    }
  }
  // Saxon
  class Saxon extends Soldier {
    receiveDamage(damage) {
      this.health -= damage;
      if (this.health > 0) {
        return `A Saxon has received ${damage} points of damage`;
      } else {
        return `A Saxon has died in combat`;
      }
    }
  }
  // War
  class War {
    constructor() {
      this.vikingArmy = [];
      this.saxonArmy = [];
    }
    addViking(viking) {
      this.vikingArmy.push(viking);
    }
    addSaxon(saxon) {
      this.saxonArmy.push(saxon);
    }
    vikingAttack() {
      let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
      let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
      let result = this.saxonArmy[saxonIndex].receiveDamage(this.vikingArmy[vikingIndex].strength);
      if (this.saxonArmy[saxonIndex].health <= 0) {
        this.saxonArmy.splice(saxonIndex, 1);
      }
      return result;
    }
    saxonAttack() {
      let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
      let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
      let result = this.vikingArmy[vikingIndex].receiveDamage(this.saxonArmy[saxonIndex].strength);
      if (this.vikingArmy[vikingIndex].health <= 0) {
        this.vikingArmy.splice(vikingIndex, 1);
      }
      return result;
    }
    showStatus() {
      if (this.saxonArmy.length === 0) {
        return "Vikings have won the war of the century!";
      } else if (this.vikingArmy.length === 0) {
        return "Saxons have fought for their lives and survived another day...";
      } else if (this.vikingArmy.length === 0 && this.saxonArmy.length === 0) {
        return "The war has ended in a draw!";
      } else {
        return "Vikings and Saxons are still in the thick of battle.";
      }
    }
  }
  const war = new War();
  const saxon = new Saxon(100, 20);
  war.addSaxon(saxon);
  war.showStatus();
  const viking = new Viking("Ragnar", 100, 30);
  war.addViking(viking);
  war.vikingAttack();
  war.showStatus();