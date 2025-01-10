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

    // Get all books
    public List<visitlyModel> getAllBooks() {
        return visitlyRepository.findAll();
    }

    // Get book by ID
    public Optional<visitlyModel> getBookById(Long id) {
        return visitlyRepository.findById(id);
    }

    // Save book
    public visitlyModel saveBook(visitlyModel book) {
        return visitlyRepository.save(book);
    }

    // Delete book by ID
    public void deleteBook(Long id) {
        visitlyRepository.deleteById(id);
    }
}
