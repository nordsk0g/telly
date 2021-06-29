import React from 'react';
import { Link } from 'react-router-dom';

const Menu = (props) => {
    console.log(props)
    return (
        <ul>
            {props && Object.values(props).map(item => <li><Link>{item}</Link></li>)}
        </ul>
    )
}

export default Menu;