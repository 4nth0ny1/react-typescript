// adding generic to allow the list of array of objects, strings and numbers. use when you don't know what the prop will be.

type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

export const List = <T extends { id: number; first: string; last: string }>({
  items,
  onClick,
}: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item) => {
        return (
          <div key={item.id} onClick={() => onClick(item)}>
            {item.id}: {item.first} {item.last}
          </div>
        );
      })}
    </div>
  );
};
