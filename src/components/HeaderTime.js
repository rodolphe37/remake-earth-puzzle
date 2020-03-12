import React from 'react';
import './Modal.css'

import { GAME_STATE, getSeconds } from './Timer-test';

const Header = ({ timeLeft, gameState, endGame }) => (
  <header className="navbar">
    {gameState === GAME_STATE.PLAYING && (
      <>
        <section className="navbar-center text-error"><p>{getSeconds(timeLeft)} Secondes restantes</p></section>
        <section className="navbar-center">
          <button className="reload" onClick={endGame}>
            Terminer la partie
          </button>
        </section>
      </>
    )}
  </header>
);

export default Header;
