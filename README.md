# 👨‍💼 Employee Management System

<p align="center">
  <strong>A Full-Stack Employee Management System built with Spring Boot, React, MySQL and REST APIs.</strong>
</p>

<p align="center">
  <a href="https://github.com/Rashmiranjan07/EMS-Project">
    <img src="https://img.shields.io/badge/GitHub-EMS--Project-181717?style=for-the-badge&logo=github" alt="GitHub">
  </a>
  <img src="https://img.shields.io/badge/Java-17-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java 17">
  <img src="https://img.shields.io/badge/Spring%20Boot-3.5.4-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" alt="Spring Boot">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/MySQL-Database-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL">
  <img src="https://img.shields.io/badge/Maven-Build-C71A36?style=for-the-badge&logo=apachemaven&logoColor=white" alt="Maven">
</p>

<p align="center">
  <a href="#-overview">Overview</a> •
  <a href="#-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-architecture">Architecture</a> •
  <a href="#-project-structure">Project Structure</a> •
  <a href="#-installation--setup">Setup</a> •
  <a href="#-api-layer">API</a>
</p>

---

# 📌 Overview

**Employee Management System (EMS)** is a full-stack web application for managing employee information through a modern and responsive web interface.

The project uses a **React frontend** for the user interface and a **Spring Boot backend** for REST API development, business logic, and database operations.

The application follows a clean separation between the presentation layer and server-side application logic.

```text
┌─────────────────────────────────────────────────────────┐
│                  EMPLOYEE MANAGEMENT SYSTEM              │
├─────────────────────────────────────────────────────────┤
│                                                         │
│   FRONTEND                         BACKEND              │
│                                                         │
│   React 19                          Java 17             │
│   Vite                              Spring Boot 3.5.4    │
│   Bootstrap 5                      Spring Web           │
│   React Router                     Spring Data JPA      │
│   Axios                             MySQL                │
│                                      Lombok              │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

# 🎯 Project Objective

The main objective of this project is to build a practical full-stack application that demonstrates how a modern frontend communicates with a Java Spring Boot backend and persists data in a relational database.

The project demonstrates:

* Full-stack application development
* React component-based UI development
* Spring Boot REST API development
* CRUD operations
* Database integration
* HTTP communication between frontend and backend
* Client-side routing
* Responsive UI design
* Maven-based Java project management
* npm-based frontend development

---

# ✨ Features

## 👨‍💼 Employee Management

The application is designed around employee management operations.

### Create

Add new employee information through the frontend.

### Read

Retrieve employee information from the backend and display it in the UI.

### Update

Modify existing employee information.

### Delete

Remove employee information from the system.

The overall CRUD flow is:

```text
              EMPLOYEE MANAGEMENT
                       │
          ┌────────────┼────────────┐
          │            │            │
          ▼            ▼            ▼
       CREATE         READ        UPDATE
          │            │            │
          └────────────┼────────────┘
                       │
                       ▼
                     DELETE
```

---

# 🖥️ Frontend

The frontend is a modern React application powered by Vite.

### Frontend responsibilities

* User interface
* Application navigation
* Employee forms
* Employee data presentation
* API communication
* Client-side interaction
* Responsive design

### Frontend technologies

* React 19
* Vite
* Axios
* Bootstrap 5
* React Router DOM
* JavaScript
* ESLint

These technologies are reflected in the current `frontend/package.json`.

---

# ⚙️ Backend

The backend is built using Java and Spring Boot.

### Backend responsibilities

* REST API development
* Business logic
* Employee data processing
* CRUD operations
* Database interaction
* HTTP request handling
* Persistence using JPA

### Backend technologies

* Java 17
* Spring Boot 3.5.4
* Spring Web
* Spring Data JPA
* MySQL
* Lombok
* Maven

These dependencies and versions are defined in the project's `backend/pom.xml`.

---

# 🗄️ Database

The backend uses **MySQL** as the relational database.

Spring Data JPA is used as the persistence layer between the Spring Boot application and MySQL.

```text
Spring Boot
     │
     ▼
Spring Data JPA
     │
     ▼
Hibernate / JPA
     │
     ▼
   MySQL
```

This allows the application to work with employee data using Java entities and repositories rather than manually handling every database operation.

---

# 🏗️ Full-Stack Architecture

The application follows a layered client-server architecture.

```text
                         ┌─────────────────┐
                         │      USER       │
                         │    Browser      │
                         └────────┬────────┘
                                  │
                                  ▼
                    ┌─────────────────────────┐
                    │       FRONTEND          │
                    │                         │
                    │       React 19          │
                    │       Vite              │
                    │       Bootstrap         │
                    │       React Router      │
                    └────────────┬────────────┘
                                 │
                                 │ HTTP Requests
                                 │ JSON
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │        BACKEND          │
                    │                         │
                    │     Spring Boot         │
                    │     REST API            │
                    │     Business Logic      │
                    │     Spring Web          │
                    └────────────┬────────────┘
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │     DATA ACCESS         │
                    │                         │
                    │     Spring Data JPA     │
                    │       Hibernate         │
                    └────────────┬────────────┘
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │        MySQL            │
                    │                         │
                    │     Employee Data       │
                    └─────────────────────────┘
```

---

# 🔄 Request / Response Flow

A typical employee operation follows this flow:

```text
User
 │
 │ Performs an action
 ▼
React Component
 │
 │ Axios
 ▼
Spring Boot REST Controller
 │
 ▼
Service / Business Logic
 │
 ▼
JPA Repository
 │
 ▼
MySQL Database
 │
 │ Data
 ▼
JPA Repository
 │
 ▼
Service
 │
 ▼
REST Controller
 │
 │ JSON Response
 ▼
Axios
 │
 ▼
React UI
```

---

# 🧩 Backend Architecture

The backend follows the common Spring Boot layered architecture.

```text
backend/
│
└── src/
    │
    └── main/
        │
        ├── java/
        │
        │   └── Controller
        │
        │   └── Service
        │
        │   └── Repository
        │
        │   └── Entity / Model
        │
        └── resources/
            │
            └── application.properties
```

### Controller Layer

Handles incoming HTTP requests and exposes REST API endpoints.

### Service Layer

Contains application/business logic.

### Repository Layer

Handles database operations using Spring Data JPA.

### Entity Layer

Represents persistent employee data.

---

# ⚛️ Frontend Architecture

The frontend is organized as a React application.

```text
frontend/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │
│   ├── components/
│   │
│   ├── pages/
│   │
│   ├── services/
│   │
│   └── ...
│
├── package.json
├── vite.config.js
└── eslint.config.js
```

The frontend uses React components to build the UI and Axios to communicate with the backend.

---

# 📂 Complete Project Structure

```text
EMS-Project/
│
├── backend/
│   │
│   ├── .mvn/
│   │   └── wrapper/
│   │
│   ├── bin/
│   │
│   ├── src/
│   │   ├── main/
│   │   └── test/
│   │
│   ├── mvnw
│   ├── mvnw.cmd
│   └── pom.xml
│
├── frontend/
│   │
│   ├── public/
│   │
│   ├── src/
│   │
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   └── README.md
│
├── .gitattributes
├── .gitignore
└── README.md
```

Your GitHub repository currently follows this frontend/backend monorepo structure.

---

# 🛠️ Technology Stack

## 🎨 Frontend

| Technology         | Purpose                           |
| ------------------ | --------------------------------- |
| React 19           | UI development                    |
| Vite 8             | Development server and build tool |
| JavaScript         | Application logic                 |
| Bootstrap 5        | Responsive styling                |
| Axios              | HTTP/API communication            |
| React Router DOM 7 | Client-side routing               |
| ESLint             | Code quality                      |

## ☕ Backend

| Technology        | Purpose                         |
| ----------------- | ------------------------------- |
| Java 17           | Backend programming language    |
| Spring Boot 3.5.4 | Application framework           |
| Spring Web        | REST API development            |
| Spring Data JPA   | Database access                 |
| Hibernate         | ORM                             |
| MySQL             | Relational database             |
| Lombok            | Boilerplate reduction           |
| Maven             | Dependency and build management |

The backend `pom.xml` currently defines Java 17, Spring Boot 3.5.4, Spring Web, Spring Data JPA, MySQL Connector/J, Lombok, and Spring Boot testing support.

---

# 📋 Prerequisites

Before running the complete application, install:

### Required

* Java 17 or compatible JDK
* Node.js
* npm
* MySQL
* Git

### Verify Java

```bash
java --version
```

### Verify Node.js

```bash
node --version
```

### Verify npm

```bash
npm --version
```

### Verify Git

```bash
git --version
```

---

# 🚀 Installation & Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/Rashmiranjan07/EMS-Project.git
```

