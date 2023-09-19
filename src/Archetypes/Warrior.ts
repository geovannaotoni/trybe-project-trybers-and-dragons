import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static _createdInstancesNumber = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior._createdInstancesNumber += 1;
  }

  get energyType(): EnergyType { return this._energyType; }

  static createdArchetypeInstances(): number {
    return Warrior._createdInstancesNumber;
  }
}

export default Warrior;