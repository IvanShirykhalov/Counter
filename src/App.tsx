import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";

function App() {
    const [value, setValue] = useState<number>(0)
    const minValue = 0
    const maxValue = 5

    return (
        <div className="App">
            <Counter value={value} setValue={setValue} maxValue={maxValue} minValue={minValue}/>
        </div>
    );
}

export default App;
