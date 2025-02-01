// render prop pattern
import React, { useEffect, useState } from "react";

type TDataSourceWithRenderProps<T> = {
  getData: () => Promise<T>;
  renderItem: (item: T) => React.ReactNode;
};

export function DataSourceWithRender<T>(props: TDataSourceWithRenderProps<T>) {
  const { getData, renderItem } = props;

  const [resource, setResource] = useState<T | null>(null);

  useEffect(() => {
    (async () => {
      const response = await getData();
      setResource(response);
    })();
  }, [getData]);

  return (
    <>
      {resource && renderItem(resource)}
    </> 
  );
}
