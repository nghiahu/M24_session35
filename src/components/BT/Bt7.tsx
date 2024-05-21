import React, { useState } from 'react'

export default function Bt7() {
    const [characters,setChar]=useState<string>("")
    const handleChange=(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
        setChar(e.target.value)
    }
  return (
    <div style={{paddingTop:30}}>Bài tập 7
    <div>
        <textarea onChange={handleChange} name="" id=""></textarea>
        </div>
        Số ký tự: {characters.length}
    </div>
  )
}
