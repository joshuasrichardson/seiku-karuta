import { Language } from "./types";

export const translations: { [key: string]: { [key: string]: string } } = {
  [Language.ENGLISH]: {
    "Scripture Karuta": "Scripture Karuta",
    Scripture: "Scripture",
    Karuta: "Karuta",
    "Old Testament": "Old Testament",
    "New Testament": "New Testament",
    "Book of Mormon": "Book of Mormon",
    "Doctrine and Covenants": "Doctrine and Covenants",
    "Playback Speed": "Playback Speed",
    Language: "Language",
    " scriptures remaining": " scriptures remaining",
    Skip: "Skip",
  },
  [Language.JAPANESE]: {
    "Scripture Karuta": "聖句歌留多",
    Scripture: "聖句",
    Karuta: "歌留多",
    "Old Testament": "旧約聖書",
    "New Testament": "新約聖書",
    "Book of Mormon": "モルモン書",
    "Doctrine and Covenants": "教義と契約",
    "Playback Speed": "再生速度",
    Language: "言語",
    " scriptures remaining": "聖句残残っている",
    Skip: "飛ばす",
  },
};
