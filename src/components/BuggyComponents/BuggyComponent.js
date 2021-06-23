import React, {useState} from 'react';

export default function BuggyComponent () {
    const [value, setValue] = useState(0);

    if (value>3) {throw new Error("My Error!!!")} 

    return (
        <>
        <p>{value}</p>
        <button onClick={()=>{setValue(value+1)}}>+</button>
        </>
    )
}