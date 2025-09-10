import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware(
  {
    publicRoutes: ["/api/:path*"], // Rutele publice care nu necesită autentificare
  }
);

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)", // toate rutele, dar exclude fișiere statice și _next
    "/", 
    "/(api|trpc)(.*)",        // API și trpc
  ],
};
