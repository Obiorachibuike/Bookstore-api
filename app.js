// app.js

const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
app.use(express.json());
app.use('/api', bookRoutes);
/*
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://User:Fanthom456world@cluster0.paigpn8.mongodb.net/bookstore_api?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(5000, () => console.log("Server running on port 5000")))
  .catch(err => console.log(err));

*/


require('dotenv').config();


console.log("Connecting to MongoDB at:", process.env.MONGO_URI || "mongodb+srv://User:Fanthom456world@cluster0.paigpn8.mongodb.net/bookstore_api?retryWrites=true&w=majority");

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));