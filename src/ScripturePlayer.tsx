import React, { ReactNode, useCallback, useEffect, useState } from "react";
import AudioPlayer from "./AudioPlayer";
import { introScriptures, masteryScriptures } from "./scriptures";
import { getRandomItemFromArray, removeRandomItemFromArray } from "./utils";
import DeckSelector from "./DeckSelector";
import { AudioPlayerSize } from "./types";
import { useAppContext } from "./AppProvider";

interface PlayingFieldProps {
  scriptureSrc?: string;
}

interface ScripturePlayerProps {
  completeGame: () => void;
  playingField?: ({ scriptureSrc }: PlayingFieldProps) => ReactNode;
}

const ScripturePlayer: React.FC<ScripturePlayerProps> = ({
  completeGame,
  playingField,
}) => {
  const { language, t, decks, areIntrosEnabled, setAreIntrosEnabled } =
    useAppContext();

  const [scriptureSrc, setScriptureSrc] = useState<string | undefined>();
  const [unusedMasteryScriptures, setUnusedMasteryScriptures] = useState(
    decks.map((deck) => masteryScriptures(language)[deck]).flat()
  );
  const [isReadingIntro, setIsReadingIntro] = useState(true);
  const [hasPressedPlay, setHasPressedPlay] = useState(false);

  useEffect(() => {
    setUnusedMasteryScriptures(
      decks.map((deck) => masteryScriptures(language)[deck]).flat()
    );
  }, [decks, language]);

  useEffect(() => {
    if (!areIntrosEnabled) setIsReadingIntro(false);
  }, [areIntrosEnabled]);

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

  const onAudioEnd = useCallback(() => {
    if (!areIntrosEnabled) {
      const newSrc = chooseNextScripture();
      setScriptureSrc(newSrc);
      if (!newSrc) completeGame();
      return;
    }

    setIsReadingIntro((prev) => !prev);
  }, [areIntrosEnabled, isReadingIntro, unusedMasteryScriptures]);

  const ScripturePlayerContents = () => (
    <>
      <label
        htmlFor={`intro-enabled-check`}
        className="flex items-center gap-2 mb-6 -mt-6"
      >
        <input
          id={`intro-enabled-check`}
          checked={areIntrosEnabled}
          type="checkbox"
          onChange={(e) => setAreIntrosEnabled(e.target.checked)}
          className="checkbox text-green-700 focus:ring-green-700 h-4 w-4"
        />
        {t("Enable Intro Scriptures")}
      </label>
      <AudioPlayer
        src={scriptureSrc}
        onAudioEnd={onAudioEnd}
        color={
          isReadingIntro ? "text-green-700" : "text-blue-700 animate-pulse"
        }
        hasPressedPlay={hasPressedPlay}
        setHasPressedPlay={setHasPressedPlay}
      />
      <DeckSelector />
      <div className="text-xs flex items-center justify-center my-6">
        {unusedMasteryScriptures.length}
        {t(" scriptures remaining")}
      </div>
    </>
  );

  return (
    <>
      {playingField ? (
        <>
          {playingField({ scriptureSrc })}
          <div className="fixed top-2 right-2">
            <AudioPlayer
              size={AudioPlayerSize.SMALL}
              src={scriptureSrc}
              onAudioEnd={onAudioEnd}
              color={
                isReadingIntro
                  ? "text-green-700"
                  : "text-blue-700 animate-pulse"
              }
              hasPressedPlay={hasPressedPlay}
              setHasPressedPlay={setHasPressedPlay}
            />
          </div>
        </>
      ) : (
        <div>
          <ScripturePlayerContents />
        </div>
      )}
    </>
  );
};

export default ScripturePlayer;
