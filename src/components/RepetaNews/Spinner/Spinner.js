import React from 'react';

export default function Spinner ({message, loading}) {
    console.log(loading, 'from spinner')
    return (<p>{message}</p>)
}