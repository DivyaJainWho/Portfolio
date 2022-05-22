import React from "react";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/footer.js";
import Profile from "./components/Profile/profile.js";
import './portfolio.css'

function Home(props) {
  return (
    <div className="home">
      <Header className="header"/>
      <Profile className="profile"/>
      <Footer className='footer'/>
    </div>
  );
}

export default Home;