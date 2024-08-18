import Link from "next/link";

export default function page() {
  return (
    <div>
      <h1 className="text-xl mb-5">Page page</h1>

      <Link href="/about/aboutcollage">Collage</Link>
    </div>
  );
}
