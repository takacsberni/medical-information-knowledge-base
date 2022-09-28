import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import DiseaseCard from "../components/DiseaseCard";



const AllDiseases: React.FC = () => {
    const [diseases, setDiseases] = useState([]);
    let {filter} = useParams();
    let {statusFilter} = useParams();

    useEffect(() => {
        fetchDiseases(filter, statusFilter).then((disease) => {
            setDiseases(disease);
        })
    }, [filter, statusFilter]);

    const showDiseaseCards = function (data: any[]) {
        console.log(data)
        return data.map(item => (
            <DiseaseCard
                name={item.name}
                description={item.description}
                riskFactors={item.riskFactors}
                symptoms={item.symptoms}
            />));
    }

    const fetchDiseases = async (filter:any, statusFilter:any) => {
        if (statusFilter !== undefined) {
            const response = await (fetch("/api/disease/get/" + filter + "/" + statusFilter));
            return await response.json();
        } else {
            const response = await (fetch("/api/disease/get/" + filter));
            console.log(`statusFilter ${statusFilter}`);
            console.log(`filter is:   ${filter}`)
            return await response.json();
        }
    }

    return (
        <div>
            <p>ALlDiseases component</p>
        {diseases ? <div className="cardContainer"> {showDiseaseCards(diseases)} </div> : null}
        </div>
    )


}

export default AllDiseases;
