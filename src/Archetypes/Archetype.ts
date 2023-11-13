import { EnergyType } from '../Energy';

abstract class Archetype {
  _name: string;
  _special: number;
  _cost: number;
  zeroNumber = 0;

  constructor(name: string) {
    this._name = name;
    this._special = this.zeroNumber;
    this._cost = this.zeroNumber;
  }

  get name(): string {
    return this._name;
  }

  get special(): number {
    return this._special;
  }

  get cost(): number {
    return this._cost;
  }
  
  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}

export default Archetype;