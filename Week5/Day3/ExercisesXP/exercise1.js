// #exercise 1
let h = document.querySelector("article h1").innerHTML;
console.log(h);

let p = document.querySelector("article").lastElementChild;
p.remove();

let h2 = document.querySelector("article h2")
let h3 = document.querySelector("article h3")
let button = document.createElement("button")
button.textContent = "TurnToBold"
document.body.appendChild(button)
let bodyEl = document.body;

button.addEventListener('click', function(){
    bodyEl.style.fontWeight = "bold";
})

h2.addEventListener('click',function() {
    this.style.background = "red";
})

h3.addEventListener('click',function() {
    this.style.display = "none";
})

let h1 = document.querySelector("article h1")

h1.addEventListener('mouseover', function(){
    this.style.fontSize = Math.floor(Math.random() * 101) + "px"
})
let p2 = document.querySelector("article").childNodes[9]

p2.addEventListener('mouseover',function(){
    p2.style.opacity = "0.5"
})
