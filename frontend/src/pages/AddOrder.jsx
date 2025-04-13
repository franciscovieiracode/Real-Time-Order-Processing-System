import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import OrderForm from '../components/OrderForm';

const AddOrder = () => {
  const [newOrder, setNewOrder] = useState(null);
  const navigate = useNavigate();

  const handleOrderAdded = (order) => {
    console.log(order);
    
    setNewOrder(order); // Store the new order
    navigate('/'); // Navigate back to the home page after order is added
  };

  return (
    <div>
      <h1>Add New Order</h1>
      <OrderForm onOrderAdded={handleOrderAdded} />
      {newOrder && (
        <div>
          <h2>New Order Added!</h2>
          <p>Order ID: {newOrder.id}</p>
          <p>Table: {newOrder.table}</p>
          <p>Food: {newOrder.food}</p>
          <p>Drink: {newOrder.drink}</p>
          <p>Special Note: {newOrder.specialNote}</p>
        </div>
      )}
    </div>
  );
};

export default AddOrder;
