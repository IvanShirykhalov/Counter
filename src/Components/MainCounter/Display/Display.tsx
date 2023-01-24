import React from "react";
import s from './Display.module.css'


type DisplayPropsType = {
    numberDisplay: number
    maxValue:number
}


export const Display = ({numberDisplay, maxValue} : DisplayPropsType) => {

    return (
        <div className={s.Display}>
            <div className={ numberDisplay === maxValue ? s.numStyleStop : s.numStyle}>
                {numberDisplay}
            </div>
        </div>
    )
}
