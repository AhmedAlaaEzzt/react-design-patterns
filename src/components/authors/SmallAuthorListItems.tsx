import { IAuthor } from "../../interfaces/IAuthor";

type TSmallAuthorListItemsProps = {
  author: IAuthor;
};

export function SmallAuthorListItems(props: TSmallAuthorListItemsProps) {
  const { author } = props;

  const { name, age } = author;

  return (
    <p className="bg-blue-300 p-4 rounded-md border border-gray-700">
      Name: {name}, Age: {age}
    </p>
  );
}
