# Docker Book Store Microservices

## 📚 Project Description

A Book Store application developed using **Spring Boot Microservices**, **API Gateway**, **MongoDB**, **Docker**, and a simple **HTML/CSS/JavaScript frontend**.

The system contains two microservices:

* Book API  = sahjath
* Customer API  =thusha

All API requests can be accessed through the API Gateway.

---

## 🏗️ System Architecture

```text
             Frontend / Postman
                    |
                    v
             API Gateway :8080
               /          \
              /            \
             v              v
        Book API        Customer API
          :8081             :8082
             |                 |
             v                 v
          bookdb           customerdb
             \                 /
              \               /
               \             /
                  MongoDB
```

---

## 🛠️ Technologies Used

* Java 25
* Spring Boot 4
* Spring Cloud Gateway
* Spring Data MongoDB
* MongoDB
* Docker
* HTML
* CSS
* JavaScript
* Postman
* Maven

---

## 📦 Microservices

### 1. Book API

Port:

```text
8081
```

Endpoints:

| Method | Endpoint      | Description    |
| ------ | ------------- | -------------- |
| POST   | `/books`      | Add a book     |
| GET    | `/books`      | Get all books  |
| GET    | `/books/{id}` | Get book by ID |
| DELETE | `/books/{id}` | Delete a book  |

### 2. Customer API

Port:

```text
8082
```

Endpoints:

| Method | Endpoint          | Description        |
| ------ | ----------------- | ------------------ |
| POST   | `/customers`      | Add a customer     |
| GET    | `/customers`      | Get all customers  |
| GET    | `/customers/{id}` | Get customer by ID |
| DELETE | `/customers/{id}` | Delete a customer  |

---

## 🚪 API Gateway

The API Gateway runs on:

```text
http://localhost:8080
```

All frontend and Postman requests are sent through the API Gateway.

### Book API through Gateway

```text
http://localhost:8080/books
```

### Customer API through Gateway

```text
http://localhost:8080/customers
```

---

## 🗄️ Database

The project uses MongoDB.

### Book Database

```text
bookdb
```

### Customer Database

```text
customerdb
```

MongoDB runs inside the Docker network.

---

## 📁 Project Structure

```text
docker-book-store/
│
├── api-gateway/
│
├── book-api/
│
├── customer-api/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── docker-compose.yml
├── README.md
└── .gitignore
```

---

## 🐳 Docker Services

| Service      |  Port |
| ------------ | ----: |
| API Gateway  |  8080 |
| Book API     |  8081 |
| Customer API |  8082 |
| MongoDB      | 27017 |

---

## ▶️ How to Run

Make sure **Docker Desktop** is running.

Open PowerShell in the project folder:

```powershell
cd C:\Users\SAHJATH\Desktop\docker-book-store
```

Build and start all services:

```powershell
docker compose up -d --build
```

Check the containers:

```powershell
docker compose ps
```

Stop the project:

```powershell
docker compose down
```

---

## 🌐 Frontend

The frontend is located inside:

```text
frontend/
```

Start the frontend using:

```powershell
cd frontend
py -m http.server 5500
```

Open the browser:

```text
http://localhost:5500/index.html
```

The frontend communicates with the **API Gateway on port 8080**.

---

## 🧪 Postman Testing

The following **8 endpoints** were tested through the API Gateway.

### Book Endpoints

```text
POST   http://localhost:8080/books
GET    http://localhost:8080/books
GET    http://localhost:8080/books/{id}
DELETE http://localhost:8080/books/{id}
```

### Customer Endpoints

```text
POST   http://localhost:8080/customers
GET    http://localhost:8080/customers
GET    http://localhost:8080/customers/{id}
DELETE http://localhost:8080/customers/{id}
```

---

## 🔄 Request Flow

Example for adding a book:

```text
Frontend / Postman
        |
        v
API Gateway :8080
        |
        v
Book API :8081
        |
        v
MongoDB
```

Example for adding a customer:

```text
Frontend / Postman
        |
        v
API Gateway :8080
        |
        v
Customer API :8082
        |
        v
MongoDB
```

---

## 👨‍💻 Author

**Mohamed Sahjath**

Book Store Microservices Coursework
