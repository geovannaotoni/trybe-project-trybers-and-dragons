import Race from './Race';

class Dwarf extends Race {
  private static _createdInstancesNumber = 0;
  private _maxLifePoints = 80;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf._createdInstancesNumber += 1;
  }

  static createdRacesInstances(): number {
    return this._createdInstancesNumber;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf;