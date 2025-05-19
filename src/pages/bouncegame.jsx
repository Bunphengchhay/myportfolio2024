import React, { useRef, useEffect, useState } from 'react';

const useCanvas = (draw, dimensions) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    let frameCount = 0;
    let animationFrameId;

    const render = () => {
      frameCount++;
      context.clearRect(0, 0, dimensions.width, dimensions.height);
      draw(context, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw, dimensions]);

  return canvasRef;
};

const BallBouncerGame = () => {
  const dimensions = { width: 450, height: 400 };
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [ballSpeedMultiplier, setBallSpeedMultiplier] = useState(1);
  const [paddleWidth, setPaddleWidth] = useState(100);
  const [ballRadius, setBallRadius] = useState(10);
  const [fontLoaded, setFontLoaded] = useState(false);
  const ballXRef = useRef(dimensions.width / 2);
  const ballYRef = useRef(dimensions.height - 30);
  const ballSpeedXRef = useRef(5);
  const ballSpeedYRef = useRef(-5);
  const paddleXRef = useRef((dimensions.width - paddleWidth) / 2);

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap';
    link.onload = () => setFontLoaded(true);
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!gameStarted || gameOver) return;

      if (e.key === 'ArrowLeft') {
        paddleXRef.current -= 20;
      } else if (e.key === 'ArrowRight') {
        paddleXRef.current += 20;
      }

      paddleXRef.current = Math.max(
        0,
        Math.min(paddleXRef.current, dimensions.width - paddleWidth)
      );
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [gameStarted, gameOver, paddleWidth]);

  const draw = (context) => {
    if (!fontLoaded) {
      context.fillStyle = 'white';
      context.font = '16px Arial';
      context.textAlign = 'center';
      context.fillText('Loading...', dimensions.width / 2, dimensions.height / 2);
      return;
    }

    if (!gameStarted) {
      context.fillStyle = 'white';
      context.font = '16px "Press Start 2P"';
      context.textAlign = 'center';
      context.fillText('Press Start Button', dimensions.width / 2, dimensions.height / 2);
      context.font = '9px "Press Start 2P"';
      context.fillText(
        'Use left/right arrows to move paddle',
        dimensions.width / 2,
        dimensions.height / 2 + 30
      );
      return;
    }

    if (gameOver) {
      context.fillStyle = 'red';
      context.font = '30px "Press Start 2P"';
      context.textAlign = 'center';
      context.fillText('Game Over', dimensions.width / 2, dimensions.height / 2);
      context.font = '20px "Press Start 2P"';
      context.fillText(`Final Score: ${score}`, dimensions.width / 2, dimensions.height / 2 + 40);
      return;
    }

    context.fillStyle = '#222';
    context.fillRect(0, 0, dimensions.width, dimensions.height);

    context.beginPath();
    context.arc(ballXRef.current, ballYRef.current, ballRadius, 0, Math.PI * 2);
    context.fillStyle = 'white';
    context.fill();
    context.closePath();

    context.fillStyle = 'white';
    context.fillRect(
      paddleXRef.current,
      dimensions.height - 20,
      paddleWidth,
      10
    );

    // Update ball position
    ballXRef.current += ballSpeedXRef.current;
    ballYRef.current += ballSpeedYRef.current;

    // Wall collisions
    if (
      ballXRef.current + ballRadius > dimensions.width ||
      ballXRef.current - ballRadius < 0
    ) {
      ballSpeedXRef.current = -ballSpeedXRef.current;
    }

    if (ballYRef.current - ballRadius < 0) {
      ballSpeedYRef.current = -ballSpeedYRef.current;
    } else if (ballYRef.current + ballRadius > dimensions.height) {
      if (
        ballXRef.current > paddleXRef.current &&
        ballXRef.current < paddleXRef.current + paddleWidth
      ) {
        ballSpeedYRef.current = -ballSpeedYRef.current;

        const deltaX =
          ballXRef.current - (paddleXRef.current + paddleWidth / 2);
        ballSpeedXRef.current += deltaX * 0.15;

        setScore((prev) => prev + 10 * ballSpeedMultiplier);
      } else {
        setGameOver(true);
        setGameStarted(false);
      }
    }
  };

  const canvasRef = useCanvas(draw, dimensions);

  const startGame = () => {
    setScore(0);
    setGameOver(false);
    setGameStarted(true);

    ballXRef.current = dimensions.width / 2;
    ballYRef.current = dimensions.height - 30;
    ballSpeedXRef.current = 5 * ballSpeedMultiplier;
    ballSpeedYRef.current = -5 * ballSpeedMultiplier;
    paddleXRef.current = (dimensions.width - paddleWidth) / 2;
  };

  const resetGame = () => {
    setGameOver(false);
    setGameStarted(false);
    setScore(0);
    setBallSpeedMultiplier(1);
    setPaddleWidth(100);
    setBallRadius(10);
  };

  const isDragging = useRef(false);

