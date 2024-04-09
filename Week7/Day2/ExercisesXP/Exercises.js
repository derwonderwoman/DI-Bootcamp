// #example
// const handleSubmit = (e) => {
//     e.preventDefault();
//     const name = e.target.name.value;
//     const username = e.target.username.value;
//     const email = e.target.email.value;
//     AUser(name, username,email);
// }

// const AUser = async (name,username,email) => {
//     let url = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
//     let options = {
//         method: 'GET',
//         headers: {
//             "Content-Type":"application/json"
//         },
//         body: JSON.stringify({name,username,email})
//     };

//     try {
//         const res = await fetch(url,options);
//         const data = await res.json();
//         let html = data.map((item) => {
//             return `<div>${item.name}</div>`;
//         })
//         document.getElementById("root").innerHTML = html.join("")
//     } catch(error) {
//         console.log(error);
//     }
// }


// #exercise 1
// const apiUrl = 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';

// fetch(apiUrl)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   });

// #exercise 2

// const apiUrl = 'https://api.giphy.com/v1/gifs/search?q=sun&rating=g&limit=10&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';

// fetch(apiUrl)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   });

// #exercise 3

// const User = async() => {
//     let url = "https://www.swapi.tech/api/starships/9/";

//     try {
//         const res = await fetch(url);
//         const data = await res.json();
//         console.log(data.result);
//      }catch(error) {
//             console.log(error);
//         }
// }

// User();

// #exercise 4

// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('resolved');
//         }, 2000);
//     });
// }

// async function asyncCall() {
//     console.log('calling');
//     let result = await resolveAfter2Seconds();
//     console.log(result);
// }

// asyncCall();

// display in console: 
// calling
// resolved



