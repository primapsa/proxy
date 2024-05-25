
import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const url = request.nextUrl.clone();
    if (url.pathname.startsWith('/prx')) {
        const response = NextResponse.next();
        response.headers.set('Authorization', `Bearer ${process.env.NEXT_API_KEY}`);
        return response;
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/prx/:path*'],
};
