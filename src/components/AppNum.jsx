import React from 'react'

export default function AppNum(props) {

    // 接收数据
    let {num,change} = props
    
    // 子组件点击减号
    const reduce = ()=>{
        //调用父组件传递过来的函数体 change
        change(num-1)
    }
    const add = ()=>{
        change(num+1)
    }
    
  return (
    <div>
            <button onClick={reduce}>-</button>
            <input type="text" value={num} />
            <button onClick={add}>+</button>
    </div>
  )
}
