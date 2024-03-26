let div = document.getElementById("navBar");
div.setAttribute('id', "socialNetworkNavigation")
let new_li = document.createElement("li");
let text_Node = document.createTextNode("Logout");
new_li.append(text_Node);
let ul = document.querySelector("ul");
ul.appendChild(new_li);
console.log(ul.firstElementChild.textContent)
console.log(ul.lastElementChild.textContent)
