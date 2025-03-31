const mongoose = require('mongoose');

// Database connection
mongoose.connect("mongodb://127.0.0.1:27017/Login", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000
})
.then(() => {
    console.log("Database Connected Successfully");
})
.catch((err) => {
    console.error("Database connection error:", err);
});

// Schema for product
const ProdSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    image: {  // New field for storing image path
        type: String,
        default: ''  // Default to an empty string if no image is provided
    }
});

// Model for the product schema
const prod = mongoose.model("prod", ProdSchema);

// Export the model
module.exports = prod;
