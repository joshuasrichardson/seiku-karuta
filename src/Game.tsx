import React from "react";
import LanguageSelector from "./LanguageSelector";
import ScripturePlayer from "./ScripturePlayer";

interface GameProps {}

const Game: React.FC<GameProps> = ({}) => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-12 bg-lime-50 h-[100vh]">
      <LanguageSelector />
      <ScripturePlayer completeGame={() => alert("Game Over!")} />
    </div>
  );
};

export default Game;
