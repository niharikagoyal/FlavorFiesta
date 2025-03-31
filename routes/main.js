const express = require('express'); 
const router = express.Router(); 
const prod = require("../models/prod"); 

router.get('/home', (req, res) => {
    res.render('home', { docTitle: 'Home Page' });
}); 

router.route('/menu')
    .get(async (req, res) => {
        try {
            const allProd = await prod.find({});
            res.render('menu', { q: allProd, docTitle: 'Menu Page' });
        } catch (err) {
            console.error('Error fetching data:', err);
            res.status(500).send('Error fetching data');
        }
    }) 
    .post(async (req, res) => {
        try {
            const allProd = await prod.find({});
            res.render('menu', { q: allProd, docTitle: 'Menu Page' });
        } catch (err) {
            console.error('Error fetching data:', err);
            res.status(500).send('Error fetching data');
        }
    }); 

// Add to Cart Route
router.post('/menu/addtocart', async (req, res) => {
    const { productId, quantity } = req.body;

    try {
        const product = await prod.findById(productId);
        if (!product) {
            return res.status(404).send('Product not found');
        }

        
        req.session.cart = req.session.cart || []; // empty array return krega

        // Check if the product is already in the cart
        const existingItem = req.session.cart.find(item => item.productId === productId);
        if (existingItem) {
            // Increase quantity if already in the cart
            existingItem.quantity += parseInt(quantity);
        } else {
            // Otherwise, add new item to cart
            req.session.cart.push({ productId, quantity: parseInt(quantity) });
        }

        res.redirect('/menu'); // Redirect back to menu page
    } catch (err) {
        console.error('Error adding to cart:', err);
        res.status(500).send('Error adding to cart');
    }
});


// Display Cart Route
router.get('/cart', async (req, res) => {
    try {
        let subtotal = 0;
        const cartItems = [];
        if (req.session.cart && req.session.cart.length > 0) {
            for (const item of req.session.cart) {
                const product = await prod.findById(item.productId);
                if (product) {
                    cartItems.push({
                        product,
                        quantity: item.quantity
                    });
                    subtotal += product.price * item.quantity;
                }
            }
        }

        // Calculate totalBill correctly
        const deliveryFee = 50; // Assuming a fixed delivery fee of ₹50
        const totalBill = subtotal + deliveryFee;

        // Pass totalBill to the template
        res.render('cart', { cartItems, subtotal, totalBill, docTitle: 'Cart Page' });

    } catch (err) {
        console.error('Error fetching cart items:', err);
        res.status(500).send('Error fetching cart items');
    }
});




// Remove Item from Cart Route
router.delete('/cart/removeitem/:productId', async (req, res) => {
  const productId = req.params.productId;
  try {
    if (!req.session.cart || req.session.cart.length === 0) {
      return res.status(400).send('Cart is empty');
    }
    const index = req.session.cart.findIndex(item => item.productId === productId);
    if (index !== -1) {
      req.session.cart.splice(index, 1);
    }
    res.sendStatus(204); // Send success with no content
  } catch (err) {
    console.error('Error removing item from cart:', err);
    res.status(500).send('Error removing item from cart');
  }
});

router.get('/proceed', (req, res) => {
    res.render('proceed', { docTitle: 'Home Page' });
});

module.exports = router;
