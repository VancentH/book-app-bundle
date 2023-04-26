package com.example.bookappbackend.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.bookappbackend.domain.Book;
import com.example.bookappbackend.repository.BookRepository;

@Service
public class BookService {

	@Autowired
	private BookRepository bookRepository;

	// 新增與修改書籍
	public Book createBook(Book book) {
		return bookRepository.save(book);
	}

	// 刪除書籍
	public void deleteBook(long id) {
		bookRepository.deleteById(id);
	}

	// 查詢一筆書籍
	public Book getBookById(long id) {
		return bookRepository.findById(id);
	}

	// 查詢所有書籍
	public List<Book> getAllBooks() {
		List<Book> books = new ArrayList<>();
		bookRepository.findAll().forEach(books::add);
		return books;
	}

}
