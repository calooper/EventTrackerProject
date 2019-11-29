package com.skilldistillery.eventtracker.repositories;

import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.skilldistillery.eventtracker.entities.Fast;

@RunWith(SpringRunner.class)
@SpringBootTest
public class FastRepositoryTest {

	
	@Autowired
	private FastRepository repo;

	@Test
	void test_CommmentReop() {
		Optional<Fast> woOpt = repo.findById(1);
		assertTrue(woOpt.isPresent());

		if (woOpt.isPresent()) {
			Fast wo = woOpt.get();
//			assertEquals("skydiving");
		}
	}
	
	
}
