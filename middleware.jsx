import { NextResponse } from 'next/server';
import { getToken } from "next-auth/jwt";

// Re-export the default middleware from next-auth
export { default } from 'next-auth/middleware';

export async function middleware(request) {
    const token = await getToken({ req: request });
    const { pathname } = request.nextUrl;

    // If user is signed in and trying to access the sign-in page, redirect to home
    if (token && pathname === '/signin') {
        return NextResponse.redirect(new URL('/', request.url));
    }

    // If user is not signed in and trying to access protected routes, redirect to sign-in
    const isProtectedRoute = ['/saunas/add', '/products/edit', '/profile', '/messages', '/orders', '/products/saved'].some(route => pathname.startsWith(route));
    if (!token && isProtectedRoute) {
        const signInUrl = new URL('/signin', request.url);
        signInUrl.searchParams.set('callbackUrl', request.url);
        return NextResponse.redirect(signInUrl);
    }

    // Allow the request to proceed
    return NextResponse.next();
}

export const config = {
    matcher: [
        '/saunas/add',
        '/products/edit',
        '/profile',
        '/messages',
        '/orders',
        '/products/saved',
        '/signin'
    ],
};
