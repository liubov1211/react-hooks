import React, { useEffect, useState } from 'react';
import styles from './timer.css'

const Timer = ({ start, step }) => {
    const [time, setTime] = useState(start);
    const [timerOn, setTimeOn] = useState(true);

    useEffect(()=>{
        let interval;
        let stepTime = 1;
        if(timerOn){
            interval = setInterval(()=>{
                setTime(prevTime => {
                    if (prevTime > 0) {
                      return (prevTime - (stepTime * step));
                    } else {
                      setTimeOn(false);
                      return prevTime = start;
                    }
                  })
                }, 1000)
              } else {
                clearInterval(interval)
              }
              return () => clearInterval(interval);
          
            }, [timerOn])
            
      return(
          <div className="container">
              <div className="timer">
              <span>{ time +" " + "cek"}</span>
              </div>
              <button onClick={() => setTimeOn(true)}>Start</button>
              <button onClick={() => setTimeOn(false)}>Pause</button>
          </div>
          
      )
 }

 export default Timer;