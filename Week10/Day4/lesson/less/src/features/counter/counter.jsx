import{useSelector, useDispatch} from "react-redux";
import {increment, decrement, reset, incrementByNumber, incrementWithPrepare, delayIncrementThunk} from "./counterSlice";
import { useRef } from "react";


const Counter = (props) => {
    const incrementAmountRef = useRef("");
    const count = useSelector((state) => state.counterSlice.count);
    const dispatch = useDispatch();

    return (
        <>
            <div>
                <h2>Count: {count}</h2>
                <button onClick={() => dispatch(increment())}> + </button>
                <button onClick={() => dispatch(decrement())}> - </button>
                <button onClick={() => dispatch(reset())}>Reset</button>
                <button onClick={() => dispatch(incrementWithPrepare(5,6))}>Increment</button>
            </div>
                <input type="number" ref={incrementAmountRef}/><button onClick={() => dispatch(incrementByNumber(incrementAmountRef.current.value))}>Increment By Number...</button>
            <div>
            <div>
                <h2>Delay</h2>
                <button onClick={() => dispatch(delayIncrementThunk())}> + </button>
            </div>

            </div>
        </>
    )
}

export default Counter