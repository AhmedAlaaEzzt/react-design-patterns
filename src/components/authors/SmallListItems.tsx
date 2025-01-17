import { IAuther } from "../../interfaces/IAuther";

type TSmallListItemsProps = {
  author: IAuther;
};

export function SmallListItems(props: TSmallListItemsProps) {
  const { author } = props;

  const { name, age } = author;

  return (
    <p>
      Name: {name}, Age: {age}
    </p>
  );
}