Navigate into the project:

```bash
cd EMS-Project
```

---

# ☕ 2️⃣ Backend Setup

Navigate to the backend:

```bash
cd backend
```

Configure your MySQL database according to the application's backend configuration.

Then build the Spring Boot application:

### Windows

```bash
mvnw.cmd clean install
```

### Linux / macOS

```bash
./mvnw clean install
```

Start the backend:

### Windows

```bash
mvnw.cmd spring-boot:run
```

### Linux / macOS

```bash
./mvnw spring-boot:run
```

The Spring Boot application will start using the port configured by the application.

---

# 🗄️ MySQL Configuration

Before starting the backend, make sure MySQL is running.

Configure the database connection in the backend's Spring configuration.

Typical configuration structure:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/your_database
spring.datasource.username=your_username
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
```

> Use your actual database name, username, password, and configuration values.

> Do not commit real database passwords or other sensitive credentials to GitHub.

---

# ⚛️ 3️⃣ Frontend Setup

Open another terminal.

From the project root:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the frontend:

```bash
npm run dev
```

The Vite development server will display the exact local URL and port in your terminal.

---

# ▶️ Running the Complete Application

You need both services running.

### Terminal 1 — Backend

```bash
cd EMS-Project/backend
```

Then:

```bash
./mvnw spring-boot:run
```

On Windows:

```bash
mvnw.cmd spring-boot:run
```

### Terminal 2 — Frontend

```bash
cd EMS-Project/frontend
npm install
npm run dev
```

Then open the URL provided by Vite.

---

# 🔗 Frontend ↔ Backend Integration

The frontend communicates with the Spring Boot backend using Axios.

```text
┌──────────────────────┐
│      React App       │
└──────────┬───────────┘
           │
           │ Axios
           │ HTTP / JSON
           ▼
┌──────────────────────┐
│   Spring Boot API    │
└──────────┬───────────┘
           │
           │ JPA
           ▼
