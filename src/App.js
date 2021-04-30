import React from 'react';
import './Assets/Sass/main.css';
import SideMenu from './Components/SideMenu/SideMenu';
import Home from './Pages/Home/Home';
import Login from './Pages/LoginPage/Login';
function App() {
  return (
    <>
      <div></div>
      <div className="columns">
        <div className="aside-column">
          <SideMenu />
        </div>
        <div className="main-content-column">
          <div className="main-content-wrapper">
            <Home />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
