import React from 'react'

function MyUseEffect() {
    const [counter, setCount] = React.useState(0);
    const [pointer, setPointer]=React.useState(100);

    function increaseCounter() {
        setCount(counter + 10);
    }
    function decreasePointer() {
        setPointer(pointer - 5);
    }

    React.useEffect(() => {
        console.log('Counter', counter);
        console.log('Pointer', pointer);
    }, [counter, pointer]);
  return (
    <div>
      <h2 > counter app</h2>
      <h1 style={{color:"red", textAlign:"center"}}> {counter}</h1>
      <button onClick={increaseCounter}>
        Increment
      </button>
      <button onClick={decreasePointer}>
        Decrement
      </button>
    </div>
  )
}

export default MyUseEffect
