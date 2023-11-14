import Fighter, { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  _lifePoints: number;
  _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 85;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._lifePoints;
    if (damage > 0) {
      this._lifePoints -= damage;
    } else if (damage <= 0) {
      this._lifePoints -= 1;
    }
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }

    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }
}

export default Monster;