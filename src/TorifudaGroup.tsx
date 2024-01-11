import React from "react";
import { ScriptureData } from "./types";
import Torifuda from "./Torifuda";

interface TorifudaGroupProps {
  cards: ScriptureData[];
  chosenScripture?: ScriptureData;
  transitionX: number;
  transitionY: number;
  hitCardMobile: any;
  hitCardDesktop: any;
  scriptureSrc?: string;
  isMine: boolean;
}

const TorifudaGroup: React.FC<TorifudaGroupProps> = ({
  cards,
  chosenScripture,
  transitionX,
  transitionY,
  hitCardMobile,
  hitCardDesktop,
  scriptureSrc,
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
    >
      {cards.map((scripture, index) => {
        if (scripture.reference) {
          return (
            <Torifuda
              key={scripture.reference}
              scripture={scripture}
              chosenScripture={chosenScripture}
              transitionX={transitionX}
              transitionY={transitionY}
              hitCardMobile={hitCardMobile}
              hitCardDesktop={hitCardDesktop}
              scriptureSrc={scriptureSrc}
              isMine={isMine}
            />
          );
        } else
          return <div key={`torifuda-${index}`} className="w-12 h-16 m-0.5" />;
      })}
    </div>
  );
};

export default TorifudaGroup;
