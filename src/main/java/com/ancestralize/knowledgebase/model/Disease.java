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

//    private Set<RiskFactors> riskFactors;
//
//    private Set<Symptoms> symptoms;
}
