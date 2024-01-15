import React from "react";
import { ScriptureData } from "./types";

interface TorifudaProps {
  scripture: ScriptureData;
  chosenScriptures: ScriptureData[];
  transitionX: number;
  transitionY: number;
  isMine: boolean;
  index: number;
}

const Torifuda: React.FC<TorifudaProps> = ({
  scripture,
  chosenScriptures,
  transitionX,
  transitionY,
  isMine,
  index,
}) => {
  const isChosen = () => {
    return !!chosenScriptures.find(
      (chosenScripture) => chosenScripture.torifuda === scripture.torifuda
    );
  };

  return (
    <div
      key={scripture.torifuda}
      style={
        isChosen()
          ? {
              transform: `translateX(${transitionX}px) translateY(${transitionY}px)`,
              transition: "transform 0.3s linear",
            }
          : {}
      }
    >
      <div
        className="bg-yellow-50 p-0.5 m-0.5 rounded-sm w-12 h-16 border border-green-700 overflow-wrap text-left"
        style={{
          fontSize: 7,
          lineHeight: 1.1,
          transform: "rotate(180deg)",
          overflowWrap: "break-word",
        }}
        data-index={index}
        data-is-mine={isMine}
      >
        {scripture.torifuda}
      </div>
    </div>
  );
};

export default Torifuda;
