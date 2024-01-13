import React, { useEffect, useState } from "react";
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

  const [torifuda] = useState(
    shuffleArray(getUniqueScriptureStarts(decks)).slice(0, numCardsInPlay)
  );

  const [myTorifuda, setMyTorifuda] = useState(
    torifuda.slice(0, numCardsPerPlayer)
  );
  const [theirTorifuda, setTheirTorifuda] = useState(
    torifuda.slice(numCardsPerPlayer)
  );

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

  const onInitialContact = ({
    event,
    card,
    isMine,
    scriptureSrc,
    index,
  }: OnHitCardProps) => {
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
          setMyTorifuda((prev) => [
            ...prev.slice(0, index),
            placeholder,
            ...prev.slice(index + 1),
          ]);
          setNumMyCardsRemaining((prev) => prev - 1);
        } else {
          setTheirTorifuda((prev) => [
            ...prev.slice(0, index),
            placeholder,
            ...prev.slice(index + 1),
          ]);
          setNumTheirCardsRemaining((prev) => prev - 1);
        }
      }
    }, 400);
  };

  const onSlide = ({ event, isMine }: OnHitCardProps) => {
    if (!touchX || !touchY) return;
    const moveX = (event.touches[0].clientX - touchX) * (isMine ? -1 : 1);
    const moveY = (event.touches[0].clientY - touchY) * (isMine ? -1 : 1);

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
  };

  const hitCard = (props: OnHitCardProps) => {
    if (!props.scriptureSrc) return;

    if (touchX && touchY) onSlide(props);
    else onInitialContact(props);
  };

  const hitCardDesktop = ({
    // TODO: Send positions instead of event and then combine this with `hitCard`
    event,
    card,
    isMine,
    scriptureSrc,
    index,
  }: {
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>;
    card: ScriptureData;
    isMine: boolean;
    scriptureSrc?: string;
    index: number;
  }) => {
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
        setNumMyCardsRemaining((prev) => prev - 1);
      } else {
        setTheirTorifuda((prev) => [
          ...prev.slice(0, index),
          placeholder,
          ...prev.slice(index + 1),
        ]);
        setNumTheirCardsRemaining((prev) => prev - 1);
      }
    }
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
              hitCard={hitCard}
              hitCardDesktop={hitCardDesktop}
              scriptureSrc={scriptureSrc}
              isMine={false}
            />
            <TorifudaGroup
              cards={myTorifuda}
              chosenScripture={chosenScripture}
              transitionX={transitionX}
              transitionY={transitionY}
              hitCard={hitCard}
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

export default GameBoard;
