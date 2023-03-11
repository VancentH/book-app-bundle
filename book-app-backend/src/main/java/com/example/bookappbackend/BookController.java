package com.example.bookappbackend;

import java.util.ArrayList;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api")
public class BookController {

	@GetMapping("/books")
	public List<Book> getBooks() {
		List<Book> list = new ArrayList<Book>();
		list.add(new Book(1, "Harry Potter and the Prisoner of Azkaban, Book 3", "J.K. Rowling"));
		list.add(new Book(2, "Harry Potter and the Deathly Hallows, Book 7", "J.K. Rowling"));
		list.add(new Book(3, "The Desolations of Devil's Acre: Miss Peregrine's Peculiar Children, Book 6",
				"Ransom Riggs"));
		return list;
	}
}
