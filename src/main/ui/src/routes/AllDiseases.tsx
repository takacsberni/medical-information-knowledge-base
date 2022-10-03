import React, {useEffect, useState} from "react";
import DiseaseCard from "../components/DiseaseCard";
import '../static/css/diseasecard.css';


const AllDiseases: React.FC = () => {
    const [diseases, setDiseases] = useState([]);

    useEffect(() => {
        fetchDiseases().then((disease) => {
            setDiseases(disease);
        })
    }, []);

    const showDiseaseCards = function (data: any[]) {
        return data.map(item => (
            <DiseaseCard
                name={item.name}
                description={item.description}
                riskFactors={item.riskFactors}
                symptoms={item.symptoms}
            />));
    }

    const fetchDiseases = async () => {
            const response = await (fetch("/api/disease/get/all"));
            return await response.json();
    }

    return (
        <div className="card-container">
        {diseases ? <div className=""> {showDiseaseCards(diseases)} </div> : null}
        </div>
    )


}

export default AllDiseases;
