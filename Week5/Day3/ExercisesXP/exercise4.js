let form = document.forms[0]
console.log(form)

let radius = form.elements.radius.value

form.addEventListener('submit',calculateAndOutput)

function getRadius(e){
    e.preventDefault()
    console.log(form.elements.radius.value)
    return form.elements.radius.value
}

function calculateVolume(radius){
    return 4/3 * 3.14 * (radius**3)
}
function displayVolume(volume){
    form.elements.volume.value = volume
}
function calculateAndOutput(e){
    let radius = getRadius(e)
    let volume = calculateVolume(radius)
    displayVolume(volume)
}