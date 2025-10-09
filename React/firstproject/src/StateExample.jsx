import { useState } from "react"

const StateExample = () => {
    // useState - hooks
    const [count,setCount] = useState(10)
    const [name,setName] = useState("ABCD")
    
    
    
  return (
    <div>
      <h3>State Example</h3>
      <h4>Count is == {count}</h4>
      <h4>Name is - {name}</h4>
      <button onClick={addCount}>Add Counter</button>
    </div>
  )
}

export default StateExample
