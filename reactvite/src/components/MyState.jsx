import React from 'react'

function MyState() {


function decrement(){
    setCounter(counter + 10);

}


function increment(){
    setCounter(counter - 5);
}
    const [counter,SetCounter]=React.useState(10);

  return (
    <div>
    <h2> Counter={counter}</h2>  
    <div>
        <button onClick={increment}>Increment counter</button>
    </div>
    </div>
  )
}

export default MyState
