package com.ancestralize.knowledgebase.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;
import java.util.UUID;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class Disease {
    @Id
    @GeneratedValue
    private UUID id;
    private String name;
    private String description;

    @Enumerated(EnumType.STRING)
    @ElementCollection(targetClass = RiskFactor.class)
    private Set<RiskFactor> riskFactors;
    @Enumerated(EnumType.STRING)
    @ElementCollection(targetClass = Symptom.class)
    private Set<Symptom> symptoms;
}
