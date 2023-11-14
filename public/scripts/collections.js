const collections = document.getElementById('collections')

// fetch collections from database by rest api and make a list
fetch('/api/collections', {method: 'GET'})
  .then(res => res.json())
  .then((res) => {
    const list = res.map((ele) => (
      `<div id="${ele.id}" className="flex-container" style="padding:20px; border-radius: 1rem; justify-content: center; align-items: center; font-size:1rem; font-weight:bold; width:200px; height:60px; background-color:#EEEEEE">
        <div>
          <a href="/collections/${ele.id}">
            ${ele.name}
          </a>
        </div>  
      </div>`
    )).join('')
    collections.innerHTML = list
  })
  .catch(error => console.error(error))
