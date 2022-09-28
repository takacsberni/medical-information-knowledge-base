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
            {riskFactors.map(riskFactor => (
                <div key={riskFactor}>
                    <span dangerouslySetInnerHTML={ {__html: riskFactor}} />
                    {/*<span dangerouslySetInnerHTML={ {__html: symptoms}} />*/}
                </div>
            ))}
        </div>
    </div>
)

export default DiseaseCard;
