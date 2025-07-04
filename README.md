# 🍽️ Flavor Fiesta - Food Delivery Web App

**Flavor Fiesta** is a simple and intuitive food delivery application built using **Node.js**, **Express**, **MongoDB**, and **EJS**. It allows users to browse a curated menu, manage their cart, register/login, and place food orders with ease. Designed for both desktop and mobile responsiveness.

---

## 🚀 Features

- 🔐 **User Authentication** – Sign up and login securely
- 📋 **Menu Browsing** – View dishes with images and descriptions
- 🛒 **Shopping Cart** – Add, update, or remove items
- 📱 **Responsive UI** – Mobile-friendly and desktop-ready design
- 💸 **Checkout Flow** – Seamless order summary and placement

---

## 📁 Project Structure

Flavor-Fiesta/
├── models/
│ ├── prod.js # Product schema
│ └── users.js # User schema
├── public/
│ ├── css/
│ │ ├── cart.css
│ │ ├── home.css
│ │ ├── login.css
│ │ └── menu.css
│ └── images/ # Static assets
├── routes/
│ ├── auth.js # Authentication routes
│ └── main.js # Main application routes
├── views/ # EJS templates
│ ├── cart.ejs
│ ├── home.ejs
│ ├── login.ejs
│ ├── menu.ejs
│ ├── proceed.ejs
│ └── signup.ejs
├── server.js # Entry point
├── package.json # Dependencies
└── .gitignore

yaml
Copy
Edit

---

## 🛠️ Getting Started

### ✅ Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14+ recommended)
- [MongoDB](https://www.mongodb.com/) (local or Atlas cloud)

---

### ⚙️ Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/flavor-fiesta.git
   cd flavor-fiesta
2. **Install the Backend Dependencies**

   bash
   Copy
   Edit
   npm install
   Set up MongoDB

3. **Ensure MongoDB is running on**
    mongodb://127.0.0.1:27017/Login

4. **Or update the connection strings inside:**

    models/prod.js

    models/users.js

5.  **the server**

    bash
    Copy
    Edit
    npm start
    Or use:

    bash
    Copy
    Edit
    node server.js
    Open the application
    Visit: http://localhost:3000
    
## 💻 Usage Guide

| **Action**     | **Description**                                   |
|----------------|---------------------------------------------------|
| **Sign Up**    | Register a new user account                       |
| **Login**      | Log in using registered credentials               |
| **Browse Menu**| Explore available dishes                          |
| **Add to Cart**| Choose quantity and add items to the cart         |
| **View Cart**  | Review, update, or remove items                   |
| **Checkout**   | Proceed to place your order                       |

## 🧰 Technologies Used
Backend: Node.js, Express.js

Database: MongoDB with Mongoose

Templating Engine: EJS

Frontend: HTML5, CSS3 (responsive styling)

Authentication: Basic session-based auth (expandable)

## 🤝 Contributing
Pull requests are welcome! If you'd like to contribute:

Fork the repository

Create a new branch (git checkout -b feature-xyz)

Make your changes and commit (git commit -m 'Add feature xyz')

Push to the branch (git push origin feature-xyz)

Create a pull request

## 📄 License
This project is licensed under the MIT License.

👨‍💻 Developed By

Niharika Goyal
📧 niharika.goyal1212@gmail.com


