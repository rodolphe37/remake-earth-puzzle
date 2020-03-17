import React from 'react';
import classes from './BackgroundVideo.module.css';


function BackgroundVideo() {
  // const videoSource = "https://shakyshuttle.com//static/planet-cartoon-space-animation-0e76607cd977409fd36a8a7b9c83d77c.mp4"
  return (
    <div className="Content">
      <div className={classes.Container} >
      <img className={classes.Video} src={require('../../quizz-images/planet-cartoon-animation.gif')} alt=""/>
        {/*<video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
    </video>*/}
      </div>
    </div>
  );
}

export default BackgroundVideo;
