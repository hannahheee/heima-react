import { useEffect } from "react"

const URL = 'http://geek.itheima.net/v1_0/channels'

function App() {
    useEffect(() => {
        //额外的操作，获取频道列表
        async function getList(){
            const res = await fetch(URL)
            const list =  await res.json()
            console.log(list)
        }
        getList()
    }, [])
    return (
        <div>
            this is app
        </div>
    )
}
export default App