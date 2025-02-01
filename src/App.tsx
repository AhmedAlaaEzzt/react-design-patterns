import axios from "axios";
import { UserInfo } from "./components/UserInfo";
import { DataSourceWithRender } from "./components/DataSourceWithRender";
import "./App.css";
import { IUser } from "./interfaces/IUser";
import { IBook } from "./interfaces/IBook";
import { BookInfo } from "./components/BookInfo";

function App() {
  const getDataFromServer = async <T,>(url: string): Promise<T> => {
    const response = await axios.get<T>(url);
    return response.data;
  };
  // render prop pattern
  return (
    <div>
      <DataSourceWithRender<IUser>
        getData={() =>
          getDataFromServer<IUser>("http://localhost:9090/users/1")
        }
        renderItem={(user) => <UserInfo user={user} />}
      />
      <br />

      <DataSourceWithRender<IBook>
        getData={() =>
          getDataFromServer<IBook>("http://localhost:9090/books/1")
        }
        renderItem={(book) => <BookInfo book={book} />}
      />



    </div>
  );
}

export default App;
