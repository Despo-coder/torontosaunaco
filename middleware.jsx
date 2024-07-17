import { NextResponse } from 'next/server';
import { getToken } from "next-auth/jwt";


export async function middleware(request) {
    const token = await getToken({ req: request });
    
    // console.log('Current User:', token ? 'Authenticated' : 'Not Authenticated');
    // console.log('Requested URL:', request.nextUrl.pathname);
  
    if (token && request.nextUrl.pathname === '/signin') {
      return NextResponse.redirect(new URL('/', request.url));
    }
  
    if (!token && !request.nextUrl.pathname.startsWith('/signin') && request.nextUrl.pathname !== '/') {
      const signInUrl = new URL('/signin', request.url);
      signInUrl.searchParams.set('callbackUrl', request.url);
      return NextResponse.redirect(signInUrl);
    }
  
    return NextResponse.next();
  }
  

export const config = {
  matcher: [
    '/saunas/add', 
    '/products/edit', 
    '/profile', 
    '/orders',
    '/messages', 
    '/products/saved',
    '/signin' // Include the sign-in page to handle redirection to home if already logged in
  ],
};
