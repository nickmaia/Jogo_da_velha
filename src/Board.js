import { useState } from "react";
import Square from "./Square.js";
import calculateWinner from "./utils/gameLogic.js";

export default function Board() {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));

    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }

        const nextSquares = squares.slice();
        nextSquares[i] = xIsNext ? "X" : "O";
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    }

    const winner = calculateWinner(squares);
    const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? "X" : "O"}`;

    function restartGame() {
        setSquares(Array(9).fill(null));
        setXIsNext(true);
    }

    const renderSquare = (i) => (
        <Square value={squares[i]} onSquareClick={() => handleClick(i)} />
    );

    return (
        <>
            <div className="status">{status}</div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
            <button className="restart-button" onClick={restartGame}>
                Restart Game
            </button>
        </>
    );
}
