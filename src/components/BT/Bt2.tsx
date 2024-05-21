import React, { useState } from 'react'
interface Product{
    id:number
    name:string
    price:string
    quantity:number
}
export default function Bt2() {
    const [product,setProduct]=useState<Product>({
        id:1,
        name:"Coca cola",
        price:"1000 $",
        quantity:10
    })
  return (
    <div style={{paddingTop:30}}>Bài tập 2
        <h3>Thông tin sản phẩm</h3>
            <p>Id:{product.id} <br/>Name:{product.name} <br/> Price{product.price} <br/>Quantity{product.quantity}</p>
    </div>
  )
}
