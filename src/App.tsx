import { CurrentUserLoader } from "./components/CurrentUserLoader";
import { UserInfo } from "./components/UserInfo";
import "./App.css";

function App() {
  return (
    <div>
      <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>
    </div>
  );
}

export default App;
