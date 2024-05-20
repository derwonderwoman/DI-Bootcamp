function delayedAlert() {
    setTimeout(() => {
      alert("Hello World");
    }, 2000); 
  }

function AddParagraph() {
    setTimeout(() => {
        let newElement = document.createElement("p");
        const container = document.getElementById("container");
        newElement.textContent = "Hello World";
        checkParagraphCount(); 
        container.appendChild(newElement);
    }, 2000); 
}

const interval = setInterval(AddParagraph, 2000);

function checkParagraphCount() {
    const container = document.getElementById("container");
    if (container.querySelectorAll("p").length === 5) {
        clearInterval(interval);
        console.log("Interval is cleared");
    }
}

let button = document.getElementById("clear");

button.addEventListener('click', function(){
    clearInterval(interval);
    console.log("Interval is cleared");
});


AddParagraph()
