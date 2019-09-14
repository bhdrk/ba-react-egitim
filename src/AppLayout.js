import React from 'react'
import {Header, Footer} from "./components";

function AppLayout({children}) {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}

export default AppLayout;

