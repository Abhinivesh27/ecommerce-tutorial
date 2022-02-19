import LayOut from "./layout/layout";
import NavBar from "./layout/navbar/navbar";
import Cart from "./layout/cart/cart";
import Footer from "./layout/footer/footer";
import Shop from "./pages/shop/shop";
import ProductDetails from "./pages/product-details/product-details";
import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom";
function App() {
  return (
    <>
    <NavBar />
    <Cart />
    <Router>

      <Routes>
        <Route path="/" element={<LayOut />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product" element={<ProductDetails />} />
      </Routes>

    </Router>
    <Footer />
    </>
  );
}

export default App;
