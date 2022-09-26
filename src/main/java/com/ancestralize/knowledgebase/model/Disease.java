package com.ancestralize.knowledgebase.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Disease {
    private String name;
    private String description;
    private Set<RiskFactors> riskFactors;
    private Set<Symptoms> symptoms;
}
