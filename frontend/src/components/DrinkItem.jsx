const DrinkItem = ({ drink, onClick, isSelected }) => {
    return (
      <div
        onClick={() => onClick(drink)}
        style={{
          cursor: 'pointer',
          border: isSelected ? '3px solid green' : 'none',
          padding: '10px',
          textAlign: 'center',
        }}
      >
        <img
          src={drink.imageUrl}
          alt={drink.name}
          style={{ width: '100px', height: '100px' }}
        />
        <p>{drink.name}</p>
      </div>
    );
  };
  
  export default DrinkItem;
  