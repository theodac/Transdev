import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import HomePage from "./home";
import Single from "./home/single";
import Commerciale from "./home/commerciale";
import Achat from "./home/achat";

const Root = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomePage/>}/>
                <Route exact path="/single" element={<Single/>}/>
                <Route exact path="/commerciale" element={<Commerciale/>}/>
                <Route exact path="/achat" element={<Achat/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Root;
