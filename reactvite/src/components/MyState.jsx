import React, { useState } from 'react';
function MyState() {
  const [counter, setCounter] = useState(0);
  function decrement() {
    setCounter(counter - 10);
  }
  function increment() {
    setCounter(counter + 5);
  }
  return (
    <div>
      <h2>Counter={counter}</h2>
      <div>
        <button onClick={increment}>increment Counter</button>
        <button onClick={decrement}>decrement</button>
      </div>
    </div>
  );
}

export default MyState;