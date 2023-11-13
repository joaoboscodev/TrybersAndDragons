import Race from './Race';

class Dwarf extends Race {
  maxDwarfLifePoints = 80;
  static _createdRacesInstances = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf._createdRacesInstances += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf._createdRacesInstances;
  }

  get maxLifePoints(): number {
    return this.maxDwarfLifePoints;
  }
}

export default Dwarf;