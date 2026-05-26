import Home from "./assets/Components/home";
import "./App.css";
import Product from "./assets/Components/Product";
import About from "./assets/Components/About";
import Features from "./assets/Components/Features";
import Footer from "./assets/Components/Contact";
import Testimonial from "./assets/Components/Testimonial";
import Comingsoon from "./assets/Components/Comingsoon";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Product />
                <About />
                <Features />
                <Testimonial />
                <Footer />
              </>
            }
          />
          <Route path="/Shopping" element={<Comingsoon />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
