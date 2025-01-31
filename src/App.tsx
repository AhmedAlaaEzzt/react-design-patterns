import axios from "axios";
import { UserInfo } from "./components/UserInfo";
import { DataSource } from "./components/DataSource";
import "./App.css";
import { IUser } from "./interfaces/IUser";

function App() {
  const getDataFromServer = async <T,>(url: string): Promise<T> => {
    const response = await axios.get<T>(url);
    return response.data;
  };

  return (
    <div>
      <DataSource
        getData={() =>
          getDataFromServer<IUser>("http://localhost:9090/users/1")
        }
        resourceName="user"
      >
        <UserInfo />
      </DataSource>
      <br />
      <DataSource
        getData={() =>
          getDataFromServer<IUser>("http://localhost:9090/users/2")
        }
        resourceName="user"
      >
        <UserInfo />
      </DataSource>
    </div>
  );
}

export default App;
