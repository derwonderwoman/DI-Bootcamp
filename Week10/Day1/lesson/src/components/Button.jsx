import { useContext } from "react";
import { AppContext } from "../App";
import ButtonTwo from "./ButtonTwo";

const Button = (props) => {
    const{count,setCount} = useContext(AppContext)
    return (
        <>
             <h3>Button</h3>
             <button onClick={() => setCount(count + 1)}> + </button>
             <ButtonTwo/>
        </>
    )
}

export default Button;