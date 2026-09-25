package com.bookstore.book_api.repository;

import com.bookstore.book_api.model.Book;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface BookRepository extends MongoRepository<Book, String> {
}
