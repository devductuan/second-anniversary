import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { SIGNATURE } from './constants/general';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const signature = request.cookies.get("signature");
    if (signature?.value === SIGNATURE) {
        return
    }
    return NextResponse.redirect(new URL('/login', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/my-love', '/my-love/music', '/'],
}