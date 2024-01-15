import React from "react";
import { ScriptureData } from "./types";
import Torifuda from "./Torifuda";

interface TorifudaGroupProps {
  cards: ScriptureData[];
  chosenScriptures: ScriptureData[];
  transitionX: number;
  transitionY: number;
  isMine: boolean;
}

const TorifudaGroup: React.FC<TorifudaGroupProps> = ({
  cards,
  chosenScriptures,
  transitionX,
  transitionY,
  isMine,
}) => {
  return (
    <div
      className="w-full flex flex-wrap justify-between items-between"
      style={
        isMine
          ? {
              transform: "rotate(180deg)",
            }
          : {}
      }
      onTouchMove={(event) => {
        console.log("MOVE", event);
      }}
    >
      {cards.map((scripture, index) => {
        if (scripture.reference) {
          return (
            <Torifuda
              key={scripture.reference}
              scripture={scripture}
              chosenScriptures={chosenScriptures}
              transitionX={transitionX}
              transitionY={transitionY}
              isMine={isMine}
              index={index}
            />
          );
        } else
          return <div key={`torifuda-${index}`} className="w-12 h-16 m-0.5" />;
      })}
    </div>
  );
};

export default TorifudaGroup;
