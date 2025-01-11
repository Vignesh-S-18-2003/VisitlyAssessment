package com.example.visitly_assessment.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.visitly_assessment.model.visitlyModel;
import com.example.visitly_assessment.Service.visitlyService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/books")
@CrossOrigin(origins = "http://localhost:5173") 
public class visitlyController {

    @Autowired
    private visitlyService visitlyService;

    // Get all books
    @GetMapping
    public List<visitlyModel> getAllBooks() {
        return visitlyService.getAllBooks();
    }

    // Get book by ID
    @GetMapping("/{id}")
    public Optional<visitlyModel> getBookById(@PathVariable Long id) {
        return visitlyService.getBookById(id);
    }

    // Create a new book
    @PostMapping
    public visitlyModel createBook(@RequestBody visitlyModel visitlyModel) {
        return visitlyService.saveBook(visitlyModel);
    }

    // Update a book by ID
    @PutMapping("/{id}")
    public visitlyModel updateBook(@PathVariable Long id, @RequestBody visitlyModel updatedBook) {
        return visitlyService.updateBook(id, updatedBook);
    }

    // Delete a book by ID
    @DeleteMapping("/{id}")
    public void deleteBook(@PathVariable Long id) {
        visitlyService.deleteBook(id);
    }
}

