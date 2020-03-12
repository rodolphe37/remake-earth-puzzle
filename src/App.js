import React, { useContext, useState, useEffect } from "react";
import DragItem from "./components/DragItem";
import { Grid, GridImage, GridItem } from "./components/Grid";
import GridContext from "./components/GridContext";
import ScoreWindow from "./components/ScoreWindow";
import './App.css'
import Header from "./components/Header";
import classes from './components/BackgroundVideo/BackgroundVideo.module.css';




function App({incrementScore, scoreValue}) {
  const { items, moveItem } = useContext(GridContext);
  const [count, setCount] = useState(0);
  const videoSource = "https://shakyshuttle.com//static/planet-cartoon-space-animation-0e76607cd977409fd36a8a7b9c83d77c.mp4"

  useEffect(() => {
    document.title = `Vous avez fait ${count} déplacements`;
  });

  // const handleChangeSource = () => {
  //   return (
  //     <div className="App">
  //     <Header />
  //     <div className="container">
  //       <ScoreWindow count={count}/>
  //       <Grid  onDragEnd={() => setCount(count + 1)}  value={scoreValue}
  //       increment={incrementScore} >
  //         {items2.map(item => (
  //           <DragItem key={item.id} id={item.id} onMoveItem={moveItem}>
  //             <GridItem>
  //               <GridImage src={item.src}></GridImage>
  //             </GridItem>
  //           </DragItem>
  //         ))}
  //       </Grid>
  //     </div>
  //   </div>
  //   )
  // }
  return (
    <div className="App">
      <Header />
      <div className="container">
        <ScoreWindow count={count}/>
        <Grid  onDragEnd={() => setCount(count + 1)}  value={scoreValue}
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
