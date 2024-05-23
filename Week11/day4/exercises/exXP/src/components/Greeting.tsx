import { useEffect, useState } from "react";

type GreetingProps = {
    id:number;
}


const Greeting = ({id}: GreetingProps): React.ReactElement => {
    const [userName, setUserName] = useState("user");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                if (Array.isArray(data) && data[id]?.name)
                    setUserName(data[id].name);
            } 
            catch (error) {
                console.error('Error fetching data:', error);
              } 
        }
        fetchData();
    },[])

    return (
        <>
        <h1>Hi, {userName}</h1>;

    </>
    )   
}

export default Greeting;