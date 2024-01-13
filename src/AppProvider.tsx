import React, {
  ReactElement,
  createContext,
  useContext,
  useState,
} from "react";
import { AppContextValue, Language, StandardWork } from "./types";
import { translations } from "./translations";

const AppContext = createContext<AppContextValue>({
  language: Language.ENGLISH,
  setLanguage: () => null,
  t: (text: string) => text,
  decks: Object.values(StandardWork),
  setDecks: () => null,
  areIntrosEnabled: true,
  setAreIntrosEnabled: () => null,
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

  const t = (text: string): string => {
    return translations[language][text] || text;
  };

  const value = {
    language,
    setLanguage,
    t,
    decks,
    setDecks,
    areIntrosEnabled,
    setAreIntrosEnabled,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
