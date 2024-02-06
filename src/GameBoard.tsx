import React, { useEffect, useState } from "react";
import ScripturePlayer from "./ScripturePlayer";
import { getUniqueScriptureStarts } from "./scriptures";
import { GameEventType, OnHitCardProps, ScriptureData } from "./types";
import { useAppContext } from "./AppProvider";
import TorifudaGroup from "./TorifudaGroup";
import {
  coordinatesToKey,
  generateCoordinates,
  getClosestPointCoordinates,
  keyToCoordinates,
} from "./utils";

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
  const { decks, setGameEvents } = useAppContext();

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
  const [hitFunctions, setHitFunctions] = useState(
    new Map<string, (props: OnHitCardProps) => void>()
  );
  const [sortedPointKeyXs, setSortedPointKeyXs] = useState<number[]>([]);
  const [sortedPointKeyYs, setSortedPointKeyYs] = useState<number[]>([]);
  const [touch, setTouch] = useState<{ x?: number; y?: number }>({
    x: undefined,
    y: undefined,
  });

  useEffect(() => {
    setSortedPointKeyXs(
      [
        ...new Set(
          Array.from(hitFunctions.keys()).map((p) => keyToCoordinates(p).x)
        ),
      ].sort((a, b) => a - b)
    );
    setSortedPointKeyYs(
      [
        ...new Set(
          Array.from(hitFunctions.keys()).map((p) => keyToCoordinates(p).y)
        ),
      ].sort((a, b) => a - b)
    );
  }, [hitFunctions]);

  const getClosestPointsCoordinates = ({
    x,
    y,
    previousX,
    previousY,
  }: {
    x: number;
    y: number;
    previousX: number;
    previousY: number;
  }) => {
    const points = generateCoordinates({
      x,
      y,
      previousX,
      previousY,
      numPoints: 9,
    });

    const closestPoints = points.map(({ x, y }) => {
      const closestPointKey = getClosestPointCoordinates({
        x,
        y,
        xs: sortedPointKeyXs,
        ys: sortedPointKeyYs,
      });
      return closestPointKey;
    });

    return closestPoints;
  };

  const onTouchMove = async ({
    x,
    y,
    scriptureSrc,
  }: {
    x: number;
    y: number;
    scriptureSrc?: string;
  }) => {
    const closestPointCoordinates = getClosestPointsCoordinates({
      x,
      y,
      previousX: touch.x || x,
      previousY: touch.y || y,
    });

    const uniqueClosestPointCoordinates = [
      ...new Set(closestPointCoordinates),
    ].filter((coordinates) => !!coordinates);

    if (!uniqueClosestPointCoordinates.length) return;

    if (touch.x === undefined || touch.y === undefined) return;
    const moveX = x - touch.x;
    const moveY = y - touch.y;

    const diagonalMove = Math.sqrt(Math.pow(moveX, 2) + Math.pow(moveY, 2));
    const ratio = diagonalMove !== 0 ? 500 / diagonalMove : 0;

    const transition = { x: moveX * ratio, y: moveY * ratio };

    uniqueClosestPointCoordinates.forEach((coordinates) => {
      const hitCard = hitFunctions.get(coordinatesToKey(coordinates) || "");
      if (!!hitCard) {
        const hitTime = Date.now();
        hitCard({
          transition,
          scriptureSrc,
          hitTime,
        });
      }
    });
  };

  const registerHitFunction = (
    key: string,
    hitFunction: (props: OnHitCardProps) => void
  ) => {
    setHitFunctions((prev) => {
      const newMap = new Map(prev);
      newMap.set(key, hitFunction);
      return newMap;
    });
  };

  return (
    <>
      <ScripturePlayer
        completeGame={() => {
          setGameEvents((prev) => [
            ...prev,
            {
              time: Date.now(),
              type: GameEventType.END,
              username: "User",
            },
          ]);
        }}
        playingField={({ scriptureSrc }) => (
          <div
            className="flex flex-col h-full justify-between px-1 py-6"
            style={{ marginTop: -58, paddingTop: 58 }}
            onTouchMove={(event) =>
              onTouchMove({
                x: event.touches[0].clientX,
                y: event.touches[0].clientY,
                scriptureSrc,
              })
            }
            onTouchStart={(event) => {
              setTouch({
                x: event.touches[0].clientX,
                y: event.touches[0].clientY,
              });
            }}
            onTouchEnd={() =>
              setTouch({
                x: undefined,
                y: undefined,
              })
            }
          >
            <TorifudaGroup
              cards={theirTorifuda}
              registerHitFunction={registerHitFunction}
              setTorifuda={setTheirTorifuda}
              isMine={false}
            />
            <TorifudaGroup
              cards={myTorifuda}
              registerHitFunction={registerHitFunction}
              setTorifuda={setMyTorifuda}
              isMine={true}
            />
          </div>
        )}
      />
    </>
  );
};

export default GameBoard;
