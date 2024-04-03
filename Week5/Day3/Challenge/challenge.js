let libform = document.querySelector('#libform')

libform.addEventListener('submit',getValue)

function getValue(e){
    e.preventDefault();
    libform.forEach(element => {
        if (element !== null){
        return element.nodeValue()
        }
        getStory()
    });
}

function getStory(){

}
// Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()
// Make sure the values are not empty
// Write a story that uses each of the values.
// Make sure you check the console for errors when playing the game.
// Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user). The user could click the button at least three times and get a new story. Display the stories randomly.