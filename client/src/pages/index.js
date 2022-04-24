import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./home";
import Single from "./home/single";
import Commerciale from "./home/commerciale";
import Achat from "./home/achat";
import Technique from "./home/technique";
import Environnement from "./home/environnement";
import Exploitation from "./home/exploitation";
import RessourcesHumaine from "./home/ressources_humaines";

const Root = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/single" element={<Single />} />
                <Route exact path="/commerciale" element={<Commerciale />} />
                <Route exact path="/achat" element={<Achat />} />
                <Route exact path="/technique" element={<Technique />} />
                <Route exact path="/environnement" element={<Environnement />} />
                <Route exact path="/exploitation" element={<Exploitation />} />
                <Route exact path="/ressources_humaines" element={<RessourcesHumaine />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Root;
