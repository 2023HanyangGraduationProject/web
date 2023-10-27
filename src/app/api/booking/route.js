import { getProductById } from '../../../lib/product/product.service'
import { storeNFT } from '../../../lib/nftStorage';

export async function POST(request) {

    const formData = await request.formData();
    const address = formData.get('address')
    const id = formData.get('productId')
    
    const product = await getProductById(id)
    const imageOriginUrl = product.img
    const r = await fetch(imageOriginUrl)
    if (!r.ok) {
        // TODO 에러 핸들링 코드 재작성 필요
        throw new Error(`error fetching image: [${r.statusCode}]: ${r.status}`)
    }
    const image = r.blob()

    const metadataUrl = await storeNFT(image)
}