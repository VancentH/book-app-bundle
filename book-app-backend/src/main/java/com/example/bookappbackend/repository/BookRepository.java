package com.example.bookappbackend.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.bookappbackend.domain.Book;

public interface BookRepository extends CrudRepository<Book, Long> {

	Book findById(long id);

}
