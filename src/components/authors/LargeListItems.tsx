import { IAuther } from "../../interfaces/IAuther";

type TLargeListItemsProps = {
  author: IAuther;
};

export function LargeListItems(props: TLargeListItemsProps) {
  const { author } = props;

  const { name, age, country, books } = author;

  return (
    <>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Country: {country}</p>
      <h3>Books</h3>
      <ul>
        {books.map((book) => (
          <li key={book}>{book}</li>
        ))}
      </ul>
    </>
  );
}
