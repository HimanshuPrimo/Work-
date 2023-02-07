import React, { useEffect, useRef, useState } from 'react'

const Stopwatch = () => {
  const [time, setTime] = useState(0)
  
  useEffect(()=>{
    return() => clearInterval(id.current);
  },[])

  let id = useRef();

  const handleStart = () =>{
   id.current =  setInterval(()=>{
      setTime((prev)=>{ 
        return prev +1;
        // console.log(prev)
      })
    },1000) 
  }

  const handleReset = ()=>{
    clearInterval(id.current)
    setTime(0)
  }


  return (
    <>
    <div className="stopwatch">
  
        <h1>{time}</h1>
        <button  className='btn btn-primary' onClick={handleStart}>Start</button>
        <button className='btn btn-primary ms-2' onClick={clearInterval(id.current)}>Pause</button>
        <button className='btn btn-primary ms-2' onClick={handleReset}>Reset</button>
    </div>
        </>
  )
}
                                                                                                                                                                                                                            
export default Stopwatch