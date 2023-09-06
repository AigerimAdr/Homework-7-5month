import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/Cartslice";
import { Link } from 'react-router-dom';

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId) => {
    dispatch(cartActions.removeFromCart(itemId));
  };

  const handleClearCart = () => {
    dispatch(cartActions.clearCart());
  };

  return (
    <div className="cart">
      <h2>Корзина</h2>
      <div className="cart-list">
        {cartItems.map((item) => (
          <div className="cart-item" key={item._id}>
            <h3>{item.name}</h3>
            <p>Цена: {item.price}</p>
            <button onClick={() => handleRemoveFromCart(item._id)}>
              Удалить
            </button>
          </div>
        ))}
      </div>
      {cartItems.length > 0 && (
        <div className="cart-controls">
          <button className="btn-basket" onClick={handleClearCart}>
            Очистить корзину
          </button>
        </div>
      )}
      <Link to="/">Back to products</Link>
    </div>
  );
}

export default Cart;
