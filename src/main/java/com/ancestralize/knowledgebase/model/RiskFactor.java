package com.ancestralize.knowledgebase.model;

public enum RiskFactor {
    LACK_OF_EXERCISE("Physical inactivity is one important cause of most chronic diseases."),
    LOW_PROTEIN_INTAKE("Protein deficiency is when your intake is unable to meet your body’s requirements."),
    OLD_AGE("Old age refers to ages nearing or surpassing the life expectancy"),
    PREVIOUS_INJURIES_TO_A_JOINT(""),
    OVERUSE_A_MUSCLE(""),
    REPEATEDLY_USE_A_MUSCLE(""),
    OVERWEIGHT(""),
    GENETIC_MARKER("When you have the genetic marker that makes you susceptible to something"),
    TICK_BITE("");




    private String description;

    RiskFactor(String description) {
    }
}
