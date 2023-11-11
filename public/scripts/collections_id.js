const items = document.getElementById('items')
const collectionId = window.location.pathname.split('/')[2]

// fetch items belong to a collection from database by rest api and make a list
// TODO localhost 교체
fetch('http://localhost:3000/api/collections/'+collectionId, {method: 'GET'})
  .then(res => res.json())
  .then((res) => {
    const list = res.map((ele) => (
      `<div id="${ele.id}" style="width:300px; height:300px; color: lightgray; border-radius: 0.25rem;" >
        <img src="${ele.img}" style="width:200px; height:200px; border: solid" />
        <a href="/items/${ele.id}" style="color: blue;" className="text-blue-500 hover:text-blue-700">상세 페이지</a>
      </div>`
    )).join('')
    items.innerHTML = list
  })
  .catch(error => console.error(error))