import Race from './Race';

class Elf extends Race {
  private static _createdInstancesNumber = 0;
  private _maxLifePoints = 99;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._createdInstancesNumber += 1;
  }

  static createdRacesInstances(): number {
    return this._createdInstancesNumber;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;