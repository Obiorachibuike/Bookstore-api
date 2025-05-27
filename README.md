
# 📚 Bookstore REST API

A simple and beginner-friendly RESTful API for managing books in a store. Built with **Node.js**, **Express**, and **MongoDB**.

---

## 📑 Table of Contents

- [📦 Features](#-features)  
- [🚀 Getting Started](#-getting-started)  
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

2. Install dependencies

npm install

3. Create .env file

PORT=5000
MONGODB_URI=mongodb://localhost:27017/bookstore

4. Start the server

npm run dev   # Development (with nodemon)
npm start     # Production


---

📁 Project Structure

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


---

📫 API Endpoints

Method	Endpoint	Description

GET	/books	Get all books
POST	/books	Add a new book
PUT	/books/:id	Update a book by ID
DELETE	/books/:id	Delete a book by ID



---

🧪 Postman Routes

Route	Method	Description	Body (if required)

/books	GET	Fetch all books	–
/books	POST	Add a new book	JSON (see below)
/books/:id	PUT	Update a book	JSON (see below)
/books/:id	DELETE	Delete a book	–


Example Request Body:

{
  "title": "Eloquent JavaScript",
  "author": "Marijn Haverbeke",
  "price": 24.99,
  "publishedDate": "2018-12-04"
}

Postman Tips:

Set Content-Type: application/json in headers when sending POST/PUT requests.

Replace :id with the actual _id from your MongoDB database.



---

⚙️ Environment Variables

Create a .env file in the root:

PORT=5000
MONGODB_URI=mongodb://localhost:27017/bookstore


---

📄 License

This project is licensed under the MIT License.


---

Built with ❤️ by Your Name

Let me know if you’d like the Markdown as a downloadable file or want to include example screenshots from Postman too.

