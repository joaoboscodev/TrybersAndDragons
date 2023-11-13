import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  rangerType: EnergyType;
  static _createdArchetypeInstances = 0;
  
  constructor(name: string) {
    super(name);
    this.rangerType = 'stamina';
    Ranger._createdArchetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger._createdArchetypeInstances;
  }

  get energyType(): EnergyType {
    return this.rangerType;
  }
}

export default Ranger;