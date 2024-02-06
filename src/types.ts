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

export enum GameEventType {
  START = "Start",
  BEGIN_READING_CARD = "Begin Reading Card",
  HIT_CARD = "Hit Card",
  TAKE_CARD = "Take Card",
  FAULT = "Fault",
  FINISH_READING_CARD = "Finish Reading Card",
  END = "End",
}

export interface GameEvent {
  time: number;
  type: GameEventType;
  username?: string;
  scriptureReference?: string;
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
  gameEvents: GameEvent[];
  setGameEvents: React.Dispatch<React.SetStateAction<GameEvent[]>>;
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
  hitTime: number;
  scriptureSrc?: string;
}
