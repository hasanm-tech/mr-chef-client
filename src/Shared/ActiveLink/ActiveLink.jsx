import React from 'react';
import './Active.css'
import { NavLink } from 'react-bootstrap';

const ActiveLink = ({to,children}) => {
    return (
        <NavLink
        to={to}
        className={({isActive}) => 
        isActive ? 'active' : ''}
        >
            {children}
            
        </NavLink>

    );
};

export default ActiveLink;