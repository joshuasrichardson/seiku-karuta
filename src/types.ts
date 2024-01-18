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
  decks: StandardWork[];
  setDecks: React.Dispatch<React.SetStateAction<StandardWork[]>>;
  areIntrosEnabled: boolean;
  setAreIntrosEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  playbackRate: number;
  setPlaybackRate: React.Dispatch<React.SetStateAction<number>>;
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

export interface Coordinates {
  x: number;
  y: number;
}

export interface OnHitCardProps {
  transition: Coordinates;
  scriptureSrc?: string;
}
