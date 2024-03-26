export const dynamic = 'force-dynamic'
export async function GET(request) {
  const res = await fetch(request, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await res.json()
 
  return Response.json({ data })
}