import { useState } from 'react';
import FoodItem from './FoodItem';
import DrinkItem from './DrinkItem';
import { addOrder } from '../services/api'; // API call to create an order

// Example food and drink items
const foodItems = [
  { name: 'Pizza', imageUrl: 'https://media.istockphoto.com/id/496546118/pt/foto/fatia-de-novo-original-pizza-de-pepperoni-italiana-cl%C3%A1ssica-isolada.jpg?s=612x612&w=0&k=20&c=dzS1rDkRFTx0Zs1_GWIYKtFKqj7u2HjFXcCn1tAUQSE=' },
  { name: 'Burger', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBFCimCM1wFvb3FZQOZH_j5ta4Qd2SlNj2vg&s' },
  { name: 'Pasta', imageUrl: 'https://www.pingodoce.pt/wp-content/uploads/2023/06/massa-com-pesto-de-brocolos.jpg' },
];

const drinkItems = [
  { name: 'Coke', imageUrl: 'https://maissabor.pt/cdn/shop/products/3200000216_COCA-COLA_LATA_33CL_1f1313f6-ef7c-4df0-ad1f-48058002b580.jpg?v=1641402470' },
  { name: 'Pepsi', imageUrl: 'https://s3.minipreco.pt/medias/h94/hf0/9115220803614.jpg' },
  { name: 'Water', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYuYjAb6gSohmcPVx4FwM2AAYCP3dxchBigg&s' },
];

const OrderForm = ({ onOrderAdded }) => {
  const [table, setTable] = useState('');
  const [food, setFood] = useState('');
  const [drink, setDrink] = useState('');
  const [specialNote, setSpecialNote] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderData = {
      table,
      food,
      drink,
      specialNote,
    };

    try {
      const newOrder = await addOrder(orderData); // Create the order
      onOrderAdded(newOrder); // Notify parent component to update orders
    } catch (error) {
      console.error('Error creating order:', error);
    }

    // Reset the form after submission
    setTable('');
    setFood('');
    setDrink('');
    setSpecialNote('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Order</h2>

      <div>
        <label htmlFor="table">Table Number:</label>
        <input
          type="text"
          id="table"
          value={table}
          onChange={(e) => setTable(e.target.value)}
          required
        />
      </div>

      <div>
        <h3>Select Food</h3>
        <div style={{ display: 'flex', gap: '20px' }}>
          {foodItems.map((item) => (
            <FoodItem
              key={item.name}
              food={item}
              onClick={() => setFood(item.name)} // Set the food selection on click
              isSelected={food === item.name} // Highlight selected food
            />
          ))}
        </div>
      </div>

      <div>
        <h3>Select Drink</h3>
        <div style={{ display: 'flex', gap: '20px' }}>
          {drinkItems.map((item) => (
            <DrinkItem
              key={item.name}
              drink={item}
              onClick={() => setDrink(item.name)} // Set the drink selection on click
              isSelected={drink === item.name} // Highlight selected drink
            />
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="specialNote">Special Note:</label>
        <textarea
          id="specialNote"
          value={specialNote}
          onChange={(e) => setSpecialNote(e.target.value)}
        />
      </div>

      <button type="submit">Add Order</button>
    </form>
  );
};

export default OrderForm;
