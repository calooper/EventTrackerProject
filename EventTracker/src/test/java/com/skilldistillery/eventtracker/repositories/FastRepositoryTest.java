package com.skilldistillery.eventtracker.repositories;

import static org.junit.Assert.assertEquals;
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
	void test_Fast_Reop() {
		Optional<Fast> fOpt = repo.findById(1);
		assertTrue(fOpt.isPresent());

		if (fOpt.isPresent()) {
			Fast f = fOpt.get();
			assertEquals(14.0, f.getLength(), .1);
			assertEquals("2019-11-27", f.getDate().toString());
		}
		
	}
	
	
}
