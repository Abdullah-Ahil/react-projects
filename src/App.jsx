import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>increament</button>
      <button onClick={() => setCount(count - 1)}>decreament</button>
      <button onClick={() => setCount(count = 0)}>reset</button>
    </>
  );
}

export default App;
