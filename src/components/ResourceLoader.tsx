import React, { useEffect, useState } from "react";
import axios from "axios";

type TResourceLoaderProps = {
  children: React.ReactNode;
  resourceUrl: string;
  resourceName: string;
};

export function ResourceLoader<T>(props: TResourceLoaderProps) {
  const { children, resourceUrl, resourceName } = props;

  const [resource, setResource] = useState<T | null>(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(resourceUrl);
      setResource(response.data);
    })();
  }, [resourceUrl]);

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
