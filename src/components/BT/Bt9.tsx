import React, { useState } from 'react'

export default function Bt9() {
    const [InpGender,setGender] = useState<string>(" ")
  return (
    <div style={{paddingTop:30}}>Bài tập 9
            <p>Giới tính: {InpGender}</p>
            <form >
            <input type="radio" name="gender" value={"Nam"} onChange={(e) =>setGender(e.target.value)}/>Nam <br />
            <input type="radio" name="gender" value={"Nữ"} onChange={(e) =>setGender(e.target.value)}/>Nữ <br /> 
            <input type="radio" name="gender" value={"Khác"} onChange={(e) =>setGender(e.target.value)}/>Khác
            </form>
    </div>
  )
}
