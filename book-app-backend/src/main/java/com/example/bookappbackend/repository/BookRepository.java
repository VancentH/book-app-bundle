package com.example.bookappbackend.repository;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.example.bookappbackend.domain.Book;

import jakarta.transaction.Transactional;

public interface BookRepository extends CrudRepository<Book, Long> {

	Book findById(long id);
	
	@Modifying
	@Transactional
	@Query("UPDATE Book b SET b.bookname = ?1, b.author = ?2 WHERE b.id = ?3")
	int updateByJPQL(String bookname, String author, long id);

}
