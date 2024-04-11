const handle = async () =>{
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) {
            throw new Error('This request has not been successful')
        } 
        let data = await res.json();
        return data;
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    handle
}
