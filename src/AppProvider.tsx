import React, {
  ReactElement,
  createContext,
  useContext,
  useState,
} from "react";
import { AppContextValue, Language } from "./types";
import { translations } from "./translations";

const AppContext = createContext<AppContextValue>({
  language: Language.ENGLISH,
  setLanguage: () => null,
  t: (text: string) => text,
});

interface AppProviderProps {
  children: ReactElement;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState(Language.ENGLISH);

  const t = (text: string): string => {
    return translations[language][text] || text;
  };

  const value = {
    language,
    setLanguage,
    t,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
