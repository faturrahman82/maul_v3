import { languageData } from "../lib/data";
import TechsList from "../components/molecules/TechsList";
export default function About() {
  return (
    <div className="flex flex-col gap-7 pb-[7.8rem]">
      <div className="relative">
        <h1 className="text-white font-bold text-3xl">About me</h1>
        <p className="pt-3 text-gray-400 text-lg">
          I'm a frontend web developer based in Indonesia, experience in
          utilizing JavaScript for a wide range of development projects.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-semibold text-white">Tech stack</h3>
        <TechsList />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-semibold text-white">Language</h3>
        <div className="flex flex-col gap-3">
          {languageData.map((data, index) => (
            <div key={index} className="flex items-center gap-1">
              <span className="font-medium">{data.bahasa}</span>
              <span className="text-sm text-gray-400">{data.Proficiency}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3"></div>
    </div>
  );
}
