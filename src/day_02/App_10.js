import { createContext, useState } from "react"

function A({getAName}){
    const name = 'this is A name'
    return (
        <div>
            this is A component,
            <button onClick = {() => getAName(name) }>Send</button>
        </div>
    )
}

function B ({name}){
    return (
    <div>
        this is B component, 
        {name}
    </div>
    )
}

function App(){
    const[name, setName] = useState('')
    const getAName = (name) =>{
        console.log(name)
        setName(name

        )
    }
    return (
        <div>
            this is App
            <A getAName = {getAName}/>

            <B name = {name}/>
        </div>
    )
}

export default App