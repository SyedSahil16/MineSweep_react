import { useEffect, useState } from "react";

function Square({
  index,
  value,
  gameOver,
  setGameOver,
  clickCount,
  setClickCount,
}) {
  const [clicked, setClicked] = useState(false);
  const [bombClick, setBomb] = useState(value);
  let count = 0;
  return (
    <div
      className={`innerDiv ${clicked ? "clicked" : ""} ${
        bombClick ? "" : "bomb"
      }`}
      id={index}
      key={index}
      onClick={() => {
        if (gameOver === "KEEP GUESSING" && clicked != true) {
          setClickCount(clickCount + 1);
          setClicked(true);
          setBomb(value);
          if (value === 0) {
            setGameOver("GAME OVER");
          }
        }
      }}
    >
      <p
        className={`${
          clicked && value===1?"dontHide":"hide"
        }`}
      >
        🍔
      </p>
      <p
        className={`${
          clicked && value===0?"dontHide":"hide"
        }`}
      >
        💣
      </p>
    </div>
  );
}
export default Square;
