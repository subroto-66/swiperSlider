import Link from "next/link";

export function generateMetadata({ params }: any) {
  return {
    title: "user metadata",
    description: "user description",
  };
}

export default async function page() {
  const users = await fetch("https://dummyjson.com/users").then((res) =>
    res.json()
  );
  return (
    <div className="text-center">
      <h1>User List</h1>
      <ul>
        {users?.users?.map((user: any, index: number) => (
          <li key={index}>
            <Link href={`/user/${user.id}`}>{user.firstName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
