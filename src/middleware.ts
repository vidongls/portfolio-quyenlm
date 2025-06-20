import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  return NextResponse.redirect(
    'https://www.figma.com/proto/cl0etadcFZbn8CLqRhb5ut/Design-system-simple?page-id=2131%3A9594&node-id=2143-1656&viewport=-8480%2C390%2C0.34&t=B85qecSxDiBWUD4P-8&scaling=scale-down&content-scaling=responsive&starting-point-node-id=2143%3A1656&show-proto-sidebar=1&hotspot-hints=0&hide-ui=1'
  )
}

export const config = {
  matcher: '/'
}
