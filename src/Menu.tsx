import LanguageSelector from "./LanguageSelector";
import ScripturePlayer from "./ScripturePlayer";

const Menu: React.FC = () => (
  <>
    <LanguageSelector />
    <ScripturePlayer completeGame={() => alert("Game Over!")} />
  </>
);

export default Menu;
