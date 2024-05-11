import { useState } from "react";

const Calculator = () => {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [result, setResult] = useState(0);
    const [action, setAction] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        switch (action) {
            case "add":
                setResult(Number(number1) + Number(number2));
                break;
            case "substract":
                setResult(Number(number1) - Number(number2));
                break;
            case "multiplicate":
                setResult(Number(number1) * Number(number2));
                break;
            case "divide":
                setResult(Number(number1) / Number(number2));
                break;
            default:
                setResult(0);
        }
    }

    return (
        <>
            <h1>Calculator</h1>
            <form onSubmit={handleSubmit}>
                <input style={{ margin: '10px' }} type="number" value={number1} onChange={(e) => setNumber1(e.target.value)} />
                <input style={{ margin: '10px' }} type="number" value={number2} onChange={(e) => setNumber2(e.target.value)} />
                <br />
                <select
                    id="action"
                    value={action}
                    onChange={(e) => setAction(e.target.value)}
                    required
                >
                    <option value="">--Please Choose an action--</option>
                    <option value="add">Add</option>
                    <option value="substract">Substract</option>
                    <option value="multiplicate">Multiplicate</option>
                    <option value="divide">Divide</option>
                </select>
                <button type="submit">Calculate</button>
            </form>
            <p>Result: {result}</p>
        </>
    );
}

export default Calculator;