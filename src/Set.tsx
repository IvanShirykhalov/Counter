import React, {ChangeEvent} from 'react';

type SetPropsType = {
    setMaxValue: (e: number) => void
    setMinValue: (e: number) => void
    minValue: number
    maxValue: number
}

export const Set = ({setMaxValue, setMinValue, minValue, maxValue}: SetPropsType) => {

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(Number(e.currentTarget.value))
    }

    const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMinValue(Number(e.currentTarget.value))
    }


    const setLS = () => {
        localStorage.setItem('min', JSON.stringify(minValue))


        localStorage.setItem('max', JSON.stringify(maxValue))


    }

    return (
        <div>
            <input type='number' value={minValue} onChange={onChangeMinValue}/>
            <input type='number' value={maxValue} onChange={onChangeMaxValue}/>
            <button onClick={setLS}>set</button>
        </div>
    );
};
