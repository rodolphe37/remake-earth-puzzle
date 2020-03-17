import React, { useContext, useState, useEffect } from "react";
import DragItem from "./components/DragItem";
import { Grid, GridImage, GridItem } from "./components/Grid";
import GridContext from "./components/GridContext";
import ScoreWindow from "./components/ScoreWindow";
import './App.css'
import Header from "./components/Header";


function App(incrementScore, gameScore) {
  const { items, moveItem } = useContext(GridContext);
  const [count, setCount] = useState(0);


  useEffect(() => {
    document.title = `Vous avez fait ${count} déplacements`;
  });

// const getTotalScore = () => {
//   const counts = Object.values({count});
//   // return (console.log(counts), counts);
//   return (counts)
// }

  return (console.log(count),
    <div className="App">
      <Header />
      <div className="container">
        <ScoreWindow count={count} />
        <Grid  onDragEnd={() => setCount(count + 1)}
        increment={incrementScore} >
          {items.map(item => (
            <DragItem key={item.id} id={item.id} onMoveItem={moveItem}>
              <GridItem>
                <GridImage src={item.src}></GridImage>
              </GridItem>
            </DragItem>
          ))}
        </Grid>
      </div>

    </div>
  );
}
// export function getTotalScore(count) {
//   const gameScore = Object.values({count});
//   return (console.log(gameScore), gameScore);
// }


export default App;
