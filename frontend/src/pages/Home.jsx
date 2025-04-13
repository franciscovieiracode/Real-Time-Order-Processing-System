import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchOrders } from '../services/api';
import socket from '../sockets/socket';
import OrderList from '../components/OrderList';

function Home() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchOrders().then(setOrders);
    socket.on('new-order', (order) => {
      setOrders((prev) => [...prev, order]);
    });
    return () => socket.off('new-order');
  }, []);

  return (
    <div>
      <h1>🍽 Kitchen Orders</h1>
      <button onClick={() => navigate('/add')}>➕ Add New Order</button>
      <OrderList orders={orders} />
    </div>
  );
}

export default Home;
