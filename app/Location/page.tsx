"use client";

import Script from "next/script";

export default function page() {
  return (
    <div>
      <div>Script Component</div>
      <Script src="/location.js" onLoad={() => console.log("File Loaded")} />
    </div>
  );
}
