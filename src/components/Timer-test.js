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

//  victory = (count) => {
//     if(this.endGame === GAME_STATE.DONE) {
//         if( count >= 20){
//         alert("Génial, je n'ais pas de mots... Vous ête un Champion")
//         }
//         if (count <= 30) {
//           alert("Wouah, Vous êtes super rapide, Bien Joué !")
//         }
//         if (count <= 40) {
//           alert("Bravo vous avez terminé la partie en moin de 40 mouvements")
//         } if( count <= 60) {
//           alert("Bravo vous avez terminé, mais ... vous pouvez faire mieux !")
//         } if (count > 60) {
//           alert("Bravo vous avez terminé, mais vous pouvez être beaucoup plus rapide !")
//         }
//         return alert;
//     }
//   }

  victory = (count) => {
  if(this.state.gameState === GAME_STATE.DONE) {
    if( count >= 20){
    return(<p>"Génial, je n'ais pas de mots... Vous ête un Champion"</p>)
    }
    if (count <= 30) {
      return("Wouah, Vous êtes super rapide, Bien Joué !")
    }
    if (count <= 40) {
      return("Bravo vous avez terminé la partie en moin de 40 mouvements")
    } if( count <= 60) {
      return("Bravo vous avez terminé, mais ... vous pouvez faire mieux !")
    } if (count > 60) {
      return("Bravo vous avez terminé, mais vous pouvez être beaucoup plus rapide !")
    }
    return;
  }

}
  render(){
    const { gameState, timeLeft } = this.state;
    const count = this.props.count
    const victory = this.props.victory
    return (
      <div>
      <HeaderTime victory={victory} gameState={gameState} timeLeft={timeLeft} endGame={this.endGame} />
      {this.state.gameState !== GAME_STATE.PLAYING && (
        <Modal
          victory={victory}
          count={count}
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

