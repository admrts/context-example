import React from "react";
import { useContext } from "react";
import { CountContext } from "./countContext";

const App = () => {
  const { count, increment, decrement } = useContext(CountContext);
  return (
    <div>
      <div>
        <button onClick={increment}>Arttır</button>
      </div>
      <div>{count}</div>
      <div>
        <button onClick={decrement}>Azalt</button>
      </div>
    </div>
  );
};

export default App;
