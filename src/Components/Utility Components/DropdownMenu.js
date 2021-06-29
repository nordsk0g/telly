import React, { useRef, useState } from 'react';

export default function DropdownMenu () {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false) 

    return (
        <div className={dropdownStyle["menu-container"]}>
            <button onClick={onClick} className={dropdownStyle["menu-trigger"]}>
                <span>Popularity</span>
            </button>
            <nav ref={dropdownRef} className={dropdownStyle[`menu ${ isActive ? 'active': 'inactive'}`]}>
                <ul>
                    <li>Series Name</li>
                    <li>Release Date</li>
                    <li>Average Rating</li>
                </ul>
            </nav>
        </div>
    )
}