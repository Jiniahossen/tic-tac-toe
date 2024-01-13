import { useState } from "react";

function Sqaure({ value,onSquareClick }) {

  return (
    <button
      onClick={onSquareClick} 
      className="w-20 h-20 border border-gray-600 m-1 bg-white leading-9 text-lg"
    >
      {value}
    </button>
  );
}

export default function Board(i) {
  const [squares, setSquares] = useState(Array(9).fill(null));
  function handleClick() {

    const nextSquares=squares.slice();
    nextSquares[i]='X';
    setSquares(nextSquares);
  }
  return (
    <>
      <div className="flex ">
        <Sqaure value={squares[0]} onSquareClick={handleClick(0)} />
        <Sqaure value={squares[1]} onSquareClick={handleClick(1)} />
        <Sqaure value={squares[2]} onSquareClick={handleClick(2)} />
      </div>
      <div className="flex ">
        <Sqaure value={squares[3]} onSquareClick={handleClick(3)} />
        <Sqaure value={squares[4]} onSquareClick={handleClick(4)} />
        <Sqaure value={squares[5]} onSquareClick={handleClick(5)} />
      </div>
      <div className="flex ">
        <Sqaure value={squares[6]} onSquareClick={handleClick(6)} />
        <Sqaure value={squares[7]} onSquareClick={handleClick(7)} />
        <Sqaure value={squares[8]} onSquareClick={handleClick(8)} />
      </div>
    </>
  );
}
