
import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom";
import Cart from "./common/cart/cart";
import NavBar from "./common/navbar/navbar";
import Home from "./pages/home/home";
import Footer from "./common/footer/footer";
import Shop from "./pages/shop/shop";
import Product from "./pages/product/product";
import Checkout from "./pages/checkout/checkout";
function App() {
  return (
    <>
    <NavBar />
    <Cart />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product" element={<Product />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
