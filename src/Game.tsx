import React, { useState } from "react";
import LanguageSelector from "./LanguageSelector";
import ScripturePlayer from "./ScripturePlayer";
import Study from "./Study";
import GameBoard from "./GameBoard";
import Menu from "./Menu";
import { useAppContext } from "./AppProvider";
import GameEventHandler from "./GameEventHandler";
import { GameEventType } from "./types";

const gameBoard = (
  <GameBoard>
    <LanguageSelector />
    <ScripturePlayer completeGame={() => alert("Game Over!")} />
  </GameBoard>
);

const menu = <Menu />;

const Game: React.FC = () => {
  const [gameScreen, setGameScreen] = useState(menu);
  const { t, setGameEvents } = useAppContext();

  return (
    <>
      <GameEventHandler />
      <div className="w-full flex flex-col justify-center items-center gap-12 bg-lime-50 h-[100vh]">
        {gameScreen === gameBoard && (
          <style>
            {`body, html {
          overflow: hidden;
        }`}
          </style>
        )}
        <button
          onClick={() => {
            setGameScreen((prev) => (prev === gameBoard ? menu : gameBoard));
            if (gameScreen === gameBoard) {
              setGameEvents((prev) => [
                ...prev,
                {
                  time: Date.now(),
                  type: GameEventType.START,
                },
              ]);
            } else setGameEvents([]);
          }}
          className="z-10 -mb-4"
        >
          {gameScreen === menu ? t("Start") : t("Menu")}
        </button>
        {gameScreen}
      </div>
      {gameScreen === menu && <Study />}
    </>
  );
};

export default Game;
