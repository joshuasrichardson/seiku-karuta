import React from "react";
import { ScriptureData } from "./types";

interface TorifudaProps {
  scripture: ScriptureData;
  chosenScripture?: ScriptureData;
  transitionX: number;
  transitionY: number;
  hitCardMobile: any;
  hitCardDesktop: any;
  scriptureSrc?: string;
  isMine: boolean;
}

const Torifuda: React.FC<TorifudaProps> = ({
  scripture,
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
          hitCardDesktop({ event, card: scripture, scriptureSrc })
        }
        onTouchMove={(event) =>
          hitCardMobile({
            isMine,
            event,
            card: scripture,
            scriptureSrc,
          })
        }
      >
        {scripture.torifuda}
      </div>
    </div>
  );
};

export default Torifuda;
