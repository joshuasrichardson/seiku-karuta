import { StandardWork } from "./constants";
import { toTitleCase } from "./utils";

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
          className="flex items-center gap-2 mt-4"
        >
          <input
            id={`${deck}-check`}
            checked={decks.includes(deck)}
            type="checkbox"
            value={deck}
            onChange={(e) => onCheck(deck, e.target.checked)}
          />
          {toTitleCase(deck)}
        </label>
      ))}
    </div>
  );
};

export default DeckSelector;
