import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="navbar">
      <h1>Все товары</h1>
      <Link to="/cart">Корзина ({cartItems.length}) items</Link>
    </div>
  );
}

export default Navbar;
