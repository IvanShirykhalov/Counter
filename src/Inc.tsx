import React from "react";
import {ButtonPropsType} from "./Counter";

export const Inc = ({title, setValue, value, ...props}: ButtonPropsType) => {
    return (
        <button onClick={setValue} disabled={value === props.maxValue}>{title}</button>
    )
}