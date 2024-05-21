import React, { useState } from 'react'

export default function Bt8() {
    const [selectInp,setInp] = useState<string>(" ")
    const handleChange=(e:React.ChangeEvent<HTMLSelectElement>)=>{
      setInp(e.target.value)
    }
  return (
    <div style={{paddingTop:30}}>Bài tập 8
        <div>
            Thành phố: {selectInp}<br />
            <select onChange={handleChange}>
            <option value="Hà Nội">Hà Nội</option>
            <option value="Hà Nam">Hà Nam</option>
            <option value="Ninh Bình">Ninh Bình</option>
            <option value="Thanh Hóa">Thanh Hóa</option>
            <option value="Hà Nội">Hà Nội</option>
            </select>
        </div>
    </div>
  )
}
