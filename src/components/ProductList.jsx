import { useDispatch } from "react-redux";
import { cartActions } from "../store/Cartslice";
import Navbar from "./NavBar";

// eslint-disable-next-line react/prop-types
function ProductList({ products }) {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(cartActions.addToCart(product));
  };

  return (
   <div>
      <Navbar/>
      <div className="product-list">
        {/* eslint-disable-next-line react/prop-types */}
        {products.map((product) => (
          <div className="product" key={product._id}>
            <img src={product.picture} />
            <h3>{product.name}</h3>
            <p>Цена: {product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Купить</button>
          </div>
        ))}
      </div>
   </div>
  );
}

export default ProductList;
