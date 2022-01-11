import React from 'react'

const Input = props => {
    return (
        <div className='mb-3 w-100 pr-3 align-left'>
            <label className='text-white sans mb-2 f-13'>{props.label}{props.sup ? <sup style={{ color: "red", fontSize: "15px" }}>*</sup> : <p className='f-5' style={{ display: "inline", color: "grey" }}>(Optional)</p>}</label> <br />
            <input className='input-bg text-white w-100 ' type={props.type} name={props.name} value={props.value} />
            <div>{props.message}</div>
        </div>
    )
}

export default Input
