import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  opponent: Fighter;

  constructor(player: Fighter, opponent: Fighter) {
    super(player);
    this.opponent = opponent;
  }

  fight(): number {
    const { player, opponent } = this;

    while (player.lifePoints > -1 && opponent.lifePoints > -1) {
      player.attack(opponent);
      if (opponent.lifePoints > -1) {
        opponent.attack(player);
      }
    }

    return PVP.winner(player.lifePoints);
  }

  private static winner(playerLife: number): number {
    if (playerLife > -1) {
      return 1;
    }
    return -1;
  }
}

export default PVP;