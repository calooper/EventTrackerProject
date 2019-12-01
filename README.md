### Overview

This is an event tracking application that is designed to
allow users to log daily intermittent-fasting information. The app is intended
track a user's fasting streaks by recording data about their fasting
start-time, end-time, duration, calories, etc.

### Technologies

This is a REST API with Spring Boot, JPA, Hibernate, and MySQL.

All Technologies Used:
* Java
* REST
* Spring MVC
* JPA
* MySQL
* Gradle
* AWS
* Apache Tomcat
* MAMP
* STS


REST Endpoints:

| HTTP Method   |     URI                      |
| ------------- | -----------------------------|
| GET           | /api/fasts                   |
| GET           | /api/fasts/{id}              |
| POST          | /api/fasts                   |
| DELETE        | /api/fasts/{id}              |
| PUT           | /api/fasts/{id}              |
| GET           | /api/fasts/search/{keyword}  |
| GET           | /api/fasts/searchdate/{date} |

### Challenges

This project was my first experience working with REST. The most noticeable
challenge was understanding the new flow from controller -> service ->
repository and that the controller was returning a JSON representation of an
object rather than an MV object or String - as in MVC.  The JPA repository
seems a bit like magic and so that was also a new challenge, but well-worth
any struggle. I did not use any custom queries for this project, but as we
move forward to next week's homework and keep building on this project, there
might be a need to implement any custom queries.
