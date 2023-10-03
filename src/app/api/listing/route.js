// export function GET(request) {
//     const searchParams = request.nextUrl.searchParams
//     const query = searchParams.get('query')
//     // query is "hello" for /api/search?query=hello
//   }

export function POST(request) {
  const formData = new FormData(request.body.FormData)
  console.log(formData);
  const price1 = formData.get('price1')
  const price2 = formData.get('price2')
  const price3 = formData.get('price3')
  const row = formData.get('row')
  const column = formData.get('column')
  // ...
  return new Response('Hello, Next.js!', {
    status: 200,
    body: JSON.stringify({ price1: price1, price2: price2, price3: price3, row: row, column: column }),
  })
}
