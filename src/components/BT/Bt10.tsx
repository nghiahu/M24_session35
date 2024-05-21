import React, { useState } from 'react'

export default function Bt10() {
    const [interest,setInterest] = useState<string[]>([])
    const handelChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
       if(e.target.checked){
        setInterest([...interest,e.target.value])
       }else{
        setInterest(interest.filter(i => i !== e.target.value))
       }
    }
  return (
    <div style={{paddingTop:30}}>Bài tập 10
        <div>
            <p>Sở thích: [{interest.join(', ')}]</p>
            <div>
                <input type="checkbox" onChange={handelChange} value={"Đi chơi"}/>Đi chơi <br />
                <input type="checkbox" onChange={handelChange} value={"Code"}/>Code <br />
                <input type="checkbox" onChange={handelChange} value={"Bơi lội"}/>Bơi lội <br />
                <input type="checkbox" onChange={handelChange} value={"Nhảy dây"}/>Nhảy dây <br />
            </div>
        </div>
    </div>
  )
}
