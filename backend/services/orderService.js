// Order Service
const createOrderService = (orderDetails) => {
    // Add any business logic for creating an order here
    return { id: Date.now(), ...orderDetails };
  };
  
  module.exports = { createOrderService };
  