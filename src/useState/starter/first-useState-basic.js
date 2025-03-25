import React, { useState } from "react";

function FirstUseStateBasic() {
  const [count, setCount] = useState(0);

  const decrementBtn = () => {
    setCount(count - 1);
  };

  const incrementBtn = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={decrementBtn} style={{ fontSize: 16, padding: 5 }}>
        -
      </button>
      <span style={{ fontSize: 20, margin: 5 }}>Count: {count}</span>
      <button onClick={incrementBtn} style={{ fontSize: 16, padding: 5 }}>
        +
      </button>
    </div>
  );
}
export default FirstUseStateBasic;
