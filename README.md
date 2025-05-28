
# 📚 Bookstore REST API

A simple and beginner-friendly RESTful API for managing books in a store. Built with **Node.js**, **Express**, and **MongoDB**.

---

## 📑 Table of Contents

- [📦 Features](#-features)  
- [🚀 Getting Started](#-getting-started)  
- [🤝 Contributing](#-contributing)  
- [📁 Project Structure](#-project-structure)  
- [📫 API Endpoints](#-api-endpoints)  
- [🧪 Postman Routes](#-postman-routes)  
- [⚙️ Environment Variables](#️-environment-variables)  
- [📄 License](#-license)

---

## 📦 Features

- Create, Read, Update & Delete books
- MongoDB for database storage
- `.env` support via `dotenv`
- Organized structure with controllers and models
- Nodemon for live reloading during development

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/bookstore-api.git
cd bookstore-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create .env file

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/bookstore
```

### 4. Start the server

```bash
npm run dev   # Development (with nodemon)
npm start     # Production
```

---

## 🤝 Contributing

We welcome contributions to this project! Here’s how you can help:

1. **Fork the repository**: Click on the "Fork" button at the top right of the repository page.
2. **Clone your fork**: Use the following command to clone your forked repository to your local machine:
   ```bash
   git clone https://github.com/your-username/bookstore-api.git
   cd bookstore-api
   ```
3. **Create a new branch**: Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Make your changes**: Implement your feature or fix the bug.
5. **Commit your changes**: Commit your changes with a descriptive message:
   ```bash
   git commit -m "Add your message here"
   ```
6. **Push to your fork**: Push your changes to your forked repository:
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Create a pull request**: Go to the original repository and click on "New Pull Request". Select your branch and submit the pull request.

Thank you for contributing!

---

## 📁 Project Structure

```
bookstore-api/
│
├── controllers/
│   └── bookController.js
├── models/
│   └── book.js
├── routes/
│   └── bookRoutes.js
├── .env
├── index.js
├── package.json
└── README.md
```

---

## 📫 API Endpoints

| Method | Endpoint         | Description                     |
|--------|------------------|---------------------------------|
| GET    | /                | Welcome message                 |
| GET    | /books           | Get all books                  |
| POST   | /books           | Add a new book                 |
| PUT    | /books/:id       | Update a book by ID            |
| DELETE | /books/:id       | Delete a book by ID            |

---

## 🧪 Postman Routes

| Route         | Method | Description          | Body (if required) |
|---------------|--------|----------------------|---------------------|
| /             | GET    | Welcome message      | –                   |
| /books        | GET    | Fetch all books      | –                   |
| /books        | POST   | Add a new book       | JSON (see below)    |
| /books/:id    | PUT    | Update a book        | JSON (see below)    |
| /books/:id    | DELETE | Delete a book        | –                   |

### Example Request Body:

```json
{
  "title": "Eloquent JavaScript",
  "author": "Marijn Haverbeke",
  "price": 24.99,
  "publishedDate": "2018-12-04"
}
```

### Postman Tips:

- Set Content-Type: application/json in headers when sending POST/PUT requests.
- Replace :id with the actual _id from your MongoDB database.

---

## ⚙️ Environment Variables

Create a .env file in the root:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/bookstore
```

---

## 📄 License

This project is licensed under the MIT License.

---

Built with ❤️ by Your Name
```