/*
const item = document.getElementById('item')
const itemId = window.location.pathname.split('/')[2]

// fetch item from database by rest api and make a list
// TODO localhost 교체
fetch('http://localhost:3000/api/items/'+itemId, {method: 'GET'})
  .then(res => res.json())
  .then((res) => {
    const list = res.map((ele) => (
        `<li key="${ele.id}">
          <img src="${ele.img}" width="200" height="200" />
          <button type="submit" class="shadow appearance-none border rounded w-48 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline">구매하기</button>
        </li>`
          // <a href="/collections/${ele.id}">${ele.id}</a>
      )).join('')
    item.innerHTML = list
  })
  .then(async () => {
    await buyItem()
    // const button = document.querySelector('button')
    // button.addEventListener('click', () => {
    //   try {     
    //     const response = await fetch('http://localhost:3000/api/booking'+itemId, {
    //       method: 'post',
    //       body: {
    //         // TODO 변경 필요
    //         address: '0x1234',
    //         productId: itemId,
    //       }
    //     });
    //     console.log('Completed!', response);
    //   } catch(err) {
    //     console.error(`Error: ${err}`);
    //   }
    // })
  })
  .catch(error => console.error(error))
*/

async function buyItem() {
  const button = document.querySelector('button')
  button.addEventListener('click', async () => {
    try {     
      const response = await fetch('http://localhost:3000/api/booking', {
        method: 'post',
        body: {
          // TODO 변경 필요
          address: '0x1234',
          productId: itemId,
        }
      });
      console.log('Completed!', response);
    } catch(err) {
      console.error(`Error: ${err}`);
    }
  })
}

export async function getUri() {
  // const id = formData.get('productId')

  const product = await getProductById(1)
  const imageOriginUrl = product[0].img
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
