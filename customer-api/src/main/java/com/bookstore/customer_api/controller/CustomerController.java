package com.bookstore.customer_api.controller;

import com.bookstore.customer_api.model.Customer;
import com.bookstore.customer_api.repository.CustomerRepository;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:5500")
@RequestMapping("/customers")
public class CustomerController {

    private final CustomerRepository repository;

    public CustomerController(CustomerRepository repository) {
        this.repository = repository;
    }

    @PostMapping
    public Customer addCustomer(@RequestBody Customer customer) {
        return repository.save(customer);
    }

    @GetMapping
    public List<Customer> getAllCustomers() {
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Customer> getCustomerById(@PathVariable String id) {
        return repository.findById(id);
    }

    @DeleteMapping("/{id}")
    public String deleteCustomer(@PathVariable String id) {
        repository.deleteById(id);
        return "Customer deleted successfully";
    }
}