import { useState } from "react";

function InputComponent(){

    const [changedName, setChangedName] = useState('')
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)

    function ageHandler(){
        setAge(prev => prev + 1)
    }

    function nameHandler(){
        setName(changedName)
    }

    
    return (<div>

        <input 
            type="text" 
            value={changedName}
            onChange={(e) => setChangedName(e.target.value)}
         />
        <button onClick={nameHandler}>Change Name</button>

        <input 
            type="number" 
            value={age}
            onChange={(e) => setAge(Number(e.target.value))} 
         />
        <button onClick={ageHandler}>Increment Age</button>
        

        <h1>Name: {name}</h1>
        <h1>Age: {age}</h1>
    </div>)
}

export default InputComponent;