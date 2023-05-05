import React from 'react';
import err from '../../assets/404.avif'

const Error = () => {
    // const error = useRouteError();
    // console.log(error)

    console.log('page not found')
    return (
        <div className='text-center py-5'>
            <h2 className='text-dark py-4'>Page Not Found</h2>
            <img className='img-fluid' src={err} alt="" />
        </div>
    );
};

export default Error;