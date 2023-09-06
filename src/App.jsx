import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Используйте BrowserRouter

import Cart from "./components/Cart.jsx";
import ProductList from "./components/ProductList.jsx";
import productsData from "/src/components/ProductsData.json"; // JSON с товарами


function App() {
  return (
    <Provider store={store}>
      <Router>
        {" "}
        {/* Используйте BrowserRouter */}
        <Routes>
          <Route path="/"element={<ProductList products={productsData} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
