import React, { useState } from "react";
import ScripturePlayer from "./ScripturePlayer";
import { getSrc, getUniqueScriptureStarts } from "./scriptures";
import { OnHitCardProps, ScriptureData, StandardWork } from "./types";
import { useAppContext } from "./AppProvider";
import TorifudaGroup from "./TorifudaGroup";

interface GameScreenProps {
  children: React.ReactNode;
}

const shuffleArray = (array: any[]) => {
  const newArray = [...array];

  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray;
};

const GameBoard: React.FC<GameScreenProps> = () => {
  const { language, decks } = useAppContext();

  const numCardsPerDeck = 25;
  const numCards = decks.length * numCardsPerDeck;
  const numCardsInPlay = Math.max(numCards / 2, numCardsPerDeck);
  const numCardsPerPlayer = numCardsInPlay / 2;

  const [torifuda] = useState<ScriptureData[]>(
    shuffleArray(getUniqueScriptureStarts(decks)).slice(0, numCardsInPlay)
  );

  const [myTorifuda, setMyTorifuda] = useState(
    torifuda.slice(0, numCardsPerPlayer)
  );
  const [theirTorifuda, setTheirTorifuda] = useState(
    torifuda.slice(numCardsPerPlayer)
  );

  const [chosenScriptures, setChosenScriptures] = useState<ScriptureData[]>([]);
  const [transitionX, setTransitionX] = useState(0);
  const [transitionY, setTransitionY] = useState(0);
  const [touchX, setTouchX] = useState<number | undefined>();
  const [touchY, setTouchY] = useState<number | undefined>();

  const onHitFinish = ({
    card,
    isMine,
    scriptureSrc,
    index,
  }: OnHitCardProps) => {
    if (getSrc(language, card) === scriptureSrc) {
      const placeholder = {
        uniqueStart: "",
        reference: "",
        fullScripture: "",
        torifuda: "",
        standardWork: StandardWork.BOOK_OF_MORMON,
      };
      if (isMine) {
        setMyTorifuda((prev) => [
          ...prev.slice(0, index),
          placeholder,
          ...prev.slice(index + 1),
        ]);
      } else {
        setTheirTorifuda((prev) => [
          ...prev.slice(0, index),
          placeholder,
          ...prev.slice(index + 1),
        ]);
      }
    }
  };

  const onInitialContact = (props: OnHitCardProps) => {
    setChosenScriptures((prev) => [...prev, props.card]);
    setTouchX(props.x);
    setTouchY(props.y);
    setTimeout(() => {
      onHitFinish(props);
    }, 400);
  };

  const onSlide = ({ x, y, isMine }: OnHitCardProps) => {
    if (!touchX || !touchY) return;
    const moveX = (x - touchX) * (isMine ? -1 : 1);
    const moveY = (y - touchY) * (isMine ? -1 : 1);

    const diagonalMove = Math.sqrt(Math.pow(moveX, 2) + Math.pow(moveY, 2));
    const ratio = diagonalMove !== 0 ? 500 / diagonalMove : 0;

    setTransitionX(moveX * ratio);
    setTransitionY(moveY * ratio);
    setTouchX(undefined);
    setTouchY(undefined);

    setTimeout(() => {
      setTransitionX(0);
      setTransitionY(0);
      setChosenScriptures([]);
    }, 500);
  };

  const hitCard = (props: OnHitCardProps) => {
    if (!props.scriptureSrc) return;

    if (touchX && touchY) onSlide(props);
    else onInitialContact(props);
  };

  return (
    <>
      <ScripturePlayer
        completeGame={() => alert("Game Over!")}
        playingField={({ scriptureSrc }) => (
          <div
            className="flex flex-col h-full justify-between p-1"
            onTouchMove={(event) => {
              const touchingElement = document.elementFromPoint(
                event.touches[0].clientX,
                event.touches[0].clientY
              ) as HTMLElement;
              console.log(touchingElement);

              const touchedTorifuda = touchingElement?.innerText;
              if (!touchedTorifuda) return;

              const isMine =
                touchingElement?.getAttribute("data-is-mine") === "true";

              const card = isMine
                ? myTorifuda.find(
                    (torifuda) => torifuda.torifuda === touchedTorifuda
                  )
                : theirTorifuda.find(
                    (torifuda) => torifuda.torifuda === touchedTorifuda
                  );
              if (!card) return;

              hitCard({
                x: event.touches[0].clientX,
                y: event.touches[0].clientY,
                scriptureSrc,
                isMine,
                index: Number(touchingElement?.getAttribute("data-index")),
                card,
              });
            }}
          >
            <TorifudaGroup
              cards={theirTorifuda}
              chosenScriptures={chosenScriptures}
              transitionX={transitionX}
              transitionY={transitionY}
              isMine={false}
            />
            <TorifudaGroup
              cards={myTorifuda}
              chosenScriptures={chosenScriptures}
              transitionX={transitionX}
              transitionY={transitionY}
              isMine={true}
            />
          </div>
        )}
      />
    </>
  );
};

export default GameBoard;
