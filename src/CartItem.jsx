
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import PropTypes from 'prop-types'; // Adicionar esta importação
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calcular custo total
  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => {
      const cost = parseFloat(item.cost.replace('$', ''));
      return total + (cost * item.quantity);
    }, 0).toFixed(2);
  };

  // Calcular total de itens
  const calculateTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const handleContinueShopping = (e) => {
    if (onContinueShopping) {
      onContinueShopping(e);
    }
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleCheckoutSoon = () => {
    alert('Functionality to be added for future reference');
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <h3 style={{ color: 'black' }}>Total Items in Cart: {calculateTotalItems()}</h3>
      
      <div className="cart-items">
        {cart.length === 0 ? (
          <div className="empty-cart">
            <h3>Your cart is empty</h3>
            <p>Add some beautiful plants to your cart!</p>
          </div>
        ) : (
          cart.map(item => (
            <div className="cart-item" key={item.name}>
              <img className="cart-item-image" src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-cost">Unit Price: {item.cost}</div>
                <div className="cart-item-total">
                  Total: ${(parseFloat(item.cost.replace('$', '')) * item.quantity).toFixed(2)}
                </div>
                <div className="cart-item-quantity">
                  <button 
                    className="quantity-btn" 
                    onClick={() => handleDecrement(item)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button 
                    className="quantity-btn" 
                    onClick={() => handleIncrement(item)}
                  >
                    +
                  </button>
                </div>
                <button 
                  className="delete-btn" 
                  onClick={() => handleRemove(item)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      
      <div style={{ marginTop: '20px' }} className='total_cart_amount'></div>
      
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={handleContinueShopping}>
          Continue Shopping
        </button>
        <button className="get-started-button1" onClick={handleCheckoutSoon}>
          Checkout
        </button>
      </div>
    </div>
  );
};
// Adicionar validação de props
CartItem.propTypes = {
  onContinueShopping: PropTypes.func
};

// Definir valor padrão para a prop
CartItem.defaultProps = {
  onContinueShopping: () => {}
};

export default CartItem;
