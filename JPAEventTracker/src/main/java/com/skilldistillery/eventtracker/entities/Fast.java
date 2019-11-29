package com.skilldistillery.eventtracker.entities;

import java.sql.Time;
import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Fast {

	// F I E L D S

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private LocalDate date;

	private String description;

	@Column(name = "length_hours")
	private double length;

	@Column(name = "start_fast")
	private Time startFast;

	@Column(name = "end_fast")
	private Time endFast;

	private int calories;

	private String remarks;

	// C T O R S

	public Fast() {
		super();
	}

	public Fast(int id, LocalDate date, String description, double length, Time startFast,
			Time endFast, int calories, String remarks) {
		super();
		this.id = id;
		this.date = date;
		this.description = description;
		this.length = length;
		this.startFast = startFast;
		this.endFast = endFast;
		this.calories = calories;
		this.remarks = remarks;
	}

	// G E T T E R S --- A N D --- S E T T E R S

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public double getLength() {
		return length;
	}

	public void setLength(double length) {
		this.length = length;
	}

	public Time getStartFast() {
		return startFast;
	}

	public void setStartFast(Time startFast) {
		this.startFast = startFast;
	}

	public Time getEndFast() {
		return endFast;
	}

	public void setEndFast(Time endFast) {
		this.endFast = endFast;
	}

	public int getCalories() {
		return calories;
	}

	public void setCalories(int calories) {
		this.calories = calories;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	// T O -- S T R I N G

	@Override
	public String toString() {
		return "Fast [id=" + id + ", date=" + date + ", description=" + description + ", length=" + length
				+ ", startFast=" + startFast + ", endFast=" + endFast + ", calories=" + calories + ", remarks="
				+ remarks + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + calories;
		result = prime * result + ((date == null) ? 0 : date.hashCode());
		result = prime * result + ((description == null) ? 0 : description.hashCode());
		result = prime * result + ((endFast == null) ? 0 : endFast.hashCode());
		result = prime * result + id;
		long temp;
		temp = Double.doubleToLongBits(length);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		result = prime * result + ((remarks == null) ? 0 : remarks.hashCode());
		result = prime * result + ((startFast == null) ? 0 : startFast.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Fast other = (Fast) obj;
		if (calories != other.calories)
			return false;
		if (date == null) {
			if (other.date != null)
				return false;
		} else if (!date.equals(other.date))
			return false;
		if (description == null) {
			if (other.description != null)
				return false;
		} else if (!description.equals(other.description))
			return false;
		if (endFast == null) {
			if (other.endFast != null)
				return false;
		} else if (!endFast.equals(other.endFast))
			return false;
		if (id != other.id)
			return false;
		if (Double.doubleToLongBits(length) != Double.doubleToLongBits(other.length))
			return false;
		if (remarks == null) {
			if (other.remarks != null)
				return false;
		} else if (!remarks.equals(other.remarks))
			return false;
		if (startFast == null) {
			if (other.startFast != null)
				return false;
		} else if (!startFast.equals(other.startFast))
			return false;
		return true;
	}

}
