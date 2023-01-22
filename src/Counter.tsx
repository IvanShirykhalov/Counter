import React from 'react';
import {Inc} from "./Inc";
import {Reset} from "./Reset";
import s from './Counter.module.css'
import {Set} from "./Set";


type CounterPropsType = {
    setValue: (value: number) => void
    value: number
    minValue: number
    maxValue: number
    setMaxValue: (e: number) => void
    setMinValue: (e: number) => void
}
export type ButtonPropsType = {
    title: string
    setValue: () => void
    value: number
    maxValue: number
    minValue: number

}
export const Counter = ({setValue, value, minValue, maxValue, setMinValue, setMaxValue}: CounterPropsType) => {


    return (
        <div className={s.bodyCounter}>
            <div className={s.value}>
                {value === maxValue ? <h1 className={s.max}>{value}</h1> : <h1>{value}</h1>}
            </div>
            <div className={s.button}>
                <Inc value={value} maxValue={maxValue} setValue={() => setValue(value + 1)} title={'Inc'}
                     minValue={minValue}/>
                <Reset title={'Reset'} setValue={() => setValue(minValue)} value={value} minValue={minValue}
                       maxValue={maxValue}/>
                <Set minValue={minValue} maxValue={maxValue} setMaxValue={setMaxValue} setMinValue={setMinValue}/>
            </div>
        </div>
    );
};








