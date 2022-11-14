import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Pages
import Home from "./pages/Home/Home";
import ProductPage from "./pages/ProductPage/ProductPage";
import ProductList from "./pages/ProductList/ProductList";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />      
        <Route path="/login" element={<Login />} />      
        <Route path="/register" element={<Register />} />      
        <Route path="/cart" element={<Cart />} />      
        <Route path="/productlist" element={<ProductList />} />      
        <Route path="/productpage" element={<ProductPage />} />      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
