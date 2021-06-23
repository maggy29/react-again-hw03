import React from 'react';

export default function Newslist ({articles}) {
    return (
<ul>
    {articles.map(({objectID, url, title})=> (
        <li key={objectID}>
            <a href={url} target="_blank" rel="noopener noreferrer">
                {title}
            </a>
        </li>
    ))}
 </ul>)
} 