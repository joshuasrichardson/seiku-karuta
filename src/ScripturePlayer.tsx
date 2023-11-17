import React, { useEffect, useState } from "react";
import AudioPlayer from "./AudioPlayer";
import {
  introScriptures,
  masteryScriptures,
  otherScriptures,
} from "./constants";
import { getRandomItemFromArray, removeRandomItemFromArray } from "./utils";

interface ScripturePlayerProps {
  completeGame: () => void;
}

const ScripturePlayer: React.FC<ScripturePlayerProps> = ({ completeGame }) => {
  const [scripturSrc, setScripturSrc] = useState<string | undefined>();
  const [unusedMasteryScriptures, setUnusedMasteryScriptures] =
    useState(masteryScriptures);
  const [unusedOtherScriptures, setUnusedOtherScriptures] =
    useState(otherScriptures);
  const [isReadingIntro, setIsReadingIntro] = useState(true);

  const chooseScriptureListAndSetter = (): any[] => {
    if (unusedOtherScriptures.length === 0) {
      return [unusedMasteryScriptures, setUnusedMasteryScriptures];
    }
    return Math.random() < 0.5
      ? [unusedMasteryScriptures, setUnusedMasteryScriptures]
      : [unusedOtherScriptures, setUnusedOtherScriptures];
  };

  const chooseNextScripture = (): string | undefined => {
    if (unusedMasteryScriptures.length === 0) return undefined;
    if (isReadingIntro) return getRandomItemFromArray(introScriptures);
    const [scriptures, setScriptures] = chooseScriptureListAndSetter();

    return removeRandomItemFromArray(scriptures, setScriptures);
  };

  useEffect(() => {
    const newSrc = chooseNextScripture();
    setScripturSrc(newSrc);
    if (!newSrc) completeGame();
  }, [isReadingIntro]);

  const onAudioEnd = () => {
    setIsReadingIntro((prev) => !prev);
  };

  return <AudioPlayer src={scripturSrc} onAudioEnd={onAudioEnd} />;
};

export default ScripturePlayer;
