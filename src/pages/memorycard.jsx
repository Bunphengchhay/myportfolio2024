import React, { useState, useEffect } from "react";

const generateShuffledCards = () => {
  const values = [
    "🐶", "🐱", "🦊", "🐻",
    "🐼", "🦁", "🐸", "🐵",
  ];
  const doubleValues = [...values, ...values];
  return doubleValues
    .sort(() => Math.random() - 0.5)
    .map((value, index) => ({
      id: index,
      value,
      flipped: false,
      matched: false,
    }));
};

const MemoryCardGame = () => {
  const [cards, setCards] = useState(generateShuffledCards());
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [disableClicks, setDisableClicks] = useState(false);
  const [won, setWon] = useState(false);
  const [isGameOpen, setIsGameOpen] = useState(false);

  useEffect(() => {
    if (firstCard && secondCard) {
      setDisableClicks(true);
      if (firstCard.value === secondCard.value) {
        setCards(prev =>
          prev.map(card =>
            card.value === firstCard.value
              ? { ...card, matched: true }
              : card
          )
        );
        resetTurn();
      } else {
        setTimeout(() => {
          setCards(prev =>
            prev.map(card =>
              card.id === firstCard.id || card.id === secondCard.id
                ? { ...card, flipped: false }
                : card
            )
          );
          resetTurn();
        }, 1000);
      }
    }
  }, [secondCard, firstCard]);

  useEffect(() => {
    if (cards.every(card => card.matched)) {
      setWon(true);
    }
  }, [cards]);

  const handleCardClick = (card) => {
    if (disableClicks || card.flipped || card.matched) return;

    const flippedCard = { ...card, flipped: true };
    setCards(prev =>
      prev.map(c => (c.id === card.id ? flippedCard : c))
    );

    if (!firstCard) {
      setFirstCard(flippedCard);
    } else if (!secondCard) {
      setSecondCard(flippedCard);
    }
  };

  const resetTurn = () => {
    setFirstCard(null);
    setSecondCard(null);
    setDisableClicks(false);
  };

  const resetGame = () => {
    setCards(generateShuffledCards());
    setFirstCard(null);
    setSecondCard(null);
    setDisableClicks(false);
    setWon(false);
  };

  return (
    <div className="p-4 pt-4 text-center bg-stone-800 rounded-3xl shadow-xl text-white mb-10">
      <p className='text-gray-500'> Test that memory  </p>
      <h1 className="text-3xl font-bold mb-4"> Memory Card Game</h1>
      <button onClick={() => setIsGameOpen(!isGameOpen)} className="px-4 py-1 rounded-md bg-indigo-600 text-white text-sm font-bold hover:shadow-[0_0_10px_#6366f1,0_0_20px_#6366f1] hover:scale-105 transition"> {isGameOpen ? "Close" : "Start"} </button>
      {isGameOpen && <div>
        <div className="grid grid-cols-4 gap-3 max-w-md mx-auto mt-4">
            {cards.map(card => (
            <div
                key={card.id}
                className={`w-16 h-16 border text-2xl flex items-center justify-center rounded cursor-pointer transition duration-300 ${
                card.flipped || card.matched
                    ? "bg-white text-black"
                    : "bg-gray-800 text-blue-500"
                }`}
                onClick={() => handleCardClick(card)}
            >
                {card.flipped || card.matched ? card.value : "?"}
            </div>
            ))}
        </div>

        <button
            onClick={resetGame}
            className="mt-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm"
        >
            Restart Game
        </button>

        {won && (
            <div className="mt-4 text-xl font-bold">
            🎉 You matched all cards!
            </div>
        )}
        </div>}
    </div>
  );
};

export default MemoryCardGame;
