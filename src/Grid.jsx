import React, { useState } from "react";
import { useEffect } from "react";
import './grid.css'
import Square from "./Square";
function Grid() {
  const [arr, setArr] = useState([1, 1, 1, 1]);
  const [gameOver, setGameOver] = useState("KEEP GUESSING");
  const [clickCount, setClickCount] = useState(0);
  let rand = Math.floor(Math.random() * 4);
  useEffect(() => {
    const copy = [...arr];
    copy[rand] = 0;
    setArr(copy);
  }, []);
  
  useEffect(() => {
    console.log(clickCount)
    if (clickCount === 3 && gameOver==="KEEP GUESSING") {
      setGameOver("WIN!!!!");
    }
  }, [clickCount]);
  return (
    <>
    <div id="gameOver">{gameOver}</div>
    <div className="outerDiv">
      {arr.map((value, index) => {
        return (<Square key={index} value={value} index={index} gameOver={gameOver}
           setGameOver={setGameOver}
           setClickCount={setClickCount} clickCount={clickCount} />);
      })}
    </div>
    </>
  );
}

export default Grid;
