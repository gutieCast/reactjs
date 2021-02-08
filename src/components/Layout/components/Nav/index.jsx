import React from 'react'

export const Nav = () => {
    let url = "";
    return (
        <nav className='ppal-nav'>
            <ul className='nav-list'>
                <li className='option'><a href={url}>Opción 1</a></li>
                <li className='option'><a href={url}>Opción 2</a></li>
                <li className='option'><a href={url}>Opción 3</a></li>
                <li className='option'><a href={url}>Opción 4</a></li>
            </ul>
        </nav>
    )
}
