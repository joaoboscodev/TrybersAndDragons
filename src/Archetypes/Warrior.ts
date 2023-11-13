import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  warriorType: EnergyType;
  static _createdArchetypeInstances = 0;
  
  constructor(name: string) {
    super(name);
    this.warriorType = 'stamina';
    Warrior._createdArchetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior._createdArchetypeInstances;
  }

  get energyType(): EnergyType {
    return this.warriorType;
  }
}

export default Warrior;