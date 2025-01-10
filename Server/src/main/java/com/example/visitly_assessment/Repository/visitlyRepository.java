package com.example.visitly_assessment.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.visitly_assessment.model.visitlyModel;

public interface visitlyRepository extends JpaRepository<visitlyModel, Long> {

}
