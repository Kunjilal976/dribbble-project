const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();
import path from 'path'
;const app = express();
const port = process.env.PORT || 3000;

// Allow requests from localhost:5173
app.use(cors({
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200 // Some legacy browsers choke on 204
}));

// General CORS middleware
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.URL).then(()=>{
  console.log('Connected to mongodb');
}).catch((err)=>{
  console.log(err);
});

const db = mongoose.connection;
db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

const __dirname=path.resolve();

app.use(express.json());

// Routes
app.use('/dribbble/users', userRoutes);

app.use(express.static(path.join(__dirname,'/client/dist')));
app.get("*",(req,res)=>{
  res.sendFile(path.join(__dirname,'client' ,'dist','index.html'));
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
