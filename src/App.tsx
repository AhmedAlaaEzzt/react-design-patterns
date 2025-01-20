import { LargeAuthorListItems } from "./components/authors/LargeAuthorListItems";
import { authors } from "./data/authors";
import "./App.css";

function App() {
  const [firstAuthor] = authors;

  return (
    <div>
      <button
        className="bg-blue-400 text-black p-2 rounded-md"
        onClick={() => console.log(firstAuthor)}
      >
        Show Modal
      </button>

      <LargeAuthorListItems author={firstAuthor} />
    </div>
  );
}

export default App;
