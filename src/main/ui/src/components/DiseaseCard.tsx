import React from "react";

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
    <div>
        <p className="number">
            Disease:
        </p>
        <p dangerouslySetInnerHTML={ {__html: name }} />
        <p dangerouslySetInnerHTML={ {__html: description }} />
        <div>
            <div>Risk factors:</div>
            {riskFactors.map(riskFactor => (
                <div key={riskFactor}>
                    <span dangerouslySetInnerHTML={
                        {__html: `- ${riskFactor.replaceAll("_", " ").toLowerCase()}`
                        }} />
                </div>
            ))}
        </div>
        <div>
            <div>Symptoms: </div>
            {symptoms.map(symptom => (
                <div key={symptom}>
                    <span dangerouslySetInnerHTML={
                        {__html: `- ${symptom.replaceAll("_", " ").toLowerCase()}`
                        }} />
                </div>
            ))}
        </div>
    </div>
)

export default DiseaseCard;
