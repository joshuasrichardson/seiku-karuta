import React from "react";
import ScripturePlayer from "./ScripturePlayer";
import LanguageSelector from "./LanguageSelector";
import { AppProvider } from "./AppProvider";

const App: React.FC = () => {
  return (
    <AppProvider>
      <div className="w-full flex flex-col justify-center items-center gap-12 bg-lime-50 h-[100vh]">
        <LanguageSelector />
        <ScripturePlayer completeGame={() => alert("Game Over!")} />
      </div>
    </AppProvider>
  );
};

export default App;
