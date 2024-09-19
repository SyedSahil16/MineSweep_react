import { useState } from "react";
import "./App.css";
import Game from "./Grid";

function App() {
  let a = 1;
  const [count, setCount] = useState();

  return (
    <>
      <Game />

    </>
  );
}

export default App;
