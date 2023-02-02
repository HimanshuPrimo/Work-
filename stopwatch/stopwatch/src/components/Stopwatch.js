import React, { useEffect, useState } from 'react'

const Stopwatch = () => {
    const [start, setStart] = useState(false)
    const time = new Date()
    const minutes = time.getMinutes();
    const second = time.getSeconds();
    const milliseconds = time.getMilliseconds();
    
    const handleStart =()=>{
        setStart(true);
    }
  return (
    <>
    <div className="stopwatch">
        <span>{start? `${minutes}:${second}:${milliseconds}` : '00:00:00'}</span><br />
        <button onClick={handleStart} className='btn btn-primary'>Start</button>
        <button className='btn btn-primary ms-2'>Add</button>
    </div>
        </>
  )
}

export default Stopwatch