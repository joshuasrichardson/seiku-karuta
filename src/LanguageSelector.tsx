import { useAppContext } from "./AppProvider";
import { translations } from "./translations";
import { Language } from "./types";

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useAppContext();

  return (
    <div>
      <label
        key={`language-label`}
        htmlFor={`language-check`}
        className="flex items-center gap-2 mt-4"
      >
        <select
          id={`language-check`}
          value={language}
          onChange={(e) => setLanguage(e.target.value as Language)}
          className="text-green-700 text-3xl bg-inherit centered-select"
        >
          {Object.values(Language).map((languageOption) => (
            <option value={languageOption}>
              {translations[languageOption]["Scripture Karuta"]}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default LanguageSelector;
