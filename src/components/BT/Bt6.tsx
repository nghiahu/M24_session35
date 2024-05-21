import React, { useState } from 'react'

export default function Bt6() {
    const [count,setCount] = useState<number>(0)
    const handleClick=()=>{
        setCount(count + 1)
    }
  return (
    <div style={{paddingTop:30}}>Bài tập 6 <br />
        Bạn đã click {count} lần <br />
    <button onClick={handleClick}>Click để tăng số lần click</button>
    </div>
  )
}