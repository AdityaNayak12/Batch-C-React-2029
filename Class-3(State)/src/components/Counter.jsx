import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  console.log(`Component Re-rendered for ${count} times`);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div>
      <button onClick={increment}>Increment +</button>
      <h4>{count}</h4>
      <button onClick={decrement}>Decrement -</button>
    </div>
  );
}

export default Counter;
