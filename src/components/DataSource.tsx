import React, { useEffect, useState } from "react";

type TDataSourceProps<T> = {
  children: React.ReactNode;
  getData: () => Promise<T>;
  resourceName: string;
};

export function DataSource<T>(props: TDataSourceProps<T>) {
  const { children, getData, resourceName } = props;

  const [resource, setResource] = useState<T | null>(null);

  useEffect(() => {
    (async () => {
      const response = await getData();
      setResource(response);
    })();
  }, [getData]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            ...child.props,
            [resourceName]: resource,
          });
        }
      })}
    </>
  );
}
