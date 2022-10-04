import React from "react";
interface DiseaseType  {
    name: string;
    description: string;
    symptoms: string[];
    riskFactors: string[];
}

const DiseaseDetail = ({name, description, symptoms, riskFactors}: DiseaseType) => {
    return (
        <div className="card-container" style={{height:"50rem"}}>
            <div className="card" style={{height: "max-content"}}>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className="card-text">{description}</p>
                    <p className="card-text">Symptoms: {symptoms.toString().replaceAll("_", " ").toLowerCase()}</p>
                    <p className="card-text">Risk factors: {riskFactors.toString().replaceAll("_", " ").toLowerCase()}</p>
                </div>
            </div>
        </div>
    )
};

export default DiseaseDetail;
