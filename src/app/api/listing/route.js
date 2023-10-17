import { put } from '@vercel/blob';
import { createProduct } from '../../../lib/product/product.service'

// export function GET(request) {
//     const searchParams = request.nextUrl.searchParams
//     const query = searchParams.get('query')
//     // query is "hello" for /api/search?query=hello
//   }

export async function POST(request) {
  
  const formData = await request.formData();
  // console.log(formData)
  const address = formData.get('address')
  const files = formData.getAll('images')
  const blobs = []
  for(let i = 0; i < files.length; i++) {
    const blob = await put(new Date().toString().substring(10, 33)+i+"."+(files[i].name.split('.').at(-1)),  files[i],{
      access: 'public',
    })
    blobs.push(blob)
  }
  // console.log(blobs)
  const row = formData.get('row')
  const column = formData.get('column')
  const price1 = formData.get('price1')
  const currency1 = formData.get('currency1')
  const price2 = formData.get('price2')
  const currency2 = formData.get('currency2')
  const price3 = formData.get('price3')
  const currency3 = formData.get('currency3')
  
  try {
    await createProduct({ seller: address, row: row, col: column, price1: price1, currency1: currency1, price2: price2, currency2: currency2, price3: price3, currency3: currency3 })
  } catch (e) {
    console.error(e.message);
  }

  return new Response("success", {
    status: 200,
    // body: JSON.stringify({ file: blobs, price1: price1, price2: price2, price3: price3, row: row, column: column }),
  })
}
