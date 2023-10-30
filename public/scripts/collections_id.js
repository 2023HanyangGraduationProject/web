const items = document.getElementById('items')
const collectionId = window.location.pathname.split('/')[2]

// fetch items belong to a collection from database by rest api and make a list
// TODO localhost 교체
fetch('http://localhost:3000/api/collections/'+collectionId, {method: 'GET'})
  .then(res => res.json())
  .then((res) => {
    const list = res.map((ele) => (
      `<li key="${ele.id}">
        <img src="${ele.img}" width="200" height="200" />
        <a href="/items/${ele.id}">상세 페이지</a>
      </li>`
    )).join('')
    items.innerHTML = list
  })
  .catch(error => console.error(error))
