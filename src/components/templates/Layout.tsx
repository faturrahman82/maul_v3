import Projects from "../../pages/Portofolio";
import Home from "../../pages/Home";

export default function Layout() {
  return (
    <div>
      <div className="lg:mt-5 w-full relative overflow-y-auto scrollbar-thin scrollbar-thumb-yellow-400 scrollbar-track-gray-100">
        <Home />
        <Projects />
      </div>
    </div>
  );
}
