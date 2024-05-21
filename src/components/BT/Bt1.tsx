import { useState } from 'react'

export default function Bt1() {
    const [name,setName] = useState("Ngô Hữu Nghĩa")
  return (
    <div>Bài tập 1
        <h3>Họ và tên: {name}</h3>
    </div>
  )
}
