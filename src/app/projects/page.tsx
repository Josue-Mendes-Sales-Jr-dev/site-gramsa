import CardProject from "@/components/cardProject";
import H1 from "@/components/h1";
import Imag from "../../../images/ludmila04.jpeg";

export default function Projects() {
  // Array de projetos para facilitar a manutenção e a expansão
  const projects = [
    { title: "Desenho detalhado", subtitle: "Especificações e projetos estruturais" },
    { title: "Desenho detalhado", subtitle: "Especificações e projetos estruturais" },
    { title: "Desenho detalhado", subtitle: "Especificações e projetos estruturais" },
    { title: "Desenho detalhado", subtitle: "Especificações e projetos estruturais" },
    { title: "Desenho detalhado", subtitle: "Especificações e projetos estruturais" },
    { title: "Desenho detalhado", subtitle: "Especificações e projetos estruturais" },
    { title: "Desenho detalhado", subtitle: "Especificações e projetos estruturais" },
    { title: "Desenho detalhado", subtitle: "Especificações e projetos estruturais" },
  ];

  return (
    <section className="flex flex-col gap-20 items-center w-full min-h-screen py-10">
      <H1 className="text-3xl text-blue-400">Projetos</H1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-[90%]">
        {projects.map((project, index) => (
          <CardProject
            key={index}
            Icon="Saiba mais"
            img={Imag}
            title={project.title}
            subtitle={project.subtitle}
          />
        ))}
      </div>
    </section>
  );
}
