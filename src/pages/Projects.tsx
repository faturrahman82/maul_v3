import { projectPortofolio } from "../lib/data";
import Card from "../components/molecules/Card";
export default function Projects() {
  return (
    <div className="flex flex-col gap-10 pb-10">
      <div>
        <h1 className="text-4xl font-bold">Portofolio</h1>
        <p className="font-semobold">
          several portfolios that my team and I created
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {projectPortofolio.map((data) => (
          <Card
            title={data.title}
            description={data.text}
            imageUrl={data.img}
          />
        ))}
      </div>
    </div>
  );
}
