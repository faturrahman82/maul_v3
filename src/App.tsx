import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/organisms/Navbar";
import Projects from "./pages/Projects";

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
          <Route path="/project" element={<Projects />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
