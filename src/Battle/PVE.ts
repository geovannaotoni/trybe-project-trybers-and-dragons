import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

class PVE extends Battle {
  private _player: Fighter;
  private _monsters: (SimpleFighter | Fighter)[];
  constructor(player: Fighter, monsters: (SimpleFighter | Fighter)[]) {
    super(player);
    this._player = player;
    this._monsters = monsters;
  }

  override fight(): number {
    while (
      this._player.lifePoints !== -1 
      && this._monsters.some((monster) => monster.lifePoints !== -1)) {
      this._monsters.forEach((monster) => {
        this._player.attack(monster);
        monster.attack(this._player);
      });
    }
    return super.fight();
  }
}

export default PVE;