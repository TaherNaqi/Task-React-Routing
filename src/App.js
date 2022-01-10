import Home from "./components/Home";
// Components
import ProductList from "./components/ProductList";
//styling
import "./App.css";
import Detail from "./components/Detail";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/productlist/:slug" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
