import { UserLoader } from "./components/UserLoader";
import { UserInfo } from "./components/UserInfo";
import "./App.css";

function App() {
  return (
    <div>
      <UserLoader id="1">
        <UserInfo />
      </UserLoader>
      <UserLoader id="2">
        <UserInfo />
      </UserLoader>
      <UserLoader id="3">
        <UserInfo />
      </UserLoader>
    </div>
  );
}

export default App;
