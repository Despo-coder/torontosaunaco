import { NextResponse } from 'next/server';
import { getToken } from "next-auth/jwt";

export { default } from 'next-auth/middleware';

// export async function middleware(request) {
//     const token = await getToken({ req: request });
//     const { pathname } = request.nextUrl;

//     if (token && pathname === '/signin') {
//         return NextResponse.redirect(new URL('/', request.url));
//     }

//     if (!token && pathname !== '/' && !pathname.startsWith('/signin')) {
//         const signInUrl = new URL('/signin', request.url);
//         signInUrl.searchParams.set('callbackUrl', request.url);
//         return NextResponse.redirect(signInUrl);
//     }

//     return NextResponse.next();
// }

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