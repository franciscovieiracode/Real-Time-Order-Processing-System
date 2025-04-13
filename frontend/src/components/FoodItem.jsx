const FoodItem = ({ food, onClick, isSelected }) => {
    return (
      <div
        onClick={() => onClick(food)}
        style={{
          cursor: 'pointer',
          border: isSelected ? '3px solid green' : 'none',
          padding: '10px',
          textAlign: 'center',
        }}
      >
        <img
          src={food.imageUrl}
          alt={food.name}
          style={{ width: '100px', height: '100px' }}
        />
        <p>{food.name}</p>
      </div>
    );
  };
  
  export default FoodItem;
  