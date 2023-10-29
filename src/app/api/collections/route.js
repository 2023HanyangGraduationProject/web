import { getCollectionsAll } from "../../../lib/collection/collection.service";

export async function GET(request) {
  const collections = await getCollectionsAll();
  return new Response(JSON.stringify(collections), {
    headers: {
      "content-type": "application/json",
    },
  });
}
