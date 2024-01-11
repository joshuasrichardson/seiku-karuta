import React from "react";
import { AppProvider } from "./AppProvider";
import Game from "./Game";

const App: React.FC = () => {
  return (
    <AppProvider>
      <Game />
    </AppProvider>
  );
};

export default App;
