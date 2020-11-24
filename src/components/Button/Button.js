import React from 'react';
import './Button.css'
const button = (props)=>{
    return(
    <span className ="btn-span">
    <button onClick = {props.btnClickHandler}>{props.btnType}</button>
    </span>
    )
}
export default button;