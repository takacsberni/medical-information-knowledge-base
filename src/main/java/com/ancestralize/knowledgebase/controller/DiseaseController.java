package com.ancestralize.knowledgebase.controller;

import com.ancestralize.knowledgebase.dao.DiseaseStorageRepository;
import com.ancestralize.knowledgebase.model.Disease;
import com.ancestralize.knowledgebase.service.DiseaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
public class DiseaseController {

    @Autowired
    private DiseaseService diseaseService;
    private DiseaseStorageRepository diseaseStorageRepository;

    @GetMapping(value = "api/disease/get/all")
    public List<Disease> getAllDiseases(){
        return diseaseService.getAllDisease();
    }

    @PostMapping(value = "api/disease/new")
    public void addDisease(@RequestBody Disease newDisease){
        diseaseService.addDisease(newDisease);
    }
}
