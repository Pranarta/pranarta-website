import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const LOCALE_PATHS = ['es', 'fr', 'de', 'nl', 'it', 'ru', 'he'] as const

const SEGMENT_TO_LOCALE: Record<(typeof LOCALE_PATHS)[number], string> = {
  es: 'ES',
  fr: 'FR',
  de: 'DE',
  nl: 'NL',
  it: 'IT',
  ru: 'RU',
  he: 'HE',
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const segment = pathname.split('/').filter(Boolean)[0]?.toLowerCase()

  if (segment && LOCALE_PATHS.includes(segment as (typeof LOCALE_PATHS)[number])) {
    const response = NextResponse.next()
    response.cookies.set(
      'pranarta-locale',
      SEGMENT_TO_LOCALE[segment as (typeof LOCALE_PATHS)[number]],
      {
        path: '/',
        maxAge: 60 * 60 * 24 * 365,
      }
    )
    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/es', '/fr', '/de', '/nl', '/it', '/ru', '/he'],
}
