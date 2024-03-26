let div = document.getElementById('container');
document.getElementsByTagName('li')[1].innerHTML = 'Richard'
let parElem = document.getElementsByTagName("ul")[1];
chilElem = parElem.children[1];
parElem.removeChild(chilElem);
parUl = document.getElementsByClassName("list");
for (ul of parUl){
    ul.children[0].innerHTML = "Kseniia"
}
for(Ul of parUl){
    Ul.classList.add("student_list")
}
parUl1 = document.getElementsByClassName("list")[0];
parUl1.classList.add("university", "attendance");

div.style.background = 'lightblue';
div.style.padding = '20px';

for (UL of parUl){
        if(UL.children[parUl.length - 1].innerHTML === "Dan"){
            UL.style.display = "none";
    }
}

for (UL of parUl){
    if(UL.children[parUl.length - 1].innerHTML === "Richard"){
        UL.children[1].style.border = "1px solid black"
}
}

document.body.style.fontSize = "20px";

let div2 = document.querySelector("div");
if (div2.style.background === "lightblue") {
    let users = div.textContent.trim().split(" and ");
    alert("Hello " + users[0] + " and " + users[1]);
}
