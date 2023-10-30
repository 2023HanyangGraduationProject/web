import { getProductById } from "../../../../lib/product/product.service";

export async function GET(request, { params }) {
  const items = await getProductById(Number(params.id));
  return new Response(JSON.stringify(items), {
    headers: {
      "content-type": "application/json",
    },
  });
}
