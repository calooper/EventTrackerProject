package com.skilldistillery.eventtracker.service;

import java.time.LocalDate;
import java.util.List;

import com.skilldistillery.eventtracker.entities.Fast;

public interface FastService {

	List<Fast> listAllFasts();

	Fast getFast(int id);

	Fast addFast(Fast fast);

	boolean deleteFast(int id);

	Fast updateFast(int id, Fast fast);

	public List<Fast> fastsByKeyword(Double keyword);

	public List<Fast> fastsByDate(LocalDate keyword);
}
