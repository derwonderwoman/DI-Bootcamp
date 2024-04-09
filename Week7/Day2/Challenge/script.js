
const handleSubmit = (e) => {
    e.preventDefault()
    const giphName = e.target.form.elements.category.value
    user(giphName)
  }
  
  const user = async (giphName) => {
      url = `https://api.giphy.com/v1/gifs/search?q=${giphName}&limit=1&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
      try {
          let res = await fetch(url);
          if (!res.ok) {
              throw new Error('This request has not been successful')
          } 
          let data = await res.json()
          
          if(data.data.length === 0) {
              throw new Error('error')
          } else {
              appendToDom(data)
          }
      } catch (err) {
          console.log(err)
      }
  }
  
  const deleteGiph = (div) => {
      div.remove()
  }
  
  const appendToDom = (data) => {
      let giph = data.data[0].images.fixed_height.url
      let div = document.getElementById('gifForm')
  
      if (!div) {
          div = document.createElement('div');
          div.id = 'giph';
          document.body.appendChild(div);
      }
  
      div.innerHTML += `<div>
                          <img src=${giph}></img>
                          <button onclick=deleteGiph(this.parentNode)>Delete</button>
                          <button onclick=deleteGiph(this.parentNode.parentNode)>Delete all Giphs</button>
                        <div>
                        `
  }
