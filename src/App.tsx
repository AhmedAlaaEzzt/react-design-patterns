import { SplitScreen } from "./components/SplitScreen";
import { First } from "./components/First";
import { Second } from "./components/Second";
import "./App.css";

function App() {
  return (
    <SplitScreen>
      <First />
      <Second />
    </SplitScreen>
  );
}

export default App;
