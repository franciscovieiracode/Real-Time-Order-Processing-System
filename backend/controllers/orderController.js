const pool = require('../config/db');  // Import the pool object from the database file

// Function to get all orders
const getOrders = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM orders ORDER BY created_at DESC');
    res.status(200).json(result.rows); // Send the orders to the client
  } catch (err) {
    console.error('Error retrieving orders:', err);
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
};

const createOrder = async (req, res) => {
  const { orderDetails } = req.body;

  try {
    // Insert the new order into the PostgreSQL database
    const result = await pool.query(
      'INSERT INTO orders (order_details) VALUES ($1) RETURNING *',
      [JSON.stringify(orderDetails)]
    );    
    const newOrder = result.rows[0]; // Get the inserted order

    // Emit the new order to all connected clients via Socket.io
    global.io.emit('new-order', newOrder);

    res.status(201).json(newOrder); // Return the new order as a response
  } catch (err) {
    console.error('Error creating order:', err);
    res.status(500).json({ error: 'Failed to create order' });
  }
};

module.exports = { getOrders, createOrder };
