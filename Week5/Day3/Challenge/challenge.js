
function getValue(inputId) {
    const inputElement = document.getElementById(inputId);
    if (inputElement) {
      return inputElement.value.trim();
    } else {
      console.error(`Input field with ID ${inputId} not found`);
      return ''
    }
  }

function getStory(event){
    event.preventDefault();
    const noun = getValue('noun');
    const verb = getValue('verb');
    const adjective = getValue('adjective');
    const name = getValue('person');
    const place = getValue('place');

    const story = `The ${adjective} ${noun} ${verb} with ${name} to ${place}.`;
    console.log(story);

    const storyContainer = document.getElementById('story');
    storyContainer.textContent = story;
}

const libButton = document.getElementById('lib-button');
libButton.addEventListener('click', getStory);
