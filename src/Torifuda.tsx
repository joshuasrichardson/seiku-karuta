import React, {
  LegacyRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { debounce } from "lodash";
import {
  Coordinates,
  GameEventType,
  OnHitCardProps,
  ScriptureData,
  StandardWork,
} from "./types";
import { useAppContext } from "./AppProvider";
import { getSrc } from "./scriptures";
import { coordinatesToKey } from "./utils";

interface TorifudaProps {
  scripture: ScriptureData;
  isMine: boolean;
  index: number;
  setTorifuda: React.Dispatch<React.SetStateAction<ScriptureData[]>>;
  registerHitFunction: (
    key: string,
    hitFunction: (props: OnHitCardProps) => void
  ) => void;
}

const Torifuda: React.FC<TorifudaProps> = ({
  scripture,
  isMine,
  index,
  setTorifuda,
  registerHitFunction,
}) => {
  const { language, t, setGameEvents } = useAppContext();

  const [transition, setTransition] = useState({ x: 0, y: 0 });
  const [isChosen, setIsChosen] = useState(false);
  const [center, setCenter] = useState<Coordinates | undefined>();

  const onHitFinish = ({ scriptureSrc, hitTime }: OnHitCardProps) => {
    if (getSrc(language, scripture) === scriptureSrc) {
      const placeholder = {
        uniqueStart: "",
        reference: "",
        fullScripture: "",
        torifuda: "",
        standardWork: StandardWork.BOOK_OF_MORMON,
      };
      setTorifuda((prev) => [
        ...prev.slice(0, index),
        placeholder,
        ...prev.slice(index + 1),
      ]);
      setGameEvents((prev) => [
        ...prev,
        {
          time: hitTime,
          type: GameEventType.TAKE_CARD,
          username: "User",
          scriptureReference: scripture.reference,
        },
      ]);
    }
  };

  const onSlide = ({ transition, scriptureSrc, hitTime }: OnHitCardProps) => {
    if (isChosen) return;
    setIsChosen(true);

    setGameEvents((prev) => [
      ...prev,
      {
        time: hitTime,
        type: GameEventType.HIT_CARD,
        username: "User",
        scriptureReference: scripture.reference,
      },
    ]);

    const adjustedTransition = isMine
      ? { x: -transition.x, y: -transition.y }
      : transition;

    setTimeout(() => {
      onHitFinish({ transition: adjustedTransition, scriptureSrc, hitTime });
    }, 400);

    setTransition(adjustedTransition);

    setTimeout(() => {
      setTransition({ x: 0, y: 0 });
      setIsChosen(false);
    }, 500);
  };

  const debouncedOnSlide = debounce(onSlide, 200, { leading: true });

  const hitCard = useCallback(
    (props: OnHitCardProps) => {
      debouncedOnSlide(props);
    },
    [isChosen]
  );

  useEffect(() => {
    if (!center) return;
    registerHitFunction(coordinatesToKey(center), hitCard);
  }, [center]);

  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    if (!ref?.current) return;
    const rect = ref?.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (rect.right + rect.left) / 2;
    const y = (rect.top + rect.bottom) / 2;
    setCenter({ x, y });
  }, [ref?.current]);

  return (
    <div
      ref={ref as LegacyRef<HTMLDivElement>}
      key={scripture.torifuda}
      style={{
        transform: `translateX(${transition.x}px) translateY(${transition.y}px)`,
        transition: "transform 0.3s linear",
      }}
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
        {t(scripture.torifuda)}
      </div>
    </div>
  );
};

export default Torifuda;
