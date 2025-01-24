import { IUser } from "../interfaces/IUser";

type TUserInfoProps = {
  user: IUser;
};

export function UserInfo(props: TUserInfoProps) {
  const {
    user,
    user: { name, age, country, books },
  } = props;

  return (
    <>
      {!user && <p>Loading...</p>}
      {user && (
        <div>
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
