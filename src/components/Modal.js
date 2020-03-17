import React, {useEffect} from 'react';
import './Modal.css'
import { GAME_STATE } from './Timer-test';

const reloadGame = () => {
  window.location.reload(false);
}


// export function getTotalScore(count) {
//   const gameScore = Object.values({count});
//   return console.log(gameScore);
// }



const Modal = ({ gameState, startGame, resetGame, count}) => {

// const getTotalScore = () => {
//   const counting = Object.values({count});
//   return (console.log(count), count);
//   // return (counting)
// }
useEffect(() => {
  document.title = `Vous avez fait ${count} déplacements`;
});

  return (<div className="modal modal-sm active">
  <div className="modal-overlay" />
  <div className="modal-container">
    <div className="modal-header">
      <div className="modal-title h4"></div>
    </div>
    <div className="modal-body">
      <div className="content h6">
        {' '}
        { gameState === GAME_STATE.READY
          ? `Notre Terre est sans dessus-dessous, déplacez les pièces du puzzle et remettez la planète en forme. Le score est calculé en rapport au nombre de mouvements... Attention, vous n'avez que 240 secondes (4 minutes), faites le rapidement et avec le moins de mouvements possible pour avoir un meilleur score...`
          :  <div><p>Vous avez effectué</p><p> {count} Mouvements</p> { console.log(count)}</div>}
      </div>
    </div>
    <div className="modal-footer">
      <button
        className="reload"
        onClick={gameState === GAME_STATE.READY ? startGame : resetGame && reloadGame}
      >
        {gameState === GAME_STATE.READY ? 'Commencer le jeu' : 'Recommencer le Jeu'}
      </button>
    </div>
  </div>
</div>)
}
export default Modal;
