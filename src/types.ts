export enum Language {
  ENGLISH = "english",
  JAPANESE = "japanese",
}

export enum StandardWork {
  OLD_TESTAMENT = "Old Testament",
  NEW_TESTAMENT = "New Testament",
  BOOK_OF_MORMON = "Book of Mormon",
  DOCTRINE_AND_COVENANTS = "Doctrine and Covenants",
}

export interface AppContextValue {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
  t: (text: string) => string;
}

export interface ScriptureData {
  uniqueStart: string;
  reference: string;
  fullScripture: string;
  torifuda: string;
  standardWork: StandardWork;
}

export enum AudioPlayerSize {
  SMALL = "small",
  LARGE = "large",
}
