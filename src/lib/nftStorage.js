import { get } from 'http'
import { NFTStorage } from 'nft.storage'
import { getProductById } from './product/product.service'

// read the API key from an environment variable. You'll need to set this before running the example!
const API_KEY = process.env.NFT_STORAGE_API_KEY
const client = new NFTStorage({ token: API_KEY })

// For example's sake, we'll fetch an image from an HTTP URL.
// In most cases, you'll want to use files provided by a user instead.
// export async function getExampleImage() {
//   const imageOriginUrl = "https://user-images.githubusercontent.com/87873179/144324736-3f09a98e-f5aa-4199-a874-13583bf31951.jpg"
//   const r = await fetch(imageOriginUrl)
//   if (!r.ok) {
//     throw new Error(`error fetching image: [${r.statusCode}]: ${r.status}`)
//   }
//   return r.blob()
// }

export async function getUri() {
  // const id = formData.get('productId')
  
  const product = await getProductById(1)
  const imageOriginUrl = product.img
  const r = await fetch(imageOriginUrl)
  if (!r.ok) {
      // TODO 에러 핸들링 코드 재작성 필요
      throw new Error(`error fetching image: [${r.statusCode}]: ${r.status}`)
  }
  const image = r.blob()
  
  const metadataUrl = await storeNFT(image)
  console.log("metadata Url: " + metadataUrl)
  return metadataUrl.url
}

export async function storeNFT(img) {
  // const image = await getExampleImage()
  const image = img
  console.log("*****"+image.type)
  // console.log(image)
  const nft = {
    image: image, // use image Blob as `image` field
    name: "ticket series",
    description: "These are the Soulbound Token based Tickets.",
    properties: {
      type: "image",
      origins: {
        http: "https://2023-hanyang-graduation-project.vercel.app/",
        ipfs: "ipfs://bafybeieh4gpvatp32iqaacs6xqxqitla4drrkyyzq6dshqqsilkk3fqmti/blog/post/2021-11-30-hello-world-nft-storage/"
      },
      authors: [{ name: "soul ticket" }],
      content: {
        "text/markdown": "The last year has witnessed the explosion of NFTs onto the world’s mainstage. From fine art to collectibles to music and media, NFTs are quickly demonstrating just how quickly grassroots Web3 communities can grow, and perhaps how much closer we are to mass adoption than we may have previously thought. <... remaining content omitted ...>"
      }
    }
  }

  // const client = new NFTStorage({ token: API_KEY })
  const metadata = await client.store(nft)

  console.log('NFT data stored!')
  console.log('Metadata URI: ', metadata.url)

  return metadata.url
}

// storeExampleNFT()
