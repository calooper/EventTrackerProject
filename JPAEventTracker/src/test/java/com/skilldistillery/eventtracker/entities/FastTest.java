package com.skilldistillery.eventtracker.entities;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class FastTest {
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Fast workout;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("XtremePU");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		workout = em.find(Fast.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		workout = null;
		em.close();
	}

	@Test
	void test_Post_entity__mappings() {
		assertNotNull(workout);

	}
}
