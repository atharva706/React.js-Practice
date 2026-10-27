import React , {useState} from "react";

export default function Counter() {
    // state variable => 
    let [counter , setCounter] = useState(0)

    //let [flag , setFlag] = useState(false)

    const handleAdd = () =>{
        // setCounter(counter+1)
        // setCounter(counter+1)
        // setCounter(counter+1)

        setCounter((prev)=> prev+1)
        setCounter((prev)=> prev+1)
        setCounter((prev)=> prev+1)
    }

     const handleSubs = () =>{
        setCounter(counter-1)
    }

  return (
    <div>
      <span>Counter: {counter}</span>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSubs}>Substract</button>
    </div>
  )
}
