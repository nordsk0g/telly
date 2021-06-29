import React, { useState, useEffect } from "react";

// Styling
import readMoreStyles from './ReadMore.module.scss';

// TO DO

const ReadMore = ({ content, length }) => {
    const lengthLimit = 100;
    const text = content;
    const shortenedText = content.slice(0, lengthLimit);
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    }
    
    return (
        <>
        {
        content &&
        (<p>
            {length > lengthLimit ? `${shortenedText}...` : text}
            <span onClick={toggleReadMore} className={readMoreStyles.readMore} style={(length > lengthLimit) ? { display: 'visible'} : { display: 'none'}}>
                {isReadMore ? "Read More" : "Show Less"}
            </span>
        </p>)
        }
        </>
    )
}

export default ReadMore;