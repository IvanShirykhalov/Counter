import React from 'react';
import {Inc} from "./Inc";
import {Reset} from "./Reset";
import s from './Counter.module.css'


type CounterPropsType = {
    setValue: (value: number) => void
    value: number
    minValue: number
    maxValue: number
}
export type ButtonPropsType = {
    title: string
    setValue: () => void
    value: number
    maxValue?: number
    minValue?: number
}
export const Counter = ({setValue, value, minValue, maxValue}: CounterPropsType) => {


    return (
        <div className={s.bodyCounter}>
            <div className={s.value}>
                {value === maxValue ? <h1 className={s.max}>{value}</h1> : <h1>{value}</h1>}
            </div>
            <div className={s.button}>
                <Inc value={value} maxValue={maxValue} setValue={() => setValue(value + 1)} title={'Inc'}/>
                <Reset title={'Reset'} setValue={() => setValue(0)} value={value} minValue={minValue}/>
            </div>
        </div>
    );
};








