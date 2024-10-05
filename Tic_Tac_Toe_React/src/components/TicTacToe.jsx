import React, { useState } from 'react';
import './TicTacToe.css'; // Asegúrate de incluir estilos si los necesitas

const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [gameOver, setGameOver] = useState(false);

    const winningCombinations = [
        [0, 1, 2], // Fila superior
        [3, 4, 5], // Fila del medio
        [6, 7, 8], // Fila inferior
        [0, 3, 6], // Columna izquierda
        [1, 4, 7], // Columna central
        [2, 5, 8], // Columna derecha
        [0, 4, 8], // Diagonal principal
        [2, 4, 6], // Diagonal secundaria
    ];

    const handleClick = (index) => {
        if (board[index] || gameOver) return; // Si la celda ya tiene un valor o el juego terminó

        const newBoard = [...board];
        newBoard[index] = currentPlayer;
        setBoard(newBoard);

        if (checkWinner(newBoard)) {
            alert(`¡El ganador es ${currentPlayer}!`);
            setGameOver(true);
        } else {
            setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
        }
    };

    const checkWinner = (board) => {
        return winningCombinations.some(combination => {
            const [a, b, c] = combination;
            return board[a] && board[a] === board[b] && board[a] === board[c];
        });
    };

    const restartGame = () => {
        setBoard(Array(9).fill(null));
        setCurrentPlayer('X');
        setGameOver(false);
    };

    return (
        <div>
            <h1>Tic Tac Toe</h1>
            <div className="board">
                {board.map((cell, index) => (
                    <div key={index} className="cell" onClick={() => handleClick(index)}>
                        {cell}
                    </div>
                ))}
            </div>
            <button onClick={restartGame}>Reiniciar Partida</button>
        </div>
    );
};

export default TicTacToe;

/*Lo que me cuesta de React es la forma 
de ir colocando algunas funcionalidades de los elementos

ejemplo: 

{board.map((cell, index) => (
<div key={index} className="cell" onClick={() => handleClick(index)}>
{cell}
</div>

*/