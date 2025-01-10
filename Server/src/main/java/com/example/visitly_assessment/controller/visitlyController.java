package com.example.visitly_assessment.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.visitly_assessment.model.visitlyModel;
import com.example.visitly_assessment.Service.visitlyService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5173") // Allow frontend to access this API
public class visitlyController {

    @Autowired
    private visitlyService visitlyService;

    @GetMapping
    public List<visitlyModel> getAllUsers() {
        return visitlyService.getAllUsers();
    }

    @GetMapping("/{id}")
    public Optional<visitlyModel> getUserById(@PathVariable Long id) {
        return visitlyService.getUserById(id);
    }

    @PostMapping
    public visitlyModel createUser(@RequestBody visitlyModel visitlyModel) {
        return visitlyService.saveUser(visitlyModel);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
    	visitlyService.deleteUser(id);
    }
}
