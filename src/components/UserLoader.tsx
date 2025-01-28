import React, { useEffect, useState } from "react";
import axios from "axios";
import { IUser } from "../interfaces/IUser";

type TUserLoaderProps = {
  children: React.ReactNode;
  id: string;
};

export function UserLoader(props: TUserLoaderProps) {
  const { children, id } = props;
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`http://localhost:9090/users/${id}`);
      setUser(response.data);
    })();
  }, []);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user } as Partial<
            typeof child.props
          >);
        }
      })}
    </>
  );
}
