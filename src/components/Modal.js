import React from 'react';
import './Modal.css'
import { GAME_STATE } from './Timer-test';

const reloadGame = () => {
  window.location.reload(false);
}



const Modal = ({ gameState, startGame, resetGame, count ,victory }) => {

  let mov = () => {
    if(count < 2) {
      return mov = "mouvement"
    } else {
      return mov = "mouvements"
    }
  }

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
          : <div>{ console.log(victory)}<p>Vous avez effectué</p><p> {count} {mov()}</p><p>{victory}</p></div>}
      </div>
    </div>
    <div className="modal-footer">
      <button
        className="reload"
        onClick={gameState === GAME_STATE.READY ? startGame : resetGame && reloadGame }
      >
        {gameState === GAME_STATE.READY ? 'Commencer le jeu' : 'Recommencer le Jeu'}
      </button>
    </div>
  </div>
</div>)
}
export default Modal;
