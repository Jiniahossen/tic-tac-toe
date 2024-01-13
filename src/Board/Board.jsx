import { useState } from "react";

function Sqaure({ value, onSquareClick }) {
  return (
    <button
      onClick={onSquareClick}
      className="w-20 h-20 border border-gray-600 m-1 bg-white leading-9 text-lg"
    >
      {value}
    </button>
  );
}

function Board({onPlay,isXNext,squares}) {

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (isXNext ? "X" : "O");
  }

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares?.slice();
    if (isXNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  return (
    <>
      <div>{status}</div>
      <div className="flex ">
        <Sqaure value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Sqaure value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Sqaure value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="flex ">
        <Sqaure value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Sqaure value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Sqaure value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="flex ">
        <Sqaure value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Sqaure value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Sqaure value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [isXNext, setIsXNext] = useState(true);

  const currentSquare = history[history.length - 1];
  function handlePlay(nextSquares){

    setIsXNext(!isXNext);
    setHistory([...history,nextSquares]);
  }

  return (
    <>
      <div>
        <Board
        isXNext={isXNext}
        squares={currentSquare}
        onPlay={handlePlay}
        ></Board>
      </div>
      <div>
        <ol></ol>
      </div>
    </>
  );
}
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
