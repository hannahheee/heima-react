import { createContext, useContext, useState } from "react"
// App -> A -> B
//1. ceateContext 方法创建一个上下文对象
const MsgContext = createContext()
//2. 在顶层组件 通过Provider组件提供数据
//3. 在底层组件 通过useContext钩子函数使用数据
function A({ getAName }) {
    const name = 'this is A name'
    return (
        <div>
            this is A component,
            <B />
        </div>
    )
}
function B() {
    const msg = useContext(MsgContext)
    return (
        <div>
            this is B component, {msg}
        </div>
    )
}
function App() {
    const msg = 'this is app msg'
    return (
        <div>
            <MsgContext.Provider value={msg}>
                <A />
            </MsgContext.Provider>
        </div>
    )
}
export default App