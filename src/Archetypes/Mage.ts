import Archetype from "./Archetype";
import { EnergyType } from '../Energy'

class Mage extends Archetype {
  mageType: EnergyType;
  static _createdArchetypeInstances = 0;
  
  constructor(name: string) {
    super(name);
    this.mageType = 'mana';
    Mage._createdArchetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage._createdArchetypeInstances;
  }

  get energyType(): EnergyType {
    return this.mageType;
  }
}

export default Mage;