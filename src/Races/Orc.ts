import Race from './Race';

class Orc extends Race {
  private static _createdInstancesNumber = 0;
  private _maxLifePoints = 74;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc._createdInstancesNumber += 1;
  }

  static createdRacesInstances(): number {
    return this._createdInstancesNumber;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;