import React from 'react'
import { Header, Nav, Aside, Footer } from './components';
import { Main } from '../Main';


export const Layout = () => {
    return (
        <div>
            <Header />
            <Nav />
            <Main />
            <Aside />
            <Footer />
        </div>
    )
}
