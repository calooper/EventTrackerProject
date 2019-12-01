### Overview

This is an event tracking application that is designed to
allow users to log daily intermittent-fasting information. The app is intended
track a user's fasting streaks by recording data about their fasting
start-time, end-time, duration, calories, etc.

### Technologies Used

This is a REST API with Spring Boot, JPA, Hibernate, and MySQL.

REST Endpoints

| HTTP Method   |     URI                      |
| ------------- | -----------------------------|
| GET           | /api/fasts                   |
| GET           | /api/fasts/{id}              |
| POST          | /api/fasts                   |
| DELETE        | /api/fasts/{id}              |
| PUT           | /api/fasts/{id}              |
| GET           | /api/fasts/search/{keyword}  |
| GET           | /api/fasts/searchdate/{date} |
