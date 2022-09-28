import React from "react";
import '../static/css/footer.css';

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="flex-container-footer">
                <div className="footer-col-1">
                    <h5 className="text-md-left"> <a href="mailto: dev@ancestralize.com"> Need help? </a> </h5>
                </div>
                <div className="footer-col-2">
                    <h5 className="middle"> <a href="https://www.ancestralize.com/"> Ancestralize home </a> </h5>
                </div>
                <div className="footer-col-3">
                    <h5 className="middle"> 2022 </h5>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
