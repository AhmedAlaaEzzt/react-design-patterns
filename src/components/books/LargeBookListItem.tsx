import { IBook } from "../../interfaces/IBook";

type TLargeBookListItemProps = {
  book: IBook;
};

export function LargeBookListItem(props: TLargeBookListItemProps) {
  const { book } = props;
  const { name, price, title, pages } = book;

  return (
    <div className="bg-slate-300 p-4 rounded border border-slate-400">
      <h2>{name}</h2>
      <p>{price}</p>
      <h2>Title:</h2>
      <p>{title}</p>
      <p># number of pages: {pages}</p>
    </div>
  );
}
