import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private _player: Fighter;
  private _opponent: Fighter;

  constructor(player: Fighter, opponent: Fighter) {
    super(player);
    this._player = player;
    this._opponent = opponent;
  }

  override fight(): number {
    while (this._player.lifePoints !== -1 && this._opponent.lifePoints !== -1) {
      this._player.attack(this._opponent);
      this._opponent.attack(this._player);
    }
    return super.fight();
  }
}

export default PVP;