import React, { useEffect, useState } from "react";
import { useAppContext } from "./AppProvider";
import { GameEventType } from "./types";
import { max, min } from "lodash";

interface GameEventHandlerProps {}

const GameEventHandler: React.FC<GameEventHandlerProps> = () => {
  const { gameEvents } = useAppContext();

  const [stats, setStats] = useState(<></>);

  const calculateHitTimes = () => {
    const times: number[] = [];
    let prevStartTime = 0;

    const dedupedGameEvents = gameEvents.filter((event, index, array) => {
      const isUnique =
        array.findIndex(
          (e) =>
            e.type === event.type &&
            e.scriptureReference === event.scriptureReference
        ) === index;

      return isUnique || event.type !== GameEventType.TAKE_CARD;
    });

    dedupedGameEvents.forEach((event) => {
      if (event.type === GameEventType.BEGIN_READING_CARD) {
        prevStartTime = event.time;
      } else if (event.type === GameEventType.TAKE_CARD) {
        const timeInSeconds = (event.time - prevStartTime) / 1000;
        times.push(timeInSeconds);
      }
    });

    return times;
  };

  const calculateAverageHitTime = (times: number[]) => {
    const sum = times.reduce((totalTime, time) => totalTime + time, 0);
    const average = sum / times.length;

    return average;
  };

  useEffect(() => {
    if (!gameEvents.length) return;
    if (gameEvents[gameEvents.length - 1].type === GameEventType.END) {
      const times = calculateHitTimes();
      const averageHitTime = calculateAverageHitTime(times).toFixed(3);
      const fastestHitTime = min(times);
      const slowestHitTime = max(times);
      setStats(
        <div className="fixed top-1/2 left-1/2 text-green-700 transform -translate-x-1/2 -translate-y-1/2">
          <div className="text-2xl text-center mb-2">Game Over</div>
          <div className="whitespace-nowrap">{`Average Hit: ${averageHitTime} seconds`}</div>
          <div className="whitespace-nowrap">{`Fastest Hit: ${fastestHitTime} seconds`}</div>
          <div className="whitespace-nowrap">{`Slowest Hit: ${slowestHitTime} seconds`}</div>
        </div>
      );
    }
  }, [gameEvents]);

  return stats;
};

export default GameEventHandler;
