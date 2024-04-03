document.getElementsByTagName("form")[0].addEventListener("submit", function(e){
    e.preventDefault();

    const data = {
        name: e.target.first_name.value,
        last_name: e.target.last_name.value
    };
    console.log(data);
    let arr = JSON.stringify(data);
    console.log(arr);
    const jsonDataElement = document.getElementById("jsonData");
    jsonDataElement.textContent = arr;
})