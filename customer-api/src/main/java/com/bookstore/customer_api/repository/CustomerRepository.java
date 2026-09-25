package com.bookstore.customer_api.repository;

import com.bookstore.customer_api.model.Customer;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CustomerRepository extends MongoRepository<Customer, String> {
}
