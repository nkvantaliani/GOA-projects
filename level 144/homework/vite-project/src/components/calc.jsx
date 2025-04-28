import { useState } from "react"

function Calc() {
    const [num1, setNum1] = useState("")
    const [num2, setNum2] = useState("")
    const [res, setRes] = useState(0)

const Butt = (op) => {
        const numA = parseFloat(num1)
        const numB = parseFloat(num2)
    
        if (op === "+") {
            setRes(numA + numB)
        } else if (op === "-") {
            setRes(numA - numB)
        } else if (op === "*") {
            setRes(numA * numB)
        } else if (op === "/") {
            if (numB !== 0) {
                setRes(numA / numB)
            } else {
                setRes("can't divide by 0")
            }
        }
}

    return (
        <div>
            <div>
                <h1>result: {res}</h1>
                <input className="w-full p-2 mb-4 border rounded" type="text" value={num1} onChange={(e) => setNum1(e.target.value)}/>
                <input className="w-full p-2 mb-4 border rounded" type="text" value={num2} onChange={(e) => setNum2(e.target.value)}/>
            </div>
            <div>
                <button className="bg-pink-500 text-white p-2 rounded" onClick={() => Butt("+")}>+</button>
                <button className="bg-pink-500 text-white p-2 rounded" onClick={() => Butt("-")}>-</button>
                <button className="bg-pink-500 text-white p-2 rounded" onClick={() => Butt("*")}>*</button>
                <button className="bg-pink-500 text-white p-2 rounded" onClick={() => Butt("/")}>/</button>
            </div>
        </div>
    )
}

export default Calc
