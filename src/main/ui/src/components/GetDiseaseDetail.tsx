import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import DiseaseDetail from "./DiseaseDetail";



const GetDiseaseDetail: React.FC = () => {
    // const [disease, setDisease] = useState([]);
    const [disease, setDisease] = useState<{name: string; description: string}>({
        name: '',
        description: '',
    });
    let {filter} = useParams();

    const fetchDisease = async (filter:any) => {
        try {
            const response = await (fetch("/api/disease/get/" + filter));
            return await response.json();
        }
        catch (error) {
            throw new Error('Something went wrong while loading data');
        }
    }

    const showDiseaseDetails = function (data: {name: string; description: string}) {
        return  (
            <DiseaseDetail{...data} />
        )
    }

    useEffect(() => {
        fetchDisease(filter).then((disease) => {
            setDisease({name: disease.name, description: disease.description});
            console.log(disease)
        })
    }, [filter]);



    return (
        <div className="card-container">
            {disease ? <div className=""> {showDiseaseDetails(disease)} </div> : null}
        </div>
    )
}
export default GetDiseaseDetail;
