package com.example.visitly_assessment.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.visitly_assessment.Repository.visitlyRepository;
import com.example.visitly_assessment.model.visitlyModel;

import java.util.List;
import java.util.Optional;

@Service
public class visitlyService {

    @Autowired
    private visitlyRepository visitlyRepository;

    public List<visitlyModel> getAllUsers() {
        return visitlyRepository.findAll();
    }

    public Optional<visitlyModel> getUserById(Long id) {
        return visitlyRepository.findById(id);
    }

    public visitlyModel saveUser(visitlyModel user) {
        return visitlyRepository.save(user);
    }

    public void deleteUser(Long id) {
    	visitlyRepository.deleteById(id);
    }
}
