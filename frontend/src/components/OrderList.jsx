const OrderList = ({ orders }) => {
    console.log('Rendering orders:', orders); // 👀
    return (
      <div>
        {orders.reverse().map((order) => {
          const createdAt = new Date(order.created_at); // Convert to Date object
          return (
            <div key={order.id}>
              📝 Table: {order.order_details.table} - {order.order_details.food} - {order.order_details.drink}  - Note: { order.order_details.specialNote} - Time {createdAt.toLocaleString()} 
              - State: {order.order_state} <button>Deliver</button>
            </div>
          );
        })}
      </div>
    );
  };
  
  export default OrderList;
  