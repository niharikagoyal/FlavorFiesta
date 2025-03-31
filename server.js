const express = require('express'); 
const path = require('path'); 
const bodyParser = require('body-parser'); 
const mongoose = require('mongoose'); 
const session = require('express-session'); 

const main = require('./routes/main');
const auth = require('./routes/auth');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false
}));

// Set up EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/images', express.static(path.join(__dirname, 'public/images'))); // Add a static folder for images

app.use('/', main); 
app.use('/', auth);

// Route to handle search queries
app.get('/search', (req, res) => {
  const query = req.query.query; 
  res.redirect(`/menu?query=${query}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB (Ensure MongoDB is running locally or through a cloud service)
mongoose.connect('mongodb://127.0.0.1:27017/Login', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000
})
.then(() => console.log('MongoDB connected successfully'))
.catch((err) => console.error('MongoDB connection error:', err));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
