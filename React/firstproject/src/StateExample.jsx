import { useState } from "react"
import "./Custom.css"
const StateExample = () => {
    // useState - hooks
    const [count,setCount] = useState(10)
    const [name,setName] = useState("ABCD")
    const addCount = ()=>{
      setCount(count+1)
    }
    const myStyle = {
      color:"blue",
      backgroundColor:"aqua"
    }
  return (
    <>
    <div>
      <h3 style={{color:"red",backgroundColor:"yellow",fontFamily:"Arial Black"}}>State Example</h3>
      <h4 style={myStyle}>Count is == {count}</h4>
      <h4>Name is - {name}</h4>
      <button onClick={addCount}>Add Counter</button>
    </div>
    <div className="box"></div>
    </>
  )
}
export default StateExample
