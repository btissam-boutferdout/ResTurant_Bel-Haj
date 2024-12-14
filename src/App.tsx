import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import Pizza from "./Pages/Pizza";
import Salade from "./Pages/Salade";
import Panini from "./Pages/Panini";
import Cosamia from "./Pages/Cosamia";
import Sandwish from "./Pages/Sandwish";
import Brochette from "./Pages/Brochette";
import Burger from "./Pages/Burger";
import Tacos from "./Pages/Tacos";
import Lasagne from "./Pages/Lasagne";
import Spa from "./Pages/Spa";
import Jus from "./Pages/Jus";
import CartPage from "./Components/CartPage";
import { CartProvider } from "./Components/CartContext";
import ConfirmePage from "./Pages/ConfirmePage";

function App() {
  return (
    <CartProvider>
      {" "}
      {/* Wrap the entire app inside CartProvider */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Pizza" element={<Pizza />} />
          <Route path="/Salade" element={<Salade />} />
          <Route path="/Panini" element={<Panini />} />
          <Route path="/Cosamia" element={<Cosamia />} />
          <Route path="/Sandwish" element={<Sandwish />} />
          <Route path="/Brochette" element={<Brochette />} />
          <Route path="/Burger" element={<Burger />} />
          <Route path="/Tacos" element={<Tacos />} />
          <Route path="/Lasagne" element={<Lasagne />} />
          <Route path="/Spa" element={<Spa />} />
          <Route path="/Jus" element={<Jus />} />
          <Route path="/Cart" element={<CartPage />} />
          <Route path="/ConfirmePage" element={<ConfirmePage />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
