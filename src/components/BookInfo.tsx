import { IBook } from "../interfaces/IBook";

type TBookInfoProps = {
  book: IBook;
};

export function BookInfo(props: TBookInfoProps) {
  const {
    book,
    book: { name, price, title, pages },
  } = props;

  return (
    <>
      {!book && <p>Loading...</p>}
      {book && (
        <div>
          <h3>{name}</h3>
          <p>${price}</p>
          <h3>Title: {title}</h3>
          <p>Number of pages: {pages}</p>
        </div>
      )}
    </>
  );
}
