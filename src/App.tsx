import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import { NavaBar } from "components/organisms/Navbar/Navbar";

function App() {
  return (
    <>
      <NavaBar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
