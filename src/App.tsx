import { IAuthor } from "./interfaces/IAuthor";
import { RegularList } from "./components/lists/RegularList";
import { LargeAuthorListItems } from "./components/authors/LargeAuthorListItems";
import { SmallAuthorListItems } from "./components/authors/SmallAuthorListItems";
import { authors } from "./data/authors";

import "./App.css";

function App() {
  return (
    <div>
      <RegularList<IAuthor>
        items={authors}
        // The function acts as an adapter that maps the incoming props to the expected format
        // The arrow function acts as a bridge to reshape the props into the format that LargeListItems expects.
        ItemComponent={(props: IAuthor) => (
          <LargeAuthorListItems author={props} />
        )}
      />
      <br />
      <RegularList<IAuthor>
        items={authors}
        // The function acts as an adapter that maps the incoming props to the expected format
        // The arrow function acts as a bridge to reshape the props into the format that LargeListItems expects.
        ItemComponent={(props: IAuthor) => (
          <SmallAuthorListItems author={props} />
        )}
      />
    </div>
  );
}

export default App;
