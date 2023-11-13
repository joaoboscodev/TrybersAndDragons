import Race from './Race';

class Elf extends Race {
  maxElfLifePoints = 99;
  static _createdRacesInstances = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._createdRacesInstances += 1;
  }

  static createdRacesInstances(): number {
    return Elf._createdRacesInstances;
  }

  get maxLifePoints(): number {
    return this.maxElfLifePoints;
  }
}

export default Elf;