import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./home";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
