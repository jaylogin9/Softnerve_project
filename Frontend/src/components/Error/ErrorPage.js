import React from 'react'
import { NavLink } from 'react-router-dom'
import './Error.css';

const ErrorPage = () => {
    return (
        <>
            <div id="notfound">
                <div className='notfound'>
                    <div className='notfound-404'>
                        <h1> 404</h1>
                    </div>
                    <h2> We are sorry, page not found</h2>
                    <NavLink to='/'>Back to HomePage</NavLink>
                </div>
            </div>
        </>
    )
}

export default ErrorPage