import{useSelector, useDispatch} from "react-redux";
import {delayIncrementThunk, delayDecrementThunk} from "../app/slice";
import viteLogo from "../assets/react.svg"
import '../App.css'

const AgeCounter = (props) => {
    const dispatch = useDispatch();
    const age = useSelector((state) => state.Slice.age);
    const loading = useSelector((state) => state.Slice.loading)

    return (
        <>
            <h1>Age Counter : {age}</h1>
            <button onClick={() => dispatch(delayIncrementThunk())}> + </button>
            <button onClick={() => dispatch(delayDecrementThunk())}> - </button>
            {loading && (
                <div className="loading-container">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                    <p>Loading...</p>
                </div>
            )}
        </>
    )
}

export default AgeCounter