import React, { useMemo, useState } from "react";

function Memo() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1);

  function doubleValue(num) {
    for (let i = 0; i < 10000; i++) {
      // simulation of a heavy task
    }
    return num * 2;
  }

  let doubledValue = useMemo(() => doubleValue(number), [number]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <h2>{count}</h2>

      <input value={number} onChange={(e) => setNumber(e.target.value)} />

      <h3>Doubled Value : {doubledValue}</h3>
    </div>
  );
}

export default Memo;
