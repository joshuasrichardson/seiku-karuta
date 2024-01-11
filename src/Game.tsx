import React, { useState } from "react";
import LanguageSelector from "./LanguageSelector";
import ScripturePlayer from "./ScripturePlayer";
import Study from "./Study";
import SinglePlayerScreen from "./SinglePlayerScreen";

interface GameScreenProps {
  children: React.ReactNode;
}

const MultiPlayerScreen: React.FC<GameScreenProps> = () => (
  <>
    <LanguageSelector />
    <ScripturePlayer completeGame={() => alert("Game Over!")} />
  </>
);

const singlePlayerScreen = (
  <SinglePlayerScreen>
    <LanguageSelector />
    <ScripturePlayer completeGame={() => alert("Game Over!")} />
  </SinglePlayerScreen>
);

const multiPlayerScreen = (
  <MultiPlayerScreen>
    <LanguageSelector />
    <ScripturePlayer completeGame={() => alert("Game Over!")} />
  </MultiPlayerScreen>
);

const Game: React.FC = () => {
  const [gameScreen, setGameScreen] = useState(multiPlayerScreen);

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center gap-12 bg-lime-50 h-[100vh]">
        {gameScreen === singlePlayerScreen && (
          <style>
            {`body, html {
          overflow: hidden;
        }`}
          </style>
        )}
        <button
          onClick={() =>
            setGameScreen((prev) =>
              prev === singlePlayerScreen
                ? multiPlayerScreen
                : singlePlayerScreen
            )
          }
          className="-mb-4"
        >
          {gameScreen === multiPlayerScreen
            ? "Play Single Player"
            : "Play Multi Player"}
        </button>
        {gameScreen}
      </div>
      {gameScreen === multiPlayerScreen && <Study />}
    </>
  );
};

export default Game;
