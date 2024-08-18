"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      We Are Not Found This Type of Page{" "}
      <Link className="border bg-slate-600" href="/">
        Back to Home
      </Link>{" "}
    </div>
  );
}
