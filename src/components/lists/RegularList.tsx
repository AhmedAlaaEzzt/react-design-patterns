type TRegularListProps<T> = {
  items: T[];
  ItemComponent: React.ComponentType<T>;
};

export function RegularList<T>(props: TRegularListProps<T>) {
  const { items, ItemComponent } = props;

  return (
    <div className="flex flex-col gap-4">
      {items.map((item, i) => (
        <ItemComponent key={i} {...item} />
      ))}
    </div>
  );
}
