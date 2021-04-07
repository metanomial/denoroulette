const scripts: string[] = [
  'animalfacts',
  'beemovie',
  'obliviate',
  'poet'
]

function randomScript (): string {
  const index = Math.floor(Math.random() * scripts.length)
  return scripts[index]
}

async function handleRequest (request: Request): Promise<Response> {
  if (request.method != 'GET')
    return new Response(null, { status: 405 })
  const { pathname } = new URL(request.url)
  switch (pathname) {
    case '/':
    case '/index.html': {
      const url = new URL('public/index.html', import.meta.url)
      const response = await fetch(url)
      response.headers.set('Content-Type', 'text/html; charset=utf-8')
      response.headers.set('Content-Security-Policy', `script-src 'self'`)
      return response
    }
    case '/main.css': {
      const url = new URL('public/main.css', import.meta.url)
      const response = await fetch(url)
      response.headers.set('Content-Type', 'text/css; charset=utf-8')
      return response
    }
    case '/wheel.svg': {
      const url = new URL('public/wheel.svg', import.meta.url)
      const response = await fetch(url)
      response.headers.set('Content-Type', 'image/svg+xml; charset=utf-8')
      return response
    }
    case '/random.ts': {
      const script = randomScript()
      const url = new URL(`scripts/${script}.ts`, import.meta.url)
      const response = await fetch(url)
      response.headers.set('Content-Type', 'application/typescript; charset=utf-8')
      return response
    }
    default:
      return new Response(null, { status: 404 })
  }
}

addEventListener('fetch', (event: FetchEvent) => {
  event.respondWith(handleRequest(event.request))
})
