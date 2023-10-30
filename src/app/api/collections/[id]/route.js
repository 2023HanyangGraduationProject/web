import { getProductsByCollectionId } from "../../../../lib/product/product.service";

export async function GET(request, { params }) {
  const items = await getProductsByCollectionId(Number(params.id));
  return new Response(JSON.stringify(items), {
    headers: {
      "content-type": "application/json",
    },
  });
}
