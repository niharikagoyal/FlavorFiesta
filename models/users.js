const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/Login", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000 // Timeout after 5 seconds
})
.then(() => {
    console.log("Database Connected Successfully");
})
.catch((err) => {
    console.error("Database connection error:", err);
});

const Loginschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email:{
        type: String,  
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const collection = mongoose.model("users", Loginschema);

module.exports = collection;
