import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import { NavaBar } from "components/organisms/navbar/Navbar";
import { Footer } from "@pages/footer/Footer";
import { MenuPage } from "@pages/menu/MenuPage";
import { ReservePage } from "@pages/reserve";
import { ContactPage } from "@pages/contact";

function App() {
  return (
    <>
      <NavaBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/reservePage" element={<ReservePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
