package com.skilldistillery.eventtracker.service;

import java.time.LocalDate;
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

		Fast existing = null;
		Optional<Fast> opt = fRepo.findById(id);
		if (opt.isPresent()) {

			existing = opt.get();

			if (fast.getCalories() != 0) {
				existing.setCalories(fast.getCalories());
			}
			if (fast.getDate() != null) {
				existing.setDate(fast.getDate());
			}
			if (fast.getDescription() != null) {
				existing.setDescription(fast.getDescription());
			}
			if (fast.getEndFast() != null) {
				existing.setEndFast(fast.getEndFast());
			}
			if (fast.getStartFast() != null) {
				existing.setStartFast(fast.getStartFast());
			}
			if (fast.getStartFast() != null && fast.getEndFast() != null) {

				String startString = fast.getStartFast().toString();
				double start = toMins(startString);

				String endString = fast.getEndFast().toString();
				double end = toMins(endString);
				
				System.out.println("start" +  start);
				System.out.println("end" + end);
				existing.setLength(((1440 -start) + end)/60);

			}
			if (fast.getRemarks() != null) {
				existing.setRemarks(fast.getRemarks());
			}
			fRepo.saveAndFlush(existing);
		}
		return existing;
	}

	@Override
	public List<Fast> fastsByKeyword(Double keyword) {

		List<Fast> fasts = fRepo.findByLengthEquals(keyword);

		return fasts;
	}

	@Override
	public List<Fast> fastsByDate(LocalDate dateSearch) {

		List<Fast> fasts = fRepo.findAllByDate(dateSearch);

		return fasts;
	}

	private  double toMins(String s) {
		String[] hourMin = s.split(":");
		double hour = Double.parseDouble(hourMin[0]);
		double mins = Double.parseDouble(hourMin[1]);
		double hoursInMins = hour * 60;
		return hoursInMins + mins;
	}

}
