import { useEffect, useState } from "react";

function CleanUp() {

    const [counter, setCounter] = useState(0)
    const [isOn, setIsOn] = useState(true)

    function counterHandler() {
        setIsOn(prev => !prev)
    }

    useEffect(() => {
        if (!isOn) return

        const increment = setInterval(() => {
            setCounter(prev => prev + 1)
        }, 1000);

        return () => {
            clearInterval(increment)
        }
    }, [isOn])
    return (
        <div>
            <h1>Counter: {counter}</h1>
            <br />
            <button onClick={counterHandler}>Click to stop or Start</button>
        </div>)
}

export default CleanUp;