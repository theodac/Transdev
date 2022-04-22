import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" component={HomePage} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
