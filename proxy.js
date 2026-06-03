import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export default function proxy(req) {
  const token = req.cookies.get("token")?.value;
  const pathname = req.nextUrl.pathname;
  // console.log(token,"token")

  // Login page
  if (pathname === "/admin/login") {

    if (token) {
      try {
        jwt.verify(
          token,
          process.env.JWT_SECRET
        );

        return NextResponse.redirect(
          new URL("/", req.url)
        );

      } catch {}
    }

    return NextResponse.next();
  }

  // Protected admin routes
  if (pathname.startsWith("/admin")) {

    if (!token) {
      return NextResponse.redirect(
        new URL("/admin/login", req.url)
      );
    }
    try {
      jwt.verify(
        token,
        process.env.JWT_SECRET
      );
      
      console.log(token)
      return NextResponse.next();

    } catch {
      return NextResponse.redirect(
        new URL("/admin/login", req.url)
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*",
  ],
};