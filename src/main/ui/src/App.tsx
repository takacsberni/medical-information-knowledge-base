import React, {FC} from 'react';
import './App.css';
import {Outlet} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

const App: FC = () => {
  return (
    <div className="App">
        <div className="flex-container-home">
            <div className="navbar"> <NavigationBar /> </div>
            <div className="inside"> <Outlet /></div>
            <div className="footer"> <Footer /></div>
        </div>
    </div>
  );
}

export default App;
