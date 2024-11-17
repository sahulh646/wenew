import React from "react";
import Weather from "./Weather";
import News from "./News";
import {Routes, Route, Link} from 'react-router-dom';

const Header = () => {
    return (
        <>
            <nav class="navbar navbar-dark bg-dark">
                <form class="container-fluid justify-content-center">
                    <Link to="/"><button class="btn btn-outline-primary me-2" type="button">Weather Forecast</button></Link>
                    <Link to="/news"><button class="btn btn-outline-primary" type="button">News</button></Link>
                </form>
            </nav>

            <Routes>
                <Route path="/" element={<Weather/>} />
                <Route path="/news" element={<News/>}/>
            </Routes>
        </>
    )
}

export default Header;