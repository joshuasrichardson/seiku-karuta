import React from "react";
import { OnHitCardProps, ScriptureData } from "./types";
import Torifuda from "./Torifuda";

interface TorifudaGroupProps {
  cards: ScriptureData[];
  isMine: boolean;
  registerHitFunction: (
    reference: string,
    hitFunction: (props: OnHitCardProps) => void
  ) => void;
  setTorifuda: React.Dispatch<React.SetStateAction<ScriptureData[]>>;
}

const TorifudaGroup: React.FC<TorifudaGroupProps> = ({
  cards,
  registerHitFunction,
  isMine,
  setTorifuda,
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
              isMine={isMine}
              index={index}
              registerHitFunction={registerHitFunction}
              setTorifuda={setTorifuda}
            />
          );
        } else
          return <div key={`torifuda-${index}`} className="w-12 h-16 m-0.5" />;
      })}
    </div>
  );
};

export default TorifudaGroup;
