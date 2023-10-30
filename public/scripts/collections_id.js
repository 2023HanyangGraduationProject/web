const items = document.getElementById('items')
const collectionId = window.location.pathname.split('/')[2]

// fetch collections from database by rest api and make a list
// TODO localhost 교체
fetch('http://localhost:3000/api/collections/'+collectionId, {method: 'GET'})
  .then(res => res.json())
  .then((res) => {
    const list = res.map((ele) => (
      `<li key="${ele.id}">
        <img src="${ele.img}" width="200" height="200" />
      </li>`
        // <a href="/collections/${ele.id}">${ele.id}</a>
    )).join('')
    items.innerHTML = list
  })
  .catch(error => console.error(error))
