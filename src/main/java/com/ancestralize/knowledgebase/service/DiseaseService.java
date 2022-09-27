package com.ancestralize.knowledgebase.service;

import com.ancestralize.knowledgebase.dao.DiseaseStorageRepository;
import com.ancestralize.knowledgebase.model.Disease;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class DiseaseService {
    @Autowired
    DiseaseStorageRepository diseaseStorageRepository;

    public List<Disease> getAllDisease(){
        return diseaseStorageRepository.findAll();
    }

    public void addDisease(Disease newDisease){
        diseaseStorageRepository.save(newDisease);
    }

    public void removeDisease(String disease) {
        diseaseStorageRepository.delete(diseaseStorageRepository.findByName(disease));
    }

    public Disease getDiseaseByName(String disease) {
        return diseaseStorageRepository.findByName(disease);
    }

    public Disease updateDiseaseByName(String diseaseName, Disease newDisease) {
        if (getDiseaseByName(diseaseName) != null){
            removeDisease(diseaseName);
            newDisease.setName(diseaseName);
            diseaseStorageRepository.save(newDisease);
        }
        return newDisease;
    }
}
