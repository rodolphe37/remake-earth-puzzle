import React from 'react';
import Timer from './Timer-test';

const ScoreWindow = ({count}) => {


  // const state = {
  //   scoreValue: 0,
  // }
  // const incrementScore = () => {
  //   console.log('click')
  //   state.scoreValue = state.scoreValue + 1
  // }
  //   let score= 0;

  // switch (score) {
  //   case count = 1:
  //     score = score + 10; console.log(score)
  //     break;
  //   case count < 10:
  //     score = score + 1200; console.log(score)
  //     break;
  //   case count > 10:
  //   case count < 25:
  //     score = score + 600; console.log(score)
  //     break;
  //   case count > 25:
  //   case count < 50:
  //     score = score + 300; console.log(score)
  //     break;
  //   default:
  //     console.log('Sorry, we are out of ' + score + '.');
  // }


  let mov = () => {
    if(count < 2) {
      return mov = "mouvement"
    } else {
      return mov = "mouvements"
    }
  }

  return (
    <div className="scoreView" >
    <Timer />
   {/* <h1>Score :{incrementScore}</h1>*/}
    <p>Vous avez effectué {count} {mov()}</p>
    <img src={require('../quizz-images/earth/big1.jpg')} alt="beautiful World"/>
    </div>
  )
}

export default ScoreWindow;
