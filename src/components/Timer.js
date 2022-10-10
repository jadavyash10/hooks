import React,{useState,useEffect} from 'react'

const Timer = () => {
    const [isOn, setIsOn] = useState(false);
  const [timer, setTimer] = useState(0);
  useEffect(
    () => {
      let interval;

      if (isOn) {
       
        interval = setInterval(() => setTimer(timer => timer + 1), 1000);
      }
      return () => clearInterval(interval);
    },
    [isOn] 
  );

  const onReset = () =>{
    setIsOn(false);
    setTimer(0);
  }
  return (
    <div>
        {timer}
        {!isOn && <button onClick={()=>setIsOn(true)}>start</button>}
        {isOn && <button onClick={()=>setIsOn(false)}>stop</button>}
        <button onClick={onReset}>Reset</button>
    </div>
  )
}

export default Timer