import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import { NavaBar } from "components/organisms/Navbar/Navbar";
import { Footer } from "@pages/footer/Footer";
import { MenuPage } from "@pages/menu/MenuPage";

function App() {
  return (
    <>
      <NavaBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
