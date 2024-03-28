let button = document.createElement('button')
button.textContent = "Clear All"
let all = document.getElementById('sidebar')
all.appendChild(button)

button.addEventListener('click',function erase(){
    let container = document.querySelectorAll('#grid div')
    container.forEach(function(cell){
        cell.style.backgroundColor = ''
    })

})

function createGrid(){
    let container = document.getElementById('grid')

    for(let i = 0; i < 1250; i++){
        let cell = document.createElement('div')
        cell.style.height = '4%'
        cell.style.width = '2%'
        cell.style.border = '1px solid black'
        cell.addEventListener('mousedown',toStart)
        cell.addEventListener('mouseup', toStop)
        cell.addEventListener('click', toDrawWithoutCheck)
        cell.addEventListener('mouseover',toDraw)
        container.appendChild(cell)
    }
}

function randomColor(){
    let red = Math.floor(Math.random()*256)
    let green = Math.floor(Math.random()*256)
    let blue = Math.floor(Math.random()*256)

    let color = 'rgb(' + red + ', ' + green + ', ' + blue + ')'
    return color
}

function createColors(){
    let container = document.getElementById('sidebar')
    let white_cell = document.createElement('div')
    white_cell.style.height = '13%'
    white_cell.style.width = '33.3%'
    white_cell.style.border = '1px solid black'
    white_cell.style.backgroundColor = 'white'
    white_cell.addEventListener('click',toColor)
    for(let i = 0; i < 20; i++){
        let cell = document.createElement('div')
        cell.style.height = '13%'
        cell.style.width = '33%'
        cell.style.border = '3px solid black'
        cell.addEventListener('click',toColor)
        container.appendChild(cell)
        cell.style.backgroundColor = randomColor()
    }
    container.appendChild(white_cell)
}
let color
function toColor(event) {
    color =  event.target.style.backgroundColor
    console.log(color)
    return color
}
let flag = false
function toStart(){
    flag = true
    return flag
}

function toStop(){
    flag = false
    return flag
}

function toDraw(event){
    if(flag){
        event.target.style.backgroundColor = color
    }
}

function toDrawWithoutCheck(event){
    event.target.style.backgroundColor = color
}
createGrid()
createColors()