import { getProductById } from "../../../../lib/product/product.service";
import { storeNFT } from "../../../../lib/nftStorage";

export async function GET(request, { params }) {
  const items = await getProductById(Number(params.id));
  return new Response(JSON.stringify(items), {
    headers: {
      "content-type": "application/json",
    },
  });
}

export async function POST(request) {
    // const id = formData.get('productId')
    
    const product = await getProductById(1)
    const imageOriginUrl = product[0].img
    console.log(imageOriginUrl)
    const myInit = {
      method: "GET",
      headers: {
        Accept: "image/png",
      },
      mode: "cors",
      cache: "default",
    };
    // const r = await fetch("https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Portrait_of_the_Yongzheng_Emperor_in_Court_Dress.jpg/100px-Portrait_of_the_Yongzheng_Emperor_in_Court_Dress.jpg", myInit).then(res => res.blob())
    const r = await fetch(imageOriginUrl).then(res => res.blob())
    // const r = await fetch(imageOriginUrl)
    console.log(r)
    // if (!r.ok) {
    //     // TODO 에러 핸들링 코드 재작성 필요
    //     throw new Error(`error fetching image: [${r.statusCode}]: ${r.status}`)
    // }
    // console.log(r.blob())
    console.log("***"+r.type)
    // const image = r.blob()
    // console.log(image.type)
    
    // const metadataUrl = await storeNFT(image);
    const metadataUrl = await storeNFT(r);
    // console.log("metadata Url: " + metadataUrl)
    // return metadataUrl.url
    return "hi"
}
