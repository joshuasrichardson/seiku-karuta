import { useAppContext } from "./AppProvider";
import { StandardWork } from "./types";

interface DeckSelectorProps {
  allDecks: StandardWork[];
  decks: StandardWork[];
  setDecks: React.Dispatch<React.SetStateAction<StandardWork[]>>;
}

const DeckSelector: React.FC<DeckSelectorProps> = ({
  allDecks,
  decks,
  setDecks,
}) => {
  const { t } = useAppContext();

  const onCheck = (deck: StandardWork, isChecked: boolean) => {
    if (isChecked) setDecks((prev) => [...prev, deck]);
    else setDecks((prev) => prev.filter((d) => d !== deck));
  };

  return (
    <div>
      {allDecks.map((deck) => (
        <label
          key={`${deck}-label`}
          htmlFor={`${deck}-check`}
          className="flex items-center gap-2 mt-2"
        >
          <input
            id={`${deck}-check`}
            checked={decks.includes(deck)}
            type="checkbox"
            value={deck}
            onChange={(e) => onCheck(deck, e.target.checked)}
            className="checkbox text-green-700 focus:ring-green-700 h-4 w-4"
          />
          {t(deck)}
        </label>
      ))}
    </div>
  );
};

export default DeckSelector;
