
# 📚 Bookstore REST API

A simple and beginner-friendly RESTful API for managing books in a store. Built with **Node.js**, **Express**, and **MongoDB**.

---

## 📑 Table of Contents

- [📦 Features](#-features)  
- [🚀 Getting Started](#-getting-started)  
- [📁 Project Structure](#-project-structure)  
- [📫 API Endpoints](#-api-endpoints)  
- [⚙️ Environment Variables](#️-environment-variables)  
- [📮 Postman Collection](#-postman-collection)  
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


Example JSON body for POST/PUT:

{
  "title": "Eloquent JavaScript",
  "author": "Marijn Haverbeke",
  "price": 24.99,
  "publishedDate": "2018-12-04"
}


---

⚙️ Environment Variables

Create a .env file in the root:

PORT=5000
MONGODB_URI=mongodb://localhost:27017/bookstore


---

📮 Postman Collection

You can import the Postman collection here.

To export it from Postman:

1. Go to your collection


2. Click the three dots ...


3. Choose Export


4. Select 2.1 format and upload to GitHub




---

📄 License

This project is licensed under the MIT License.


---

Built with ❤️ by Your Name

### Tips:
- Replace `link-to-your-exported-postman-collection` with the actual GitHub URL once uploaded.
- You can tweak colors or add badges (like build status, license, etc.) if you wish.

Would you like help generating that Postman collection or setting up the GitHub repo?

