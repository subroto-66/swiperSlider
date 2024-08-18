const Com = () => {
  return <h1>Hello Subrto Mollik</h1>;
};
export default function Home() {
  console.log(process.env.DB_PASS);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"></div>
    </main>
  );
}
