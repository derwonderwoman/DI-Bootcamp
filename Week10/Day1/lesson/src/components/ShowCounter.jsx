import {useContext} from "react";
import { AppContext } from "../App";
import Display, { DisplayContext } from "./Display";

const ShowCounter = (props) => {
    const {count, name} = useContext(AppContext);
    const {title} = useContext(DisplayContext)
    return (
        <>
        <h1>{title}</h1>
        <h3>ShowCounter</h3>
        {count}
        </>
    )
}

export default ShowCounter;