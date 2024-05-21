import React, { useState } from 'react'

export default function Bt5() {
    const [inpValue,setInp] = useState<string>(" ")
    const handelChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setInp(e.target.value)
    }
  return (
    <div>Bài tập 5
        <div>
            <input onChange={handelChange} type="text" placeholder='Nhập nội dung'/>
        </div>
        <p>{inpValue}</p>
    </div>
  )
}
