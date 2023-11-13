import Race from './Race';

class Halfling extends Race {
  maxHalflingLifePoints = 60;
  static _createdRacesInstances = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._createdRacesInstances += 1;
  }

  static createdRacesInstances(): number {
    return Halfling._createdRacesInstances;
  }

  get maxLifePoints(): number {
    return this.maxHalflingLifePoints;
  }
}

export default Halfling;