import React, {FC, useState} from 'react';
import './App.css';
import {Outlet} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

const App: FC = () => {
    const [isColorNormal, setIsColorNormal] = useState(true);

    const handleTheme = () => {
        setIsColorNormal(current => !current);
    }

  return (
      <body>
        <div className="flex-container-home">
            <div className="navbar"> <NavigationBar /> </div>
            <div className="middle-container">
                <div className={isColorNormal? 'inside' : 'inside-dark'}>
                    <Outlet />
                </div>
            </div>
            <div className="footer"> <Footer changeTheme={handleTheme} /></div>
        </div>
      </body>
  );
}

export default App;
