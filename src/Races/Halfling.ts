import Race from './Race';

class Halfling extends Race {
  private static _createdInstancesNumber = 0;
  private _maxLifePoints = 60;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._createdInstancesNumber += 1;
  }

  static createdRacesInstances(): number {
    return this._createdInstancesNumber;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;