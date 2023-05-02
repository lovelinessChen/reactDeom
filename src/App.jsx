import React, { useState } from 'react'
// 导入子组件
import AppNum from './components/AppNum'

export default function App() {

  const [num,setNum] = useState(0)


  const changeNum = (newNum)=>{
    setNum(newNum)
  }
  return (
    <div>
      <h1>我是爸爸组件 APP</h1>
      {/* 引入计数器组件 */}
      <AppNum num={num}  change={changeNum}></AppNum>
    </div>
  )
}
