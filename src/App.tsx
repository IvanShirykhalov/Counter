import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Counter} from "./Counter";

function App() {

    const [minValue, setMinValue] = useState<number>(3)
    const [maxValue, setMaxValue] = useState<number>(6)

    const [value, setValue] = useState<number>(minValue)


    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(Number(e.currentTarget.value))
    }

    const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMinValue(Number(e.currentTarget.value))
    }



    const setLS = () => {
        localStorage.setItem('min', JSON.stringify(minValue))
        localStorage.getItem(JSON.stringify(minValue))

        localStorage.setItem('max', JSON.stringify(maxValue))
        localStorage.getItem(JSON.stringify(maxValue))

    }

    return (
        <div className="App">
            <input type='' value={minValue} onChange={onChangeMinValue}/>
            <input type='' value={maxValue} onChange={onChangeMaxValue}/>

            <Counter value={value} setValue={setValue} maxValue={maxValue} minValue={minValue}/>
            <button onClick={setLS}>set</button>

        </div>
    );
}

export default App;
