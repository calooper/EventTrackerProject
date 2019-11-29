package com.skilldistillery.eventtracker.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.eventtracker.entities.Fast;
import com.skilldistillery.eventtracker.repositories.FastRepository;

@Service
public class FastServiceImpl implements FastService {

	@Autowired
	private FastRepository fRepo;

	@Override
	public List<Fast> listAllFasts() {
		// TODO Auto-generated method stub
		return fRepo.findAll();
	}

	@Override
	public Fast getFast(int id) {

		Fast fast = null;
		Optional<Fast> opt = fRepo.findById(id);
		if (opt.isPresent()) {
			fast = opt.get();
		}
		return fast;

	}

	@Override
	public Fast addFast(Fast fast) {
		fRepo.save(fast);
		fRepo.flush();

		return fast;
	}

	@Override
	public boolean deleteFast(int id) {
		boolean deleted = false;

		Optional<Fast> opt = fRepo.findById(id);
		if (fRepo.existsById(id)) {
			fRepo.deleteById(id);
			deleted = true;
		}

		return deleted;

	}

	@Override
	public Fast updateFast(int id, Fast fast) {
		System.out.println("&&&&&&&&&&&&&&&&&&&&&&&&" + fast);

		Fast existing = null;
		Optional<Fast> opt = fRepo.findById(id);
		if (opt.isPresent()) {

			existing = opt.get();
			existing.setCalories(fast.getCalories());
			existing.setDate(fast.getDate());
			existing.setDescription(fast.getDescription());
			existing.setEndFast(fast.getEndFast());
			existing.setStartFast(fast.getStartFast());
			existing.setLength(fast.getLength());
			existing.setRemarks(fast.getRemarks());

			fRepo.saveAndFlush(existing);
		}
		return existing;
	}
	
	@Override
	public List<Fast> fastsByKeyword(Double keyword) {
		
		List<Fast> fasts = fRepo.findByLengthEquals(keyword);
;
	
		return fasts;
	}
	


}
