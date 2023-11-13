import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  necromancerType: EnergyType;
  static _createdArchetypeInstances = 0;
  
  constructor(name: string) {
    super(name);
    this.necromancerType = 'mana';
    Necromancer._createdArchetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._createdArchetypeInstances;
  }

  get energyType(): EnergyType {
    return this.necromancerType;
  }
}

export default Necromancer;