export default async function page(props: any) {
  const users = await fetch("https://dummyjson.com/users").then((res) =>
    res.json()
  );
  const currentId = props?.params?.userId;
  const user = users?.users[currentId - 1];
  return (
    <div>
      <div>User Id : {user?.id}</div>
      <div>User First Name : {user?.firstName}</div>
      <div>User Last Name : {user?.lastName}</div>
    </div>
  );
}

export async function generateStaticParams() {
  const users = await fetch("https://dummyjson.com/users").then((res) =>
    res.json()
  );

  return users?.users?.map((user: any) => ({
    userId: user.id.toString(),
  }));
}
