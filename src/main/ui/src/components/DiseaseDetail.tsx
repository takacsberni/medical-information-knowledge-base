import React from "react";

interface DiseaseType  {
    name: string;
    description: string;
}

const DiseaseDetail = ({name, description}: DiseaseType) => {
    return (
    <div className="card">
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p className="card-text">{description}</p>
        </div>
    </div>
    )
};

export default DiseaseDetail;
