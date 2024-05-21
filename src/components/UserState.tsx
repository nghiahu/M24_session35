import {useState} from 'react'

export default function UserState() {
    const [count,setCount] = useState<number>(0)
    const increase=()=>{
        setCount(pre=>pre+1)
        setCount(5)
        setCount(b=>b+1)
        
    }
    const giam=()=>{
        setCount(count-1)
    }
    /* batch update */
    /*
    hook là những cái hàm, khi dùng để ý đầu vào của hàm, đầu ra trả về 
    kết quả là gì?
    UseState dùng để quản lý trạng thái của dữ liệu
    useState trả về 1 cái mảng có 2 phần tử
        + phần tử đầu tiên là giá trị truyền vào useState
        + phần tử thứ 2 là 1 cái function
    thầy dùng destructoring để hứng lấy giá trị
    khi cập nhật lại trạng thái của dữ liệu 
     */
    const result=useState(0);
    const [c,d] =useState(0)
    console.log(result);
    let arr=[5,6];
    let [a,b] = arr
  return (
    <div>UserState
        {count  }
        <button onClick={increase}>+</button>
        <button onClick={giam}>-</button>
    </div>
  )
}
