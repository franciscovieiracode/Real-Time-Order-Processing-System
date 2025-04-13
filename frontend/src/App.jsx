import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://192.168.1.176:3000'); // ← replace with your IP

function App() {
  const [orders, setOrders] = useState([]);
  console.log(orders[0]);
  
  useEffect(() => {
    // Fetch existing orders
    fetch('http://192.168.1.176:3000/api/orders')
    .then(res => res.json())
      .then(setOrders);
      
    // Listen for new orders
    socket.on('new-order', (order) => {
      setOrders(prev => [...prev, order]);
    });

    return () => socket.off('new-order');
  }, []);

  return (
    <div>
      <h1>🍽 Kitchen Orders</h1>
      {orders.map(order => (
        <div key={order.id} style={{ marginBottom: '20px' }}>
          <h3>Order ID: {order.id}</h3>
          <p><strong>Mesa:</strong> {order.order_details.table}</p>
          <p><strong>Item:</strong> {order.order_details.item}</p>
          <p><strong>Quantity:</strong> {order.order_details.quantity}</p>
          <p><strong>Special Request:</strong> {order.order_details.specialRequest}</p>
          <p><strong>Created At:</strong> {new Date(order.created_at).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
