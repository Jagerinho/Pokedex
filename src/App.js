import React from 'react';
import Main from './Components/Main';
import './Components/style.css'
import About from "./routes/AboutMe.js";
import Home from "./Components/Main.jsx";
import { Route, HashRouter, Link, Routes  } from "react-router-dom";


// export default function App() {
//     return (
//         <>
//             <Main/>
//            <Outlet/>
//         </>
//     )

function Navigation() {
    return (
      <nav>
            <Link className="links" to="/">Home</Link>
            <Link className="links" to="/about">About</Link>
      </nav>
    );
  }

const App = () => {
    return (
        <HashRouter>
        <div>
            <Navigation />
            <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            </Routes>
        </div>
      </HashRouter>
    )
}

export default App;