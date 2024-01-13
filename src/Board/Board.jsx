import { useState } from "react";

function Sqaure({ value }) {
  function handleClick() {}
  return (
    <button
      onClick={handleClick} //handleClick is not defined
      className="w-20 h-20 border border-gray-600 m-1 bg-white leading-9 text-lg"
    >
      {value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  return (
    <>
      <div className="flex ">
        <Sqaure value={squares[1]} />
        <Sqaure value={squares[2]} />
        <Sqaure value={squares[3]} />
      </div>
      <div className="flex ">
        <Sqaure value={squares[4]} />
        <Sqaure value={squares[5]} />
        <Sqaure value={squares[6]} />
      </div>
      <div className="flex ">
        <Sqaure value={squares[7]} />
        <Sqaure value={squares[8]} />
        <Sqaure value={squares[9]} />
      </div>
    </>
  );
}
