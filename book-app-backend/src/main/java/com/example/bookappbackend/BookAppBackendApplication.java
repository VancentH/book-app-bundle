package com.example.bookappbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication(exclude = { DataSourceAutoConfiguration.class })
public class BookAppBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BookAppBackendApplication.class, args);
	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/api/**").allowedOrigins("http://localhost")
						.allowedMethods("GET", "POST", "PUT", "DELETE").allowCredentials(true)
						.maxAge(3600);
			}
		};
	}

}
