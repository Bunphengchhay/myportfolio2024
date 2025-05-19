import React, { useState } from 'react';

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // columns
  [0, 4, 8],
  [2, 4, 6], // diagonals
];

export default function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);

  const checkWinner = (newBoard) => {
    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (
        newBoard[a] &&
        newBoard[a] === newBoard[b] &&
        newBoard[a] === newBoard[c]
      ) {
        return newBoard[a];
      }
    }
    if (newBoard.every((cell) => cell)) {
      return 'Draw';
    }
    return null;
  };

  const handleClick = (index) => {
    if (!isPlayerTurn || board[index] || winner || !gameStarted) return;

    const newBoard = [...board];
    newBoard[index] = 'X'; // Player move
    setBoard(newBoard);

    const result = checkWinner(newBoard);
    if (result) {
      setWinner(result);
      return;
    }

    setIsPlayerTurn(false);
    setTimeout(() => {
      computerMove(newBoard);
    }, 500);
  };

  const computerMove = (currentBoard) => {
    const emptyIndices = currentBoard
      .map((val, idx) => (val ? null : idx))
      .filter((val) => val !== null);

    if (emptyIndices.length === 0) return;

    const randomIndex =
      emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
    currentBoard[randomIndex] = 'O';

    setBoard([...currentBoard]);

    const result = checkWinner(currentBoard);
    if (result) {
      setWinner(result);
    } else {
      setIsPlayerTurn(true);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsPlayerTurn(true);
    setWinner(null);
    setGameStarted(true);
  };

  const startGame = () => {
    setGameStarted(true);
    resetGame();
  };

  const closeGame = () => {
    setGameStarted(false);
  };


  return (
    <div className='w-full my-12 flex justify-center bg-stone-800 text-white rounded-3xl pb-4'> 
    <div style={styles.container}>
      <p className='text-gray-500'> Play A Game </p>
      <h1 className='text-3xl font-bold text-center mb-2'>Tic Tac Toe</h1>
      {gameStarted && <button onClick={closeGame} className='bg-white text-stone-800 py-1 px-2 rounded-md text-sm'>Close Game</button>}
      {!gameStarted ? (
        <button onClick={startGame} className="px-4 py-1 rounded-md bg-indigo-600 text-white text-sm font-bold hover:shadow-[0_0_10px_#6366f1,0_0_20px_#6366f1] hover:scale-105 transition">
          Start
        </button>

      ) : (
        <>
          <div style={styles.board}>
            {board.map((cell, index) => (
              <div
                key={index}
                // style={styles.cell}
                style={{
                  ...styles.cell,
                  color: cell === 'X' ? 'blue' : cell === 'O' ? 'red' : 'black',
                }}
                onClick={() => handleClick(index)}
              >
                {cell}
              </div>
            ))}
          </div>

          {winner && (
            <div style={styles.result}>
              <h2>
                {winner === 'Draw' ? "It's a Draw!" : `${winner} Wins!`}
              </h2>
              <div className='flex gap-2 justify-center mt-2 text-sm'>
              <button onClick={resetGame} className='bg-white text-stone-800 py-1 px-2 rounded-md'>Play Again</button>
              {/* <button onClick={closeGame} className='bg-white text-stone-800 py-1 px-2 rounded-md'>Close Game</button> */}
              <button onClick={resetGame} className='bg-white text-stone-800 py-1 px-2 rounded-md'>Restart</button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'Arial',
  },
  board: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 100px)',
    gridTemplateRows: 'repeat(3, 100px)',
    gap: '5px',
    justifyContent: 'center',
    margin: '20px auto',
  },
  cell: {
    width: '100px',
    height: '100px',
    fontSize: '36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ddd',
    cursor: 'pointer',
  },
  result: {
    marginTop: '20px',
  },
  startButton: {
    cursor: 'pointer',
  },
};
