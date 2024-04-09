
const base = 'https://www.swapi.tech/api/people/';

let button = document.querySelector('#button');
let names = document.querySelector('#name');
let height = document.querySelector('#height');
let gender = document.querySelector('#gender');
let birthYear = document.querySelector('#birth-year');
let homeWorld = document.querySelector('#home-world');

const handle = async() => {
    updateWithLoading();
    const url = `${base}${Math.floor((Math.random() * 83) + 1)}/`;
    try {
        let res = await fetch(url);
        if (!res.ok) {
            updateInfoWithError();
            throw new Error('This request has not been successful')
        } 
        let data = await res.json();
        appendToDom(data);
    } catch (err) {
        console.log(err)
    }
}

const appendToDom = (resp) => {
    names.innerText = resp.result.properties.name;
    height.innerText = `Height: ${resp.result.properties.height}`;
    gender.innerText = `Gender: ${resp.result.properties.gender}`;
    birthYear.innerText = `Birth Year: ${resp.result.properties.birth_year}`;
    // Home world requires an additional API call
    fetch(resp.result.properties.homeworld)
        .then(response => response.json())
        .then(data => {
            homeWorld.innerText = `Home World: ${data.result.properties.name}`;
        })
        .catch(error => {
            console.error('Error fetching home world:', error);
        });
};


function updateInfoWithError(){
    names.innerText = 'Oh No! That person isnt available.';
    height.innerText = ''
    gender.innerText = ''
    birthYear.innerText = ''
    homeWorld.innerText = ''
  }

function updateWithLoading(){
    names.innerHTML = '<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i> <p>Loading...</p>';
    height.innerText = ''
    gender.innerText = ''
    birthYear.innerText = ''
    homeWorld.innerText = ''
  }

  button.addEventListener('click', handle);