package com.ancestralize.knowledgebase.model;

import java.util.Set;

public class Disease {
    private String name;
    private String description;
    private Set<RiskFactors> riskFactors;
    private Set<Symptoms> symptoms;
}
