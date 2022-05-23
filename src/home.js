import React from "react";
import Header from "./components/Header/Header.js";
import Profile from "./components/Profile/profile.js";
import Education from "./components/Educations/educations.js";
import { Route,Routes, HashRouter } from "react-router-dom";
import './portfolio.css'
import Experience from "./components/Experience/Experience.js";
import Projects from "./components/Projects/Projects.js";
import Contact from "./components/Contact/Contact.js";

function Home(props) {

  return (
    <div className="home">
      <HashRouter basename="/">
          <Header className="header"/>
          <Routes>
            <Route
              path="/"
              exact
              element ={<Profile/>}
              className="profile"
            />
            <Route
              path="/home"
              element ={<Profile/>}
              className="profile"
            />
            <Route
              path="/education"
              element ={<Education/>}
              className="education"
            />
            <Route
              path="/experience"
              element ={<Experience/>}
            />
            <Route
              path="/projects"
              element ={<Projects/>}
            />
            <Route
              path="/contact"
              element ={<Contact/>}
            />
          </Routes>
        </HashRouter>
    </div>
  );
}

export default Home;