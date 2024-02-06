import React, {
  ReactElement,
  createContext,
  useContext,
  useState,
} from "react";
import { AppContextValue, GameEvent, Language, StandardWork } from "./types";
import { translations } from "./translations";

const AppContext = createContext<AppContextValue>({
  language: Language.ENGLISH,
  setLanguage: () => null,
  t: (text: string) => text,
  decks: Object.values(StandardWork),
  setDecks: () => null,
  areIntrosEnabled: true,
  setAreIntrosEnabled: () => null,
  playbackRate: 1,
  setPlaybackRate: () => null,
  gameEvents: [],
  setGameEvents: () => null,
});

interface AppProviderProps {
  children: ReactElement;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState(Language.ENGLISH);
  const [decks, setDecks] = useState<StandardWork[]>(
    Object.values(StandardWork)
  );
  const [areIntrosEnabled, setAreIntrosEnabled] = useState(true);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [gameEvents, setGameEvents] = useState<GameEvent[]>([]);

  const t = (text: string): string => {
    if (!translations[language][text]) {
      if (language !== Language.ENGLISH) {
        console.log(`Missing translation for ${text}`);
      }
      return text;
    }
    return translations[language][text];
  };

  const value = {
    language,
    setLanguage,
    t,
    decks,
    setDecks,
    areIntrosEnabled,
    setAreIntrosEnabled,
    playbackRate,
    setPlaybackRate,
    gameEvents,
    setGameEvents,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
