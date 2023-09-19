import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static _createdInstancesNumber = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer._createdInstancesNumber += 1;
  }

  get energyType(): EnergyType { return this._energyType; }

  static createdArchetypeInstances(): number {
    return Necromancer._createdInstancesNumber;
  }
}

export default Necromancer;