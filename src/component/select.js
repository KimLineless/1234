import React from 'react';

const Select = (props)=> {
    return (
        <div>
            <p>{props.name}</p>
            <select>
                <option>{props.op1}</option>
                <option>{props.op2}</option>
            </select>
        </div>
    )
}

export default Select