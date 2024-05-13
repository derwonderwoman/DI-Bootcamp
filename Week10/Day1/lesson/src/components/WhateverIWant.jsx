import { useContext } from "react";
import { DisplayContext } from "./Display";

const Whatever = (props) => {
const{setTitle} = useContext(DisplayContext) 

return (
    <>
    <input onChange={(e) => setTitle(e.target.value)} type="text" />
    </>
)
}

export default Whatever;