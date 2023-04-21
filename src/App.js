import React from 'react';
import Main from './Components/Main';
import './Components/style.css'
import { Link, Outlet } from "react-router-dom"

export default function App() {
    return (
        <>
            {/* <nav>
                <Link to="/">Home</Link>
    </nav>*/}
            <Main/>
           <Outlet/>
        </>
    )
}