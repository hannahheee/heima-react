
//1. useRef 生成 ref 对象，绑定到dom标签上
//2. dom可用时， ref.current 获取dom
//渲染完毕之后 dom生成之后才可用

import { useRef } from "react";

function App(){
   const inputRef = useRef(null)
   const showDom = ()=>{
    console.log(inputRef.current)
   }

   return (
    <div>
      <input type ="text" ref = {inputRef}/>
      <button onClick={showDom}>获取dom</button>
    </div>
   )
}

export default App