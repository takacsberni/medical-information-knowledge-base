package com.ancestralize.knowledgebase.model;

public enum Symptom {
    BONE_FRACTURES("A medical condition in which there is a partial or complete break in the continuity of a bone."),
    HEIGHT_LOSS("Height loss is related to aging changes in bone, muscles, and joints"),
    POSTURE_CHANGE("Height is lost in all men and women as they age. When poor posture leads to disc compression, the vertebrae in our back absorbs more force than it should. This can lead to chronic pain.");

    private String description;

    Symptom(String description) {
    }
}
