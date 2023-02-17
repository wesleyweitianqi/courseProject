# Course Project

## Project Description

The Course Project is a Single Page Application (SPA) designed for course recommendation on Udemy for beginners. The project utilizes Vue3 and Element-plus UI, styled using Less to provide a user-friendly experience. The project also provides functionalities such as login, edit, delete, search and category reordering. The data is persisted by running Docker on an EC2 instance using a MYSQL image. The client-side communicates with the server over HTTP with JWT authentication, while the frontend uses Element UI's built-in form validation, and the backend uses JOI for data validation.

## Technical Specifications

Technologies used: Vue, Vuex, Element-plus, Less
Infrastructure: EC2, Docker
Backend frameworks and libraries: Express, express-jwt, joi
HTTP client: Axios, mitt

## Final Product
!["courseProject.gif"](https://github.com/wesleyweitianqi/courseProject/blob/master/server/doc/%20couseProject.gif?raw=true)

## Dependencies
The following dependencies are required to run the project:

- "@escook/express-joi": "^1.1.1",
- "body-parser": "^1.20.1",
- "bcryptjs": "^2.4.3",
- "cors": "^2.8.5",
- "dotenv": "^16.0.3",
- "express": "^4.18.2",
- "express-jwt": "^8.4.0",
- "joi": "^17.7.0",
- "jsonwebtoken": "^9.0.0",
- "mysql2": "^3.1.0"
- "axios": "^1.3.2",
- "element-plus": "^2.2.29",
- "less": "^4.1.3",
- "less-loader": "^11.1.0",
- "mitt": "^3.0.0",
- "vue": "^3.2.13",
- "vue-router": "^4.1.6",
- "vuex": "^4.1.0"

## Quick Start

To start the project, run the following command in the terminal:

npm run start
