const item = document.getElementById('item')
const itemId = window.location.pathname.split('/')[2]

// fetch item from database by rest api and make a list
fetch('/api/items/'+itemId, {method: 'GET'})
  .then(res => res.json())
  .then((res) => {
    const itemEle = res.map((ele) => (
        `<div key="${ele.id}">
          <img src="${ele.img}" style="width:200px; height:200px; object-fit:contain;" />
        </div>`
          // <a href="/collections/${ele.id}">${ele.id}</a>
      )).join('')
    item.innerHTML = itemEle
  })
