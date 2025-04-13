// services/api.js

// Fetch orders from the backend
export const fetchOrders = async () => {
  const response = await fetch('http://192.168.1.176:3000/api/orders');
  if (!response.ok) {
    throw new Error('Failed to fetch orders');
  }
  return await response.json();
};

// Add a new order
export const addOrder = async (orderData) => {
  const response = await fetch('http://192.168.1.176:3000/api/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ orderDetails: orderData }), // Send the correct data format
  });

  if (!response.ok) {
    throw new Error('Error creating order');
  }

  return await response.json();
};
