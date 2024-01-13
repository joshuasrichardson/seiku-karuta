import React from "react";
import { OnHitCardProps, ScriptureData } from "./types";

interface TorifudaProps {
  scripture: ScriptureData;
  chosenScripture?: ScriptureData;
  transitionX: number;
  transitionY: number;
  hitCard: (props: OnHitCardProps) => void;
  hitCardDesktop: any; // TODO: Fix this type
  scriptureSrc?: string;
  isMine: boolean;
  index: number;
}

const Torifuda: React.FC<TorifudaProps> = ({
  scripture,
  chosenScripture,
  transitionX,
  transitionY,
  hitCard,
  hitCardDesktop,
  scriptureSrc,
  isMine,
  index,
}) => {
  return (
    <div
      key={scripture.torifuda}
      style={
        scripture.torifuda === chosenScripture?.torifuda
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
        onMouseMove={(event) =>
          hitCardDesktop({
            event,
            card: scripture,
            isMine,
            scriptureSrc,
            index,
          })
        }
        onTouchMove={(event) =>
          hitCard({
            isMine,
            event,
            card: scripture,
            scriptureSrc,
            index,
          })
        }
      >
        {scripture.torifuda}
      </div>
    </div>
  );
};

export default Torifuda;
