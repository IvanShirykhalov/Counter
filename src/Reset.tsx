import React from "react";
import {ButtonPropsType} from "./Counter";

export const Reset = ({title, setValue, value, ...props}: ButtonPropsType) => {
    return (
        <button onClick={setValue} disabled={value === props.minValue}>{title}</button>
    )
}