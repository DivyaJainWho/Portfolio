import React from "react";
import { Route,Routes, HashRouter } from "react-router-dom";
import Home from "./home";

export default function Main(propss) {
    return (
      <div>
        <HashRouter basename="/">
          <Routes>
            <Route
              path="/"
              exact
              element ={<Home/>}
            />
            <Route
              path="/home"
              element ={<Home/>}
            />
          </Routes>
        </HashRouter>
      </div>
    );
  }
