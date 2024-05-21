import { useState } from 'react'

export default function Bt3() {
    const [color,setColor] = useState<string>("black");
    const handleClick=()=>{
        setColor("red")
    }
  return (
    <div>Bài tập 3
        <div style={{color:color}}>Tiêu đề văn bản</div>
        <div onClick={handleClick}>Thay đổi màu</div>
    </div>
  )
}
