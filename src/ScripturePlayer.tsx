import React, { useEffect, useState } from "react";
import AudioPlayer from "./AudioPlayer";
import { introScriptures, masteryScriptures } from "./scriptures";
import { getRandomItemFromArray, removeRandomItemFromArray } from "./utils";
import DeckSelector from "./DeckSelector";
import { StandardWork } from "./types";
import { useAppContext } from "./AppProvider";

interface ScripturePlayerProps {
  completeGame: () => void;
}

const ScripturePlayer: React.FC<ScripturePlayerProps> = ({ completeGame }) => {
  const { language, t } = useAppContext();

  const [scriptureSrc, setScriptureSrc] = useState<string | undefined>();
  const [decks, setDecks] = useState<StandardWork[]>(
    Object.values(StandardWork)
  );
  const [unusedMasteryScriptures, setUnusedMasteryScriptures] = useState(
    decks.map((deck) => masteryScriptures(language)[deck]).flat()
  );
  const [isReadingIntro, setIsReadingIntro] = useState(true);

  useEffect(() => {
    setUnusedMasteryScriptures(
      decks.map((deck) => masteryScriptures(language)[deck]).flat()
    );
  }, [decks, language]);

  const chooseNextScripture = (): string | undefined => {
    if (unusedMasteryScriptures.length === 0) return undefined;

    if (isReadingIntro) {
      return getRandomItemFromArray(introScriptures(language));
    }

    return removeRandomItemFromArray(
      unusedMasteryScriptures,
      setUnusedMasteryScriptures
    );
  };

  useEffect(() => {
    const newSrc = chooseNextScripture();
    setScriptureSrc(newSrc);
    if (!newSrc) completeGame();
  }, [isReadingIntro, language, decks]);

  const onAudioEnd = () => {
    setIsReadingIntro((prev) => !prev);
  };

  return (
    <div>
      <AudioPlayer
        src={scriptureSrc}
        onAudioEnd={onAudioEnd}
        color={
          isReadingIntro ? "text-green-700" : "text-blue-700 animate-pulse"
        }
      />
      <DeckSelector
        allDecks={Object.values(StandardWork)}
        decks={decks}
        setDecks={setDecks}
      />
      <div className="text-xs flex items-center justify-center my-6">
        {unusedMasteryScriptures.length}
        {t(" scriptures remaining")}
      </div>
    </div>
  );
};

export default ScripturePlayer;
