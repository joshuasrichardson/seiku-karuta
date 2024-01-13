import React, { useState } from "react";
import LanguageSelector from "./LanguageSelector";
import ScripturePlayer from "./ScripturePlayer";
import Study from "./Study";
import GameBoard from "./GameBoard";
import Menu from "./Menu";

const gameBoard = (
  <GameBoard>
    <LanguageSelector />
    <ScripturePlayer completeGame={() => alert("Game Over!")} />
  </GameBoard>
);

const menu = <Menu />;

const Game: React.FC = () => {
  const [gameScreen, setGameScreen] = useState(menu);

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center gap-12 bg-lime-50 h-[100vh]">
        {gameScreen === gameBoard && (
          <style>
            {`body, html {
          overflow: hidden;
        }`}
          </style>
        )}
        <button
          onClick={() =>
            setGameScreen((prev) => (prev === gameBoard ? menu : gameBoard))
          }
          className="-mb-4"
        >
          {gameScreen === menu ? "Play" : "Menu"}
        </button>
        {gameScreen}
      </div>
      {gameScreen === menu && <Study />}
    </>
  );
};

export default Game;
