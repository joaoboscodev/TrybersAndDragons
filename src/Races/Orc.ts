import Race from './Race';

class Orc extends Race {
  maxOrcLifePoints = 74;
  static _createdRacesInstances = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc._createdRacesInstances += 1;
  }

  static createdRacesInstances(): number {
    return Orc._createdRacesInstances;
  }

  get maxLifePoints(): number {
    return this.maxOrcLifePoints;
  }
}

export default Orc;