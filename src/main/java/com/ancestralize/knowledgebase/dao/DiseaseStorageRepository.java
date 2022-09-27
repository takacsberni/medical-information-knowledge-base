package com.ancestralize.knowledgebase.dao;

import com.ancestralize.knowledgebase.model.Disease;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface DiseaseStorageRepository extends JpaRepository<Disease, UUID> {
    Disease findByName(String disease);
}
