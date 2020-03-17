import React, { useContext, useState, useEffect } from "react";
import DragItem from "./components/DragItem";
import { Grid, GridImage, GridItem } from "./components/Grid";
import GridContext from "./components/GridContext";
import ScoreWindow from "./components/ScoreWindow";
import './App.css'
import Header from "./components/Header";


function App(incrementScore) {
  const { items, moveItem } = useContext(GridContext);
  const [count, setCount] = useState(0);



  let depl = () => {
    if(count < 2) {
      return depl = "déplacement"
    } else {
      return depl = "déplacements"
    }
  }

useEffect(() => {
  document.title = `Vous avez fait ${count} ${depl()}`;
});


  return (
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


export default App;
