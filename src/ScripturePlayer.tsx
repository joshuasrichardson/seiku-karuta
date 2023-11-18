import React, { useEffect, useState } from "react";
import AudioPlayer from "./AudioPlayer";
import {
  StandardWork,
  introScriptures,
  masteryScriptures,
  otherScriptures,
} from "./constants";
import { getRandomItemFromArray, removeRandomItemFromArray } from "./utils";
import DeckSelector from "./DeckSelector";

interface ScripturePlayerProps {
  completeGame: () => void;
}

const ScripturePlayer: React.FC<ScripturePlayerProps> = ({ completeGame }) => {
  const [scripturSrc, setScripturSrc] = useState<string | undefined>();
  const [decks, setDecks] = useState<StandardWork[]>([
    StandardWork.OLD_TESTAMENT,
    StandardWork.NEW_TESTAMENT,
  ]);
  const [unusedMasteryScriptures, setUnusedMasteryScriptures] = useState(
    decks.map((deck) => masteryScriptures[deck]).flat()
  );
  const [unusedOtherScriptures, setUnusedOtherScriptures] =
    useState(otherScriptures);
  const [isReadingIntro, setIsReadingIntro] = useState(true);

  useEffect(() => {
    setUnusedMasteryScriptures(
      decks.map((deck) => masteryScriptures[deck]).flat()
    );
  }, [decks]);

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

  return (
    <div>
      <AudioPlayer src={scripturSrc} onAudioEnd={onAudioEnd} />
      <DeckSelector
        allDecks={Object.values(StandardWork)}
        decks={decks}
        setDecks={setDecks}
      />
    </div>
  );
};

export default ScripturePlayer;
