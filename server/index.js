const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Allow requests from localhost:5173
const allowedOrigins = ['https://dribbble-project-cis6.vercel.app', 'http://122.15.204.67:5173'];

// CORS middleware configuration
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

// Enable CORS middleware with options
app.use(cors(corsOptions));

// Connect to MongoDB
mongoose.connect(process.env.UR).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.log(err);
});


const db = mongoose.connection;
db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(express.json());

// Routes
app.use('/dribbble/users', userRoutes);

// Serving static files
app.use(express.static(path.join(__dirname, '/client/dist')));

// Catch-all route to serve index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
