let planets = [
    {
    name : "Mercury",
    moon : 0
    }, 
    {
    name : "Venus",
    moon : 0
    }, 
    {
    name : "Earth",
    moon : 1
    },
    {
    name : "Mars",
    moon : 2
    }, 
    {
    name : "Jupiter",
    moon : 95
    },
    {
    name : "Saturn",
    moon : 146
    }, 
    {
    name : "Uranus",
    moon : 28
    },
    {
    name : "Neptune",
    moon : 16
    }
]
let colors = ["grey", "brown", "blue", "red", "yellow", "grey","cyan", "blue"];

let list = document.querySelector(".listPlanets")

planets.forEach(function(planet,index) {
    let planetDiv = document.createElement("div");
    planetDiv.textContent = planet.name;
    planetDiv.style.background = colors[index];
    planetDiv.classList.add("planet", colors[index])
    list.appendChild(planetDiv);

    for(let i = 0; i < planet.moon; i++){
        let moonDiv = document.createElement("div");
        moonDiv.classList.add("moon");
        planetDiv.appendChild(moonDiv);
        moonDiv.style.left = i * 8 + "px" 
    }
});

