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
}
