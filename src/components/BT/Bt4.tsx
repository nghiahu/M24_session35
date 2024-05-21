import { useState } from 'react'

export default function Bt4() {
    const [word,setWord] = useState<string>(" ")
    const [hidden,setHidden] = useState<string>("Hiện")
    const handleClick=()=>{
        if(hidden === "Hiện"){
        setHidden("Ẩn")
        setWord("Tiêu đề văn bản")
        }else{
            setHidden("Hiện")
            setWord(" ")
        }
    }
  return (
    <div style={{paddingTop:30}}>Bài tập 4
        <p onClick={handleClick}>{hidden}</p>
        <p>{word}</p>
    </div>
  )
}