useEffect(() => {
  const handleMouseDown = (e) => {
    const canvasLeft = canvasRef.current.getBoundingClientRect().left;
    const x = e.clientX - canvasLeft;
    if (
      x >= paddleXRef.current &&
      x <= paddleXRef.current + paddleWidth &&
      gameStarted && !gameOver
    ) {
      isDragging.current = true;
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current || !gameStarted || gameOver) return;
    const canvasLeft = canvasRef.current.getBoundingClientRect().left;
    let newX = e.clientX - canvasLeft - paddleWidth / 2;
    newX = Math.max(0, Math.min(newX, dimensions.width - paddleWidth));
    paddleXRef.current = newX;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    handleMouseDown({ clientX: touch.clientX });
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    handleMouseMove({ clientX: touch.clientX });
  };

  window.addEventListener('mousedown', handleMouseDown);
  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('mouseup', handleMouseUp);
  window.addEventListener('touchstart', handleTouchStart);
  window.addEventListener('touchmove', handleTouchMove);
  window.addEventListener('touchend', handleMouseUp);

  return () => {
    window.removeEventListener('mousedown', handleMouseDown);
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
    window.removeEventListener('touchstart', handleTouchStart);
    window.removeEventListener('touchmove', handleTouchMove);
    window.removeEventListener('touchend', handleMouseUp);
  };
}, [gameStarted, gameOver, paddleWidth]);


  return (
    <div className="w-full flex flex-col items-center justify-center h-[800px] bg-stone-800 overflow-hidden rounded-3xl">
      <h1 className="text-2xl font-['Press_Start_2P'] mb-4 text-white">Ball Bouncer</h1>
      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        className="border-2 border-white rounded-lg"
      />
      <div className="mt-4 text-white font-['Press_Start_2P'] text-lg">
        Score: {score}
      </div>
      <div className="mt-4 flex gap-4 flex-wrap justify-center">
        {!gameStarted && !gameOver && (
          <button
            onClick={startGame}
            className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Start Game
          </button>
        )}
        {gameOver && (
          <button
            onClick={startGame}
            className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded"
          >
            Play Again
          </button>
        )}
        <button
          onClick={resetGame}
          className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded"
        >
          Reset
        </button>
        <button
          onClick={() => setBallSpeedMultiplier((prev) => Math.min(prev + 0.2, 2))}
          className="bg-purple-500 hover:bg-purple-700 text-white px-4 py-2 rounded"
        >
          Speed Up
        </button>
        <button
          onClick={() => setBallSpeedMultiplier((prev) => Math.max(prev - 0.2, 0.6))}
          className="bg-purple-500 hover:bg-purple-700 text-white px-4 py-2 rounded"
        >
          Slow Down
        </button>
        <button
          onClick={() => setPaddleWidth((prev) => Math.min(prev + 10, 150))}
          className="bg-yellow-500 hover:bg-yellow-700 text-white px-4 py-2 rounded"
        >
          Widen Paddle
        </button>
        <button
          onClick={() => setPaddleWidth((prev) => Math.max(prev - 10, 50))}
          className="bg-yellow-500 hover:bg-yellow-700 text-white px-4 py-2 rounded"
        >
          Narrow Paddle
        </button>
      </div>
    </div>
  );
};

export default BallBouncerGame;
