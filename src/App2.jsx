import React, { useEffect,useState } from 'react'

export default function App2() {

    // useEffect 周期之前获取dom 
    // 异步代码块  promise setTimeout
    // setTimeout(()=>{
    //     let box = document.querySelector('.box');
    //     console.log(box);
    // },0)

    //ajax 请求:如果不需要依赖 任何变量的改变 重新请求 
    let [num,setNum] = useState(0);
    let [a,setA] = useState(100)
    

    // useEffect(()=>{
    //     //获取真实dom节点
    //     let box = document.querySelector('.box');
    //     console.log(box);
    //     //依赖某个变量的值 发生改变 重新发送ajax 
    //     setNum(1)
    //     console.log('-*----');
    //     console.log(num);
    // })
    useEffect(()=>{
        //获取dom
        let box = document.querySelector('.box');
        console.log(box);
        //根据num的值 进入页面请求一次ajax  num改变再次请求ajax
       console.log('发生改变,重新请求ajax');
       console.log(num);
       
    },[num])

    useEffect(()=>{
        //数据发生改变的监听,改变了数据需要做的事情
        console.log('数据a发生了改变',a);
    },[a])



  return (
    <div>
        <div className="box" onClick={()=>setA(a-1)}>你好啊</div>
        <div onClick={()=>setNum(num+1)}>
            点我呀
        </div>
    </div>
  )
}
