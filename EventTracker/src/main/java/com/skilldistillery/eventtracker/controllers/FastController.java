package com.skilldistillery.eventtracker.controllers;

import java.time.LocalDate;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.eventtracker.entities.Fast;
import com.skilldistillery.eventtracker.service.FastService;

@RestController
@RequestMapping("api")
@CrossOrigin({ "*", "http://localhost:4209" })
public class FastController {

	
	//port 8090
	@Autowired
	private FastService fRepo;

	@RequestMapping(path = "/fasts", method = RequestMethod.GET)
	public List<Fast> listAllFasts() {
		
		System.out.println("in fast list all controller");
		
//		List<Fast> list = fRepo.listAllFasts();
//		System.out.println("inside list controller for each");
//		for (Fast fast : list) {
//			System.out.println(fast.getId() + " "  + fast.getStartFast());
//			System.out.println();
//		}

		return fRepo.listAllFasts();
	}

	@RequestMapping(path = "fasts/{id}", method = RequestMethod.GET)
	public Fast findFastByID(@PathVariable("id") int id, HttpServletResponse resp) {
		Fast fast = fRepo.getFast(id);
		if (fast == null) {
			resp.setStatus(404);
		}

		return fast;
	}

	@PostMapping(path = "/fasts")
	public Fast addFast(@RequestBody Fast fast, HttpServletRequest req, HttpServletResponse resp) {
		
		System.out.println("in post add fast controller " + fast.getId() +  fast.getDate());
		
		
		try {
			fRepo.addFast(fast);
			resp.setStatus(201);
			resp.addHeader("Location", "http://localhost:8082/api/addresses/" + fast.getId());
			StringBuffer url = req.getRequestURL();
			url.append("/").append(fast.getId());
			resp.addHeader("Location", url.toString());

		} catch (Exception e) {
			resp.setStatus(400);
			e.printStackTrace();
		}

		return fast;
	}

	@RequestMapping(path = "fasts/{id}", method = RequestMethod.DELETE)
	public void deleteFast(@PathVariable("id") Integer id, HttpServletResponse resp) {

		try {
			Boolean deleted = fRepo.deleteFast(id);
			if (deleted) {
				resp.setStatus(204);
			} else {
				resp.setStatus(404);
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			resp.setStatus(400);

		}

	}

	@PutMapping(path = "fasts/{id}")
	public Fast updateFast(@PathVariable("id") Integer fid, @RequestBody Fast fast, HttpServletRequest req,
			HttpServletResponse resp) {

		System.out.println("********************" + fid);
		Fast fastExisting = findFastByID(fid, resp);

		System.out.println("++++++++++++++++++++++++" + fid);
		try {
			fast = fRepo.updateFast(fid, fast);
			resp.setStatus(200);
//			resp.addHeader("Location", "http://localhost:8089/api/fasts/" + fast.getId());
			StringBuffer url = req.getRequestURL();
			url.append("/").append(fast.getId());
			resp.addHeader("Location", url.toString());
		} catch (Exception e) {
			resp.setStatus(400);
			e.printStackTrace();
		}

		return fast;
	}

	@GetMapping(path = "fasts/search/{keyword}")
	public List<Fast> fastByKeyword(@PathVariable("keyword") Double keyword, HttpServletRequest req,
			HttpServletResponse resp) {
		List<Fast> fasts = null;

		try {
			fasts = fRepo.fastsByKeyword(keyword);
			resp.setStatus(201);
			resp.addHeader("Location", "http://localhost:8089/api/fasts/search/" + keyword);
			StringBuffer url = req.getRequestURL();
			url.append("/").append(keyword);
			resp.addHeader("Location", url.toString());
		} catch (Exception e) {
			// TODO Auto-generated catch block
			resp.setStatus(400);
			e.printStackTrace();
		}

		return fasts;
	}
	
	@GetMapping(path = "fasts/searchdate/{date}")
	public List<Fast> fastByKeyword(@PathVariable("date") String date, HttpServletRequest req,
			HttpServletResponse resp) {
		List<Fast> fasts = null;
		
		
		 LocalDate localDate = LocalDate.parse(date);

		
		try {
			fasts = fRepo.fastsByDate(localDate);
			resp.setStatus(201);
			resp.addHeader("Location", "http://localhost:8089/api/fasts/search/" + date);
			StringBuffer url = req.getRequestURL();
			url.append("/").append(date);
			resp.addHeader("Location", url.toString());
		} catch (Exception e) {
			// TODO Auto-generated catch block
			resp.setStatus(400);
			e.printStackTrace();
		}

		return fasts;
	}

}
