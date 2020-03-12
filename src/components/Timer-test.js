import React from'react';
import Modal from './Modal';
import HeaderTime from './HeaderTime';


const GAME_DURATION = 1000 * 240; // 240 seconds

// method to get time left
export const getTimeLeft = deadline => deadline - Date.now();

// method to get time left in seconds
export const getSeconds = timeLeft => Math.floor(timeLeft / 1000);

// enums for representing the game state
export const GAME_STATE = {
  READY: 'ready',
  PLAYING: 'playing',
  DONE: 'done',
};

export function getTotalScore(count, timeLeft) {
  const gameScore = Object.values(count).reduce(
    (sum) => sum,
    0
  );
  const timeBonus = getSeconds(timeLeft);
  return gameScore ? gameScore + timeBonus : 0;
}


const initialState = {
  // we initialize the state
  gameState: GAME_STATE.READY,
  timeLeft: 0,
};

export default class Timer extends React.Component {
  state = initialState;

  startGame = () => {
    this.currentDeadline = Date.now() + GAME_DURATION;

    this.setState(
      {
        gameState: GAME_STATE.PLAYING,
        timeLeft: getTimeLeft(this.currentDeadline),
      },
      this.gameLoop
    );
  };

  gameLoop = () => {
    this.timer = setInterval(() => {
      const timeLeft = getTimeLeft(this.currentDeadline);
      const isTimeout = timeLeft <= 0;
      if (isTimeout && this.timer) {
        clearInterval(this.timer);
      }

      this.setState({
        timeLeft: isTimeout ? 0 : timeLeft,
        ...(isTimeout ? { gameState: GAME_STATE.DONE } : {}),
      });
    }, 1000);
  };

  endGame = () => {
    if (this.timer) {
      clearInterval(this.timer);
    }

    this.setState({
      gameState: GAME_STATE.DONE,
    });
  };

  resetGame = () => {
    this.setState(initialState);
  };

  render(){
    const { gameState, timeLeft } = this.state;
    return (
      <div>
      <HeaderTime gameState={gameState} timeLeft={timeLeft} endGame={this.endGame} />
      {this.state.gameState !== GAME_STATE.PLAYING && (
        <Modal
          startGame={this.startGame}
          resetGame={this.resetGame}
          timeLeft={timeLeft}
          gameState={gameState}
        />
      )}
      {(this.state.gameState === GAME_STATE.PLAYING ||
        this.state.gameState === GAME_STATE.DONE)}
    </div>
    )
  }
}

