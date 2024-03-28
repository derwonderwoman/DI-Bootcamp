const tasks = []
let form = document.forms[0]
let title = document.createElement('div')
title.textContent = "TO-DO-LIST"
title.style.color = 'white'
title.style.fontWeight = 'strong'
title.style.fontSize = '60px'
title.style.textAlign = 'center'

form.append(title)

function addTask(){
    let input = document.querySelector('#name').textContent
    let list = document.querySelector('.listTasks')
    if(input != 'none'){
        tasks.push(input)
        let taskElement = document.createElement('li')
        taskElement.textContent = input
        list.appendChild(input)
    }
}


// then add it to the DOM, below the form (in the <div class="listTasks"></div>) .
// Each new task added should have (starting from left to right - check out the image at the top of the page)
// a “X” button. Use font awesome for the “X” button.
// an input type="checkbox". The label of the input is the task added by the user.

// BONUS I (not mandatory):
// Change the variable tasks to an array of task objects.
// Each new task added to the array should have the properties : task_id, text and done (a boolean - false by default).
// Every new task object should have a task_id, starting from 0, and a data-task-id attribute, which value is the same as the task_id. Check out data-* attributes here.
// Create a function named doneTask(), that as soon as the user clicks on the “checkbox” input, the done property should change from false to true in the object, and from black to crossed out red in the DOM.

// BONUS II (not mandatory):
// Create a function named deleteTask(), that as soon as the user clicks on the “X” button, delete that specific task from the array listTasks.