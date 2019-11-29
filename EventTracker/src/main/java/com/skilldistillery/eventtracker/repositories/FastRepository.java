package com.skilldistillery.eventtracker.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.eventtracker.entities.Fast;

public interface FastRepository extends JpaRepository<Fast, Integer> {

	 List<Fast> findByLengthEquals(Double keyword);

}
