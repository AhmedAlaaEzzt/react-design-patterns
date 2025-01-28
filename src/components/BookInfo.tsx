import { IBook } from "../interfaces/IBook";

type TBookInfoProps = {
  book?: IBook;
};

export function BookInfo(props: TBookInfoProps) {
  const { book } = props;

  if (!book) {
    return <p>Loading...</p>;
  }

  const { name, price, title, pages } = book;

  return (
    <>
      {!book && <p>Loading...</p>}
      {book && (
        <div className="border border-gray-300 rounded-md p-4">
          <h3>{name}</h3>
          <p>${price}</p>
          <h3>Title: {title}</h3>
          <p>Number of pages: {pages}</p>
        </div>
      )}
    </>
  );
}
