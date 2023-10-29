const collections = document.getElementById('collections')

// fetch collections from database by rest api and make a list
fetch('http://localhost:3000/api/collections', {method: 'GET'})
  .then(res => res.json())
  .then((res) => {
    const list = res.map((ele) => (
      `<li key="${ele.id}">
        <a href="/collections/${ele.id}">${ele.name}</a>
      </li>`
    )).join('')
    collections.innerHTML = list
  })
  .catch(error => console.error(error))
