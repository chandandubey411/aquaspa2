import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Appointment from "./pages/Appointment";
import Massage from "./pages/Massage";
import Spa from "./pages/Spa";
import Footer from "./components/Footer";
import Service from "./pages/Service";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar fixed hai isliye top padding */}
      <Navbar />

      <main className="pt-[0px]">
        <Routes>
          <Route path="/" element={<><Home /><About /><Service /><Contact /><Appointment /></>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/massage/:slug" element={<Massage />} />
          <Route path="/spa/:slug" element={<Spa />} />
          <Route path="/services" element={<Service />} />

        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
