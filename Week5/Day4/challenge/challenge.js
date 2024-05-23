const tasks = []
let form = document.forms[0]
form.addEventListener("submit", handleSubmit);
const image = href="./xmark-solid.svg"

function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const task = formData.get("task");
    if(task !== ''){
        tasks.push(task);
        renderTasks(tasks);
    }
    form.reset();
}
const ul = document.getElementById("listTasks");
 

function renderTasks(tasks){
    console.log("tasks:", tasks);
    const task = tasks[tasks.length - 1];
    const li = generateLi(task);
    ul.append(li);
}

function generateLi(task) {
    const li = document.createElement("li");
    const pic = document.createElement("i");
    pic.classList.add("fa-solid", "fa-xmark")
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    const span = document.createElement("span")
    span.innerText = task;

    li.append(pic, checkbox, span);
    return li;
}