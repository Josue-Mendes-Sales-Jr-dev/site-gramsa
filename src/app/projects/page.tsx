import CardProject from "@/components/cardProject";
import H1 from "@/components/h1";
import Imag from "../../../images/ludmila04.jpeg"
import CardService01 from "@/components/cardService01";

export default function Projects(){
    return(
        <>
        <div className="flex flex-col gap-20 items-center w-[100vw] min-h-[100vh]">
           <H1 className="text-[3rem] text-blue-400">
            Projetos
           </H1>
        <div className="grid items-center justify-center xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 w-[90%] h-[100%] gap-10 xl:gap-5">
            <CardProject Icon="Saiba mais" img={Imag} title="Desenho detalhado" subtitle="Especificações e projetos estruturais"/>
            <CardProject Icon="Saiba mais" img={Imag} title="Desenho detalhado" subtitle="Especificações e projetos estruturais"/>
            <CardProject Icon="Saiba mais" img={Imag} title="Desenho detalhado" subtitle="Especificações e projetos estruturais"/>
            <CardProject Icon="Saiba mais" img={Imag} title="Desenho detalhado" subtitle="Especificações e projetos estruturais"/>
            <CardProject Icon="Saiba mais" img={Imag} title="Desenho detalhado" subtitle="Especificações e projetos estruturais"/>
            <CardProject Icon="Saiba mais" img={Imag} title="Desenho detalhado" subtitle="Especificações e projetos estruturais"/>
            <CardProject Icon="Saiba mais" img={Imag} title="Desenho detalhado" subtitle="Especificações e projetos estruturais"/>
            <CardProject Icon="Saiba mais" img={Imag} title="Desenho detalhado" subtitle="Especificações e projetos estruturais"/>
            
        </div>
        </div>
        </>
    )
}