import React from "react";
import '../static/css/all-disease-cards.css';
import {Link} from "react-router-dom";

type Props = {
    name: string;
    description: string;
    riskFactors: string[];
    symptoms: string[];
}
const DiseaseCard: React.FC<Props> = ({
                                          name,
                                          description,
                                          riskFactors,
                                          symptoms,
                                       }) => (
    <div className="card">
        <Link to={`/diseases/get/${name}`} > <div className="card-body">
             <h2 className="card-title">{name}</h2>
                <p className="card-text">{description}</p>
        </div></Link>
    </div>
)




export default DiseaseCard;
