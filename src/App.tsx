import { ResourceLoader } from "./components/ResourceLoader";
import { UserInfo } from "./components/UserInfo";
import { BookInfo } from "./components/BookInfo";
import "./App.css";

function App() {
  return (
    <div>
      <ResourceLoader
        resourceUrl="http://localhost:9090/users/1"
        resourceName="user"
      >
        <UserInfo />
      </ResourceLoader>
      <ResourceLoader
        resourceUrl="http://localhost:9090/books/1"
        resourceName="book"
      >
        <BookInfo />
      </ResourceLoader>
    </div>
  );
}

export default App;
