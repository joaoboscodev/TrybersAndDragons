import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

class PVE extends Battle {
  npcs: SimpleFighter[];

  constructor(player: Fighter, npcs: SimpleFighter[]) {
    super(player);
    this.npcs = npcs;
  }

  fight(): number {
    const { player, npcs } = this;

    while (player.lifePoints > -1 && npcs.some((n) => n.lifePoints > -1)) {
      const npcAlive = npcs.find((n) => n.lifePoints > 0) as SimpleFighter;
      player.attack(npcAlive);
      if (npcAlive.lifePoints > -1) {
        npcAlive.attack(player);
      }
    }

    return PVE.winner(player.lifePoints);
  }

  private static winner(playerLife: number): number {
    if (playerLife > -1) {
      return 1;
    }
    return -1;
  }
}

export default PVE;