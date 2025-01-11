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

    public List<visitlyModel> getAllBooks() {
        return visitlyRepository.findAll();
    }

    public Optional<visitlyModel> getBookById(Long id) {
        return visitlyRepository.findById(id);
    }

    public visitlyModel saveBook(visitlyModel book) {
        return visitlyRepository.save(book);
    }

    public visitlyModel updateBook(Long id, visitlyModel updatedBook) {
        return visitlyRepository.findById(id)
                .map(book -> {
                    book.setBookName(updatedBook.getBookName());
                    book.setAuthorName(updatedBook.getAuthorName());
                    book.setDescription(updatedBook.getDescription());
                    book.setPublish(updatedBook.getPublish());
                    return visitlyRepository.save(book);
                })
                .orElseThrow(() -> new RuntimeException("Book not found with id: " + id));
    }

    public void deleteBook(Long id) {
        visitlyRepository.deleteById(id);
    }
}
