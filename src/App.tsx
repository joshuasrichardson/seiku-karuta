import React from "react";
import { AppProvider } from "./AppProvider";
import Game from "./Game";
import Study from "./Study";

const App: React.FC = () => {
  return (
    <AppProvider>
      <>
        <Game />
        <Study />
      </>
    </AppProvider>
  );
};

export default App;
