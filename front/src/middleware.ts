"use server";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export default async function middleware(
  request: NextRequest,
  res: NextResponse
) {
  const requestWith = request.headers.get("x-requested-with");
  if (requestWith !== "app.nomo") {
    const token = request.cookies.get("access_token")?.value;

    const userAvailable = await fetch(process.env.BACKEND_API + "/user/me", {
      credentials: "include",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (!userAvailable.ok) {
      request.cookies.delete("access_token");
    } else {
    }

    const signInURL = new URL("/", request.url);

    if (!token || !userAvailable.ok) {
      if (request.nextUrl.pathname === "/") return NextResponse.next();

      return NextResponse.redirect(signInURL);
    }
  } 
}

export const config = {
  matcher: ["/",/* "/dashboard/:path*"*/],
};
