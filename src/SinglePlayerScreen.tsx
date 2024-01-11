import React, { useEffect, useState } from "react";
import ScripturePlayer from "./ScripturePlayer";
import { getSrc, getUniqueScriptureStarts } from "./scriptures";
import { ScriptureData, StandardWork } from "./types";
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

const SinglePlayerScreen: React.FC<GameScreenProps> = () => {
  const { language } = useAppContext();

  const [torifuda] = useState(
    shuffleArray(getUniqueScriptureStarts()).slice(0, 50)
  );

  const [myTorifuda, setMyTorifuda] = useState(torifuda.slice(0, 25));
  const [theirTorifuda, setTheirTorifuda] = useState(torifuda.slice(25));

  const [isMoving, setIsMoving] = useState(false);
  const [chosenScripture, setChosenScripture] = useState<
    ScriptureData | undefined
  >();
  const [transitionX, setTransitionX] = useState(0);
  const [transitionY, setTransitionY] = useState(0);
  const [touchX, setTouchX] = useState<number | undefined>();
  const [touchY, setTouchY] = useState<number | undefined>();
  const [numMyCardsRemaining, setNumMyCardsRemaining] = useState(
    myTorifuda.length
  );
  const [numTheirCardsRemaining, setNumTheirCardsRemaining] = useState(
    theirTorifuda.length
  );

  useEffect(() => {
    if (!numMyCardsRemaining || !numTheirCardsRemaining) alert("Game over!");
  }, [numTheirCardsRemaining, numMyCardsRemaining]);

  const hitCardMobile = ({
    event,
    card,
    isMine,
    scriptureSrc,
  }: {
    event: React.TouchEvent<HTMLButtonElement>;
    card: ScriptureData;
    isMine: boolean;
    scriptureSrc?: string;
  }) => {
    if (!scriptureSrc) return;

    if (touchX && touchY) {
      const moveX = event.touches[0].clientX - touchX;
      const moveY = event.touches[0].clientY - touchY;

      const diagonalMove = Math.sqrt(Math.pow(moveX, 2) + Math.pow(moveY, 2));
      const ratio = diagonalMove !== 0 ? 500 / diagonalMove : 0;

      setTransitionX(moveX * ratio);
      setTransitionY(moveY * ratio);
      setTouchX(undefined);
      setTouchY(undefined);

      setTimeout(() => {
        setIsMoving(false);
        setTransitionX(0);
        setTransitionY(0);
      }, 500);
    } else {
      if (isMoving) return;
      setIsMoving(true);
      setChosenScripture(card);
      setTouchX(event.touches[0].clientX);
      setTouchY(event.touches[0].clientY);
      setTimeout(() => {
        if (getSrc(language, card) === scriptureSrc) {
          const placeholder = {
            uniqueStart: "",
            reference: "",
            fullScripture: "",
            torifuda: "",
            standardWork: StandardWork.BOOK_OF_MORMON,
          };
          if (isMine) {
            setMyTorifuda((prev) => {
              const removeIndex = prev.indexOf(card);
              return [
                ...prev.slice(0, removeIndex),
                placeholder,
                ...prev.slice(removeIndex + 1),
              ];
            });
            setNumMyCardsRemaining((prev) => prev - 1);
          } else {
            setTheirTorifuda((prev) => {
              const removeIndex = prev.indexOf(card);
              return [
                ...prev.slice(0, removeIndex),
                placeholder,
                ...prev.slice(removeIndex + 1),
              ];
            });
            setNumTheirCardsRemaining((prev) => prev - 1);
          }
        }
      }, 400);
    }
  };

  const hitCardDesktop = ({
    event,
    card,
    scriptureSrc,
  }: {
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>;
    card: ScriptureData;
    scriptureSrc?: string;
  }) => {
    console.log(card.reference, event);
    if (!scriptureSrc || isMoving) return;
    setIsMoving(true);
    setChosenScripture(card);
  };

  return (
    <>
      <ScripturePlayer
        completeGame={() => alert("Game Over!")}
        playingField={({ scriptureSrc }) => (
          <div className="flex flex-col h-full justify-between p-1">
            <TorifudaGroup
              cards={theirTorifuda}
              chosenScripture={chosenScripture}
              transitionX={transitionX}
              transitionY={transitionY}
              hitCardMobile={hitCardMobile}
              hitCardDesktop={hitCardDesktop}
              scriptureSrc={scriptureSrc}
              isMine={false}
            />
            <TorifudaGroup
              cards={myTorifuda}
              chosenScripture={chosenScripture}
              transitionX={transitionX}
              transitionY={transitionY}
              hitCardMobile={hitCardMobile}
              hitCardDesktop={hitCardDesktop}
              scriptureSrc={scriptureSrc}
              isMine={true}
            />
          </div>
        )}
      />
    </>
  );
};

export default SinglePlayerScreen;
