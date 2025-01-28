import { IUser } from "../interfaces/IUser";

type TUserInfoProps = {
  user?: IUser;
};

export function UserInfo(props: TUserInfoProps) {
  const { user } = props;

  if (!user) {
    return <p>Loading...</p>;
  }

  const { name, age, country, books } = user;

  return (
    <>
      {user && (
        <div className="border border-gray-300 rounded-md p-4">
          <h1>{name}</h1>
          <p>Age: {age} years</p>
          <p>Country: {country}</p>
          <h2>Books</h2>
          <ul>
            {books.map((book) => (
              <li key={book}>{book}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
