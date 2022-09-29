import React, {FC} from 'react';
import './App.css';
import {Outlet} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

const App: FC = () => {
  return (
      <body>
        <div className="flex-container-home">
            <div className="navbar"> <NavigationBar /> </div>
            <div className="middle-container">
                <div className="inside"> <Outlet /></div>
            </div>
            <div className="footer"> <Footer /></div>
        </div>
      </body>
  );
}

export default App;
