import { useContext } from "react";
import { AppContext } from "../App";

const ButtonTwo = (props) => {
    const {count, setCount} = useContext(AppContext);
    return (
        <>
            <h2>Button 2</h2>
            <button onClick={() => setCount(count + 1)}> + </button>
        </>
        
    )
}

export default ButtonTwo;