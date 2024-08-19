"use client";

import { NextResponse } from "next/server";

export function middleware(request: any) {
  // redirect("/about");
  // if (request.nextUrl.pathname != "/about") {
  return NextResponse.redirect(new URL("/about", request.url));
  // }
}

export const config = {
  matcher: ["/user"],
};
