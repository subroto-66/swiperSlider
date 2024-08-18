"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      About Page NotFound{" "}
      <Link className="border bg-slate-600" href="/">
        Back to Home
      </Link>{" "}
    </div>
  );
}
