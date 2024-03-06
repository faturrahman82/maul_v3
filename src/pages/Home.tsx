import SocialIcon from "../components/molecules/SocialIcon";
import Card from "../components/molecules/Card";
import { projectPortofolio, social } from "../lib/data/index";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <main className="pb-10">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col">
          <h1 className="text-cyan-500 font-bold text-3xl">
            Maulvi Ilmullah Faturrahman Al Afghani
          </h1>
          <h2 className="text-white text-2xl font-medium">
            FrontEnd Web Developer
          </h2>
        </div>
        <div className="w-[90%]">
          <p className="font-semibold text-gray-400">
            I'm Front End Developer Based Indonesia, experience in utilizing
            JavaScript for a wide range of development projects.
          </p>
        </div>
        <div className="flex items-center gap-5">
          <button
            type="button"
            className="rounded-md py-1 px-2 text-sm md:text-base bg-gray-600/40 transition duration-300 ease-in-out hover:bg-gray-500"
          >
            <a
              href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get in touch
            </a>
          </button>
          {social.map((item, index) => (
            <SocialIcon key={index} icon={item.icon} link={item.link} />
          ))}
        </div>
        <div>
          <button
            type="button"
            className="rounded-md text-sm md:text-base py-1 px-2 bg-gray-600/40 transition duration-300 ease-in-out hover:bg-gray-500"
          >
            <a
              href="/maul.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </button>
        </div>
      </div>
      <div>
        <h1 className="text-xl font-bold mt-20 mb-10">Portofolio</h1>
        <div className="grid sm:grid-cols-2 gap-4">
          {projectPortofolio
            .filter((data, index) => data && index % 3 === 0)
            .map((content, index) => (
              <Card
                key={index}
                title={content.title}
                description={content.text}
                imageUrl={content.img}
                link={content.link}
              />
            ))}
        </div>
        <button
          type="button"
          className="w-full border-2 text-center py-2 rounded-lg border-gray-700/40 hover:bg-gray-700/40 mt-8"
          onClick={() => navigate("/project")}
        >
          View other Portofolio
        </button>
      </div>
    </main>
  );
}
