import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/organisms/Navbar";
import Portofolio from "./pages/Portofolio";

function App() {
  return (
    <main className="bg-[#1d1d1d]">
      <div className="max-w-[48rem] mx-auto px-5 h-full text-white">
        <div className="py-10 ">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portofolio" element={<Portofolio />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
