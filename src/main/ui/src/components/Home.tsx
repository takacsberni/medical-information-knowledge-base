import React from "react";
import '../static/css/home.css'
import Background from '../static/images/laboratory.jpg'

const Home: React.FC = () => {
    return (
        <div>
            <div className="flex-container-inside background-image" style={{ backgroundImage: `url(${Background})` }}>
                <div className="card-inside">

                </div>

            </div>
        </div>
    )
}

export default Home;
