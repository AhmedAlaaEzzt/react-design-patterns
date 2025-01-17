import { IBook } from "../../interfaces/IBook";

type TSmallBookListItemProps = {
  book: IBook;
};

export function SmallBookListItem(props: TSmallBookListItemProps) {
  const { book } = props;
  const { name, price } = book;

  return (
    <div className="bg-red-300 p-4 rounded border border-red-400">
      <h2>
        {name} / {price}
      </h2>
    </div>
  );
}
