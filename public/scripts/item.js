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
  .catch(error => console.error(error))
