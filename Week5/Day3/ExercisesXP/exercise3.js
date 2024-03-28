const allBoldItems = []
function getBoldItems(){
    let paragraph = document.querySelector("p")
    let b = paragraph.querySelectorAll("strong")
    return b 
}

for(elem of getBoldItems()){
    allBoldItems.push(elem.textContent)
}
console.log(allBoldItems)

function highlight(){
    for (elem of document.getElementsByTagName('strong')){
        elem.addEventListener('mouseover',function(){
            this.style.color = 'blue'
        })
    }
}

function returnItemsToDefault(){
    for (elem of document.getElementsByTagName('strong')){
        elem.addEventListener('mouseout',function(){
            this.style.color = 'black'
        })
    }
}
highlight()
returnItemsToDefault()
