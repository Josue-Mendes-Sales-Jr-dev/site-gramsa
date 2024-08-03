'use client';

import WallpaperService from "@/components/wallpaperService";
import Image from "next/image";
import dynamic from 'next/dynamic';
import Link from "next/link";

import H1 from "@/components/h1";
import { CardServices } from "@/components/cardServices";
import CardServices02 from "@/components/cardServices02";
import { CardProjects } from "@/components/cardProjects";
import CardService01 from "@/components/cardService01";
import ProgressOficial from "@/components/progressOficial";
import CardDate from "@/components/cardDate";

const Map = dynamic(() => import('../../components/map'), { ssr: false });

// Imagens
import Imag from '../../../images/mina.jpg';
import Imag01 from '../../../images/mina3.jpg';
import Imag02 from '../../../images/ludmila03.jpeg';
import Imag03 from '../../../images/ludmila04.jpeg';
import Imag04 from '../../../images/jun01.jpeg';
import Imag05 from '../../../images/jun02.jpeg';
import Imag06 from '../../../images/gramsa rubens.jpeg';
import Imag07 from '../../../images/mina4.avif';
import Imag08 from '../../../images/m1.jpg';
import ProgressBar from "@/components/progressBar";
import CircularProgressBar from "@/components/CircularProgressBar";
import ProgressNumber from "@/components/progressBar";

// Dados
const teamData = [
  { nome: "Maria Korsgaard", icon: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg", subtitle: "Aux. de Engenharia Mecânica" },
  { nome: "Maren Calzoni", icon: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg", subtitle: "Engenharia Civil" },
  { nome: "Davis Korsgaard", icon: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg", subtitle: "Aux. de Engenharia Civil" },
  { nome: "Maren Calzoni", icon: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg", subtitle: "Engenharia Civil" },
];

// Componente principal
export default function Services() {
  return (
    <>
      <WallpaperService imag={Imag} />
      
      <section className="flex flex-col gap-5 items-center justify-center w-full min-h-screen py-16">
        <div className="pb-5 text-center">
          <H1 className="text-blue-400 text-2xl md:text-3xl">
            O que você procura está aqui.
          </H1>
          <p className="text-black text-base md:text-lg">
            Como a GRAMSA pode lhe ajudar a resolver os seus problemas?
          </p>
        </div>
        
        <div className="flex gap-2 flex-wrap items-center justify-center w-[100vw] min-h-[22.5rem]">
          <CardServices className="bg-gray-950 md:ml-[-1rem]" imag={Imag} text1="Construção" />
          <CardServices className="bg-blue-950" imag={Imag} text1="Reformar" />
          <CardServices className="bg-gray-950" imag={Imag} text1="Regularização" />
          <CardServices className="bg-blue-950" imag={Imag} text1="Consultoria" />
        </div>
        
        <section className="relative w-full min-h-[70vh] flex flex-col md:flex-row items-center justify-center bg-gray-950">
          <div className="absolute top-0 w-full h-full z-10">
            <Image src={Imag01} className="rounded-sm object-fill w-full h-full opacity-70" width={400} height={400} alt="Background" />
          </div>
          <div className="absolute z-[10] w-[90vw] flex flex-wrap gap-10 items-center justify-around">
          <div className=" flex flex-col items-center justify-center gap-3 md:gap-7">
           <ProgressNumber maxProgress={430}/>
           <H1 className="text-[1rem] md:text-[2rem] text-white">
            + Processos
           </H1>
           </div>
           <div className="flex flex-col items-center justify-center gap-3 md:gap-7">
           <ProgressNumber maxProgress={750}/>
           <H1 className="text-[1rem] md:text-[2rem] text-white">
            + Projeto 
           </H1>
           </div>
           <div className="flex flex-col items-center justify-center gap-3 md:gap-7">
           <ProgressNumber maxProgress={900}/>
           <H1 className="text-[1rem] md:text-[2rem] text-white">
            + Cafezinhos 
           </H1>
          </div>
         
          </div>
        </section>
      </section>
      
      <section className="flex flex-col text-white bg-blue-950 items-center py-20 mt-10 gap-10 w-full min-h-screen">
        <H1 className="text-3xl">Nosso Blog</H1>
        <div className="flex flex-wrap gap-10 items-center justify-center">
          <CardProjects
            text="A decoração de espaços pequenos requer criatividade e planejamento estratégico para maximizar o espaço limitado. Móveis funcionais e..."
            title="Design em espaços pequenos: Estilo e funcionalidade"
            Imag={Imag}
            textDate="25 de junho de 2024"
          />
          <CardProjects
            text="A decoração de espaços pequenos requer criatividade e planejamento estratégico para maximizar o espaço limitado. Móveis funcionais e..."
            title="Design em espaços pequenos: Estilo e funcionalidade"
            Imag={Imag05}
            textDate="25 de junho de 2024"
          />
          <CardProjects
            text="A decoração de espaços pequenos requer criatividade e planejamento estratégico para maximizar o espaço limitado. Móveis funcionais e..."
            title="Design em espaços pequenos: Estilo e funcionalidade"
            Imag={Imag02}
            textDate="25 de junho de 2024"
          />
        </div>
      </section>
      
      <section className="flex flex-col gap-5 py-20 mb-20">
        <H1 className="text-center text-3xl text-blue-400">Nossos Serviços</H1>
        <div className="w-full min-h-[120vh] p-10 grid gap-10 grid-rows-3 sm:grid-cols-2 lg:grid-cols-3">
          <CardService01 img={Imag03} />
          <CardService01 img={Imag01} />
          <CardService01 img={Imag02} />
          <CardService01 img={Imag03} />
          <CardService01 img={Imag04} />
          <CardService01 img={Imag05} />
          <CardService01 img={Imag06} />
          <CardService01 img={Imag07} />
          <CardService01 img={Imag08} />
        </div>
        
        <div className="flex items-center justify-center text-2xl">
          <Link href="/contact" className="py-4 md:py-5 px-10 md:px-20 bg-blue-950 text-gray-200 hover:bg-slate-800 rounded-2xl">
            Quero saber mais!
          </Link>
        </div>
      </section>
      
      <section className="mb-20 flex items-center justify-center flex-wrap gap-10 w-full py-10 bg-gray-200">
        <h1 className="w-4/5 text-2xl lg:text-3xl text-center text-gray-800 pt-10">
          <strong className="py-3">Conheça meu time</strong>
        </h1>
        <ul className="flex items-center justify-center flex-wrap gap-10 w-9/10 py-20 lg:py-0 lg:p-10">
          {teamData.map(({ nome, icon, subtitle }) => (
            <li key={nome}>
              <CardDate name={nome} subtitle={subtitle} Icon={icon} />
            </li>
          ))}
        </ul>
      </section>
      
      <section className="relative flex items-center justify-around w-full h-[22vh] mb-20 bg-blue-950">
        <div className="absolute z-[-10] bg-blue-950 opacity-90 top-0 w-full h-full" />
        <p className="text-gray-200 w-1/2 text-sm md:text-lg">
          Nós realizamos consultorias e serviços em Engenharia Civil e Arquitetura com o propósito de oferecer soluções personalizadas para as suas necessidades.
        </p>
        <Link href="/contact" className="px-5 py-4 md:py-10 md:px-10 bg-blue-800 hover:bg-blue-900 rounded-lg text-gray-200">
          Fale conosco!
        </Link>
      </section>
      
      <Map />
    </>
  );
}
