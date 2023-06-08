package com.example.bookappbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.bookappbackend.domain.Book;
import com.example.bookappbackend.service.BookService;

@RestController
//@RequestMapping("v1")
public class BookController {

	@Autowired
	private BookService bookService;

//	@GetMapping("/books")
//	public List<Book> getBooks() {
//		List<Book> list = new ArrayList<Book>();
//		list.add(new Book(1, "Harry Potter and the Prisoner of Azkaban, Book 3", "J.K. Rowling"));
//		list.add(new Book(2, "Harry Potter and the Deathly Hallows, Book 7", "J.K. Rowling"));
//		list.add(new Book(3, "The Desolations of Devil's Acre: Miss Peregrine's Peculiar Children, Book 6",
//				"Ransom Riggs"));
//		return list;
//	}

	/**
	 * 新增一本書籍
	 * 
	 * @param book
	 * @return
	 */
	@PostMapping("/books")
	public Book create(Book book) {
		return bookService.createBook(book);
	}

	/**
	 * 刪除一本書
	 * 
	 * @param id
	 */
	@DeleteMapping("/books/{id}")
	public void delete(@PathVariable long id) {
		bookService.deleteBook(id);
	}

	/**
	 * 透過id更新一筆書籍
	 *
	 * @param bookname
	 * @param author
	 * @param id
	 * @return
	 */
	@PutMapping("/books")
	public int update(@RequestParam String bookname, @RequestParam String author, @RequestParam long id) {
		// Book book = new Book();
		// book.setId(id);
		// book.setBookname(bookname);
		// book.setAuthor(author);
		// update and create both using repository.save()
		// return bookService.createBook(book);
		return bookService.updateByJPQL(bookname, author, id);
	}

	/**
	 * 取得一本書籍
	 * 
	 * @param id
	 * @return
	 */
	@GetMapping("/books/{id}")
	public Book getOne(@PathVariable long id) {
		return bookService.getBookById(id);
	}

	/**
	 * 取得所有書籍
	 * 
	 * @return
	 */
	@GetMapping("/books")
	public List<Book> getAll() {
		return bookService.getAllBooks();
	}

}
