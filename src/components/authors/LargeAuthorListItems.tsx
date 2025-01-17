import { IAuthor } from "../../interfaces/IAuthor";

type TLargeAuthorListItemsProps = {
  author: IAuthor;
};

export function LargeAuthorListItems(props: TLargeAuthorListItemsProps) {
  const { author } = props;

  const { name, age, country, books } = author;

  return (
    <div className="bg-gray-300 p-4 rounded-md border-2 border-gray-700">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Country: {country}</p>
      <h3>Books</h3>
      <ul>
        {books.map((book) => (
          <li key={book}>{book}</li>
        ))}
      </ul>
    </div>
  );
}
