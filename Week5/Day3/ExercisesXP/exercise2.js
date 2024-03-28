let form = document.forms[0]
console.log(form)

let input1 = document.getElementById("fname")
console.log(input1)
let input2 = document.getElementById("lname")
console.log(input2)


let input_name1 = document.getElementsByName("firstname")[0]
console.log(input_name1)
let input_name2 = document.getElementsByName("lastname")[0]
console.log(input_name2)
let ul = document.querySelector(".usersAnswer")
console.log(ul)

form.addEventListener('submit', function(e){
    e.preventDefault()
    let input_form1 = form.elements["firstname"].value
    let input_form2 = form.elements["lastname"].value
    let input_form3 = form.elements["submit"].value
    
    if (input_form1 != "none"){
        let li1 = document.createElement(input_form1)
        ul.appendChild(li1)
    }
    if (input_form2 != "none"){
        let li2 = document.createElement(input_form2)
        ul.appendChild(li2)
    }
    if (input_form3 != "none"){
        let li3 = document.createElement(input_form3)
        ul.appendChild(li3)
    }
})
