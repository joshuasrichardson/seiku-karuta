import React from "react";
import ScripturePlayer from "./ScripturePlayer";

const App: React.FC = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-16 p-8">
      <h1 className="text-green-700 text-3xl">聖句カルタ</h1>
      <ScripturePlayer completeGame={() => alert("Game Over!")} />
    </div>
  );
};

export default App;