┌──────────────────────┐
│        MySQL         │
└──────────────────────┘
```

---

# 📡 REST API Layer

The backend exposes REST APIs that are consumed by the React frontend.

The general CRUD pattern is:

| HTTP Method | Purpose                |
| ----------- | ---------------------- |
| `GET`       | Retrieve employee data |
| `POST`      | Create employee data   |
| `PUT`       | Update employee data   |
| `DELETE`    | Delete employee data   |

> Add the exact endpoint paths from your controller classes here as the API documentation section of the project evolves.

Example structure:

```text
GET       /api/...
POST      /api/...
PUT       /api/.../{id}
DELETE    /api/.../{id}
```

---

# 📦 Backend Build Commands

From the `backend` directory:

### Build

```bash
./mvnw clean install
```

### Run

```bash
./mvnw spring-boot:run
```

### Test

```bash
./mvnw test
```

### Package

```bash
./mvnw clean package
```

For Windows, use `mvnw.cmd` instead of `./mvnw`.

The repository includes both Maven wrapper scripts, making the backend easier to run without requiring a separately installed Maven executable.

---

# 📦 Frontend Commands

From the `frontend` directory:

### Install dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

### Production build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

### Preview

```bash
npm run preview
```

These scripts are defined in the current frontend `package.json`.

---

# 🔐 Environment & Security

For local development, sensitive configuration should remain outside version control.

Never commit:

```text
❌ Database passwords
❌ API secrets
❌ Authentication tokens
❌ Private keys
❌ Production credentials
```

Use environment variables or local configuration files instead.

---

# 📸 Screenshots

Add screenshots of the actual application here.

## 🏠 Application

![Application](./screenshots/home.png)

## 👨‍💼 Employee Management

![Employee Management](./screenshots/employees.png)

## ➕ Add Employee

![Add Employee](./screenshots/add-employee.png)

## ✏️ Edit Employee

![Edit Employee](./screenshots/edit-employee.png)


---

# 🎥 Demo

If you deploy the application, add your live URL here:

```text
🌐 Live Demo:
YOUR_DEPLOYED_URL
```

# 🧠 Key Learning Outcomes

This project demonstrates practical knowledge of:

### Frontend Development

* React
* Components
* Routing
* API integration
* Axios
* Bootstrap
* Responsive UI
* JavaScript

### Backend Development

* Java
* Spring Boot
* REST APIs
* Controllers
* Services
* Repositories
* Spring Data JPA
* Hibernate
* MySQL

### Full-Stack Integration

* HTTP communication
* JSON data exchange
* CRUD architecture
* Database persistence
* Frontend/backend separation

### Development Tools

* Git
* GitHub
* Maven
* npm
* Vite

---

# 🌱 Future Enhancements

Potential future improvements include:

* [ ] 🔐 User authentication
* [ ] 👤 Role-based authorization
* [ ] 🔎 Employee search
* [ ] 🎯 Advanced filtering
* [ ] 📄 Pagination
* [ ] 📊 Employee dashboard
* [ ] 📈 Employee analytics
* [ ] 🔔 Notifications
* [ ] 🌙 Dark mode
* [ ] 🧪 More automated tests
* [ ] 🐳 Docker support
* [ ] ☁️ Cloud deployment
* [ ] 📱 Improved mobile experience
* [ ] 🔒 Enhanced validation and security

---

# 🤝 Contributing

Contributions are welcome.

### 1. Fork the repository

Create your own fork on GitHub.

### 2. Clone your fork

```bash
git clone https://github.com/<your-username>/EMS-Project.git
```

### 3. Create a branch

```bash
git checkout -b feature/your-feature
```

### 4. Make your changes

Implement and test your changes.

### 5. Commit

```bash
git add .
git commit -m "Add: your feature"
```

### 6. Push

```bash
git push origin feature/your-feature
```

### 7. Create a Pull Request

Open a Pull Request against the main repository.

---

# 🐛 Issues & Feedback

If you find a bug or have a suggestion, feel free to open an issue.

When reporting a problem, include:

* Description of the issue
* Steps to reproduce
* Expected result
* Actual result
* Screenshots where applicable
* Environment details

---

# 📚 Project Documentation

| Documentation                                | Purpose                           |
| -------------------------------------------- | --------------------------------- |
| [`frontend/README.md`](./frontend/README.md) | Frontend-specific documentation   |
| `backend/README.md`                          | Backend-specific documentation    |
| `README.md`                                  | Complete full-stack documentation |

---

# 👨‍💻 Author

## Rashmiranjan

GitHub:

https://github.com/Rashmiranjan07

### Project

https://github.com/Rashmiranjan07/EMS-Project

---

# ⭐ Support

If you find this project useful, please consider giving it a ⭐ on GitHub.

Your support is appreciated!

---

# 📄 License

This project is available under the license specified in the repository.

---

<p align="center">
  <br>
  <strong>👨‍💼 Employee Management System</strong>
  <br>
  <br>
  Java 17 • Spring Boot • Spring Data JPA • MySQL • React • Vite • Axios • Bootstrap
  <br>
  <br>
  ⭐ Built with passion for full-stack development.
</p>
