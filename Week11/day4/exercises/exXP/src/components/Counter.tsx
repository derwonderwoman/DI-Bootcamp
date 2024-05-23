
interface CountProps {
    count : number;
    setCount: React.Dispatch<React.SetStateAction<number>>; 
}

const Counter = ({count, setCount}: CountProps) => {
    return(
        <>
            <h2>Counter</h2>
            <h2>{count}</h2>
            <button onClick ={() => setCount((count) => count + 1)}> + </button>
            <button onClick ={() => setCount((count) => count - 1)}> - </button>
        </>
    )
}

export default Counter