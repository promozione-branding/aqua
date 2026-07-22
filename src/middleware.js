import { NextResponse } from "next/server";

export function middleware(req) {
  const { pathname } = req.nextUrl;

  // Allow the login page to load without being redirected
  if (pathname.startsWith("/admin/login")) {
    return NextResponse.next();
  }

  // Protect all /admin routes
  if (pathname.startsWith("/admin")) {
    const token = req.cookies.get("admin-token")?.value;

    // Check if the admin-token exists and is valid
    if (!token || token !== "secret123") {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
