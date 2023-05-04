import React from 'react';

const ActiveLink = ({to}) => {
    return (
        <NavLink
        to={to}
        className={({isActive}) => 
        isActive ? 'active' : 'default'}
        >

            
        </NavLink>

    );
};

export default ActiveLink;