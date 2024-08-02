'use client'

import WallpaperService from "@/components/wallpaperService";
import Imag from '../../../images/mina.jpg'
import Imag01 from '../../../images/mina3.jpg'
import Imag02 from '../../../images/ludmila03.jpeg'
import Imag03 from '../../../images/ludmila04.jpeg'
import Imag04 from '../../../images/jun01.jpeg'
import Imag05 from '../../../images/jun02.jpeg'
import Imag06 from '../../../images/gramsa rubens.jpeg'
import Imag07 from '../../../images/mina4.avif'
import Imag08 from '../../../images/m1.jpg'
import H1 from "@/components/h1";
import { CardServices } from "@/components/cardServices";
import CardServices02 from "@/components/cardServices02";
import { CardProjects } from "@/components/cardProjects";
import Image from "next/image";
import dynamic from 'next/dynamic';
import CardService01 from "@/components/cardService01";
import ProgressOficial from "@/components/progressOficial";
import Link from "next/link";
import CardDate from "@/components/cardDate";


const Map = dynamic(() => import('../../components/map'), { ssr: false });

const data=[
    {nome: "Maria korsgaard",
      icon:"https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg",
     subtitle: "Aux. de Engenharia Mecânica"
    },
    {
      nome: "Maren Calzoni",
      icon:"https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg",
     subtitle: "Engenharia Civil"
    },{
      nome: "Davis korsgaard",
      icon:"https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg",
     subtitle: "Aux. de Engenharia Civil"
    },
    {nome: "Maria korsgaard",
      icon:"https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg",
     subtitle: "Aux. de Engenharia Mecânica"
    },
    {
      nome: "Maren Calzoni",
      icon:"https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg",
     subtitle: "Engenharia Civil"
    },{
      nome: "Davis korsgaard",
      icon:"https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg",
     subtitle: "Aux. de Engenharia Civil"
    },
    {
      nome: "Maren Calzoni",
      icon:"https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg",
     subtitle: "Engenharia Civil"
    },{
      nome: "Davis korsgaard",
      icon:"https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg",
     subtitle: "Aux. de Engenharia Civil"
    },
  ]
  
var imagens=[
    {img:"Imag"},
    {img:"Imag01"},
    {img:"Imag02"},
    {img:"Imag03"},
    {img:"Imag04"},
    {img:"Imag05"},
    {img:"Imag06"},
    {img:"Imag07"},
    {img:"Imag08"},
]
export default function Services(){
   
     


    return(
        <>
        <WallpaperService imag={Imag}/>
        <section className="flex flex-col gap-5 items-center justify-center w-[100vw] min-h-[100vh] py-[4rem]">
            <div className="pb-5">
             <H1 className="text-center text-[1.8rem] md:text-[2.5rem] text-blue-400">
               O que você procura está aqui. 
             </H1>
             <p className="text-center text-black text-[1rem] md:text-[1.4rwm]">
               Como a GRAMSA pode lhe ajudar a resolver os seus problemas?
             </p>
           </div>
           <div className="flex gap-5 md:gap-0 flex-wrap items-center justify-center w-[100%] min-h-[22.5rem]">
             <CardServices className="bg-gray-950" imag={Imag} text1="Construção"/>
             <CardServices className="bg-blue-950" imag={Imag} text1="Reformar"/>
             <CardServices className="bg-gray-950" imag={Imag} text1="Regularização"/>
             <CardServices className="bg-blue-950" imag={Imag} text1="Consultoria"/>
           </div>
           <section className="relative w-[100vw] min-h-[70vh] flex flex-col md:flex-row items-center justify-center bg-gray-950">
            <div className="absolute top-0 w-[100%] h-[100%] z-[10]">
             <Image src={Imag01} className="rounded-sm object-fill w-[100%] h-[100%] opacity-70" width={400} height={400} alt="11"/>
            </div>
             <div className="flex flex-col items-center justify-center">
             <ProgressOficial active={40} />
             <H1 className="text-[1.5rem] text-gray-300">
                Progresso
             </H1>
             </div>
             <div className="absolute flex flex-col items-center justify-center">
             <ProgressOficial active={60} />
             <H1 className="text-[1.5rem] text-gray-300">
                Progresso
             </H1>
             </div>
             <div className="flex flex-col items-center justify-center">
             <ProgressOficial active={40} />
             <H1 className="text-[1.5rem] text-gray-300">
                Progresso
             </H1>
             </div>
          
            </section>
        </section>
      
        <section className="flex flex-col text-white bg-blue-950 items-center py-20 mt-[10rem] gap-10 w-[100vw] min-h-[100vh]">
            <H1 className="text-[3rem]">
                Nosso Blog
            </H1>
            <div className="flex flex-wrap gap-10 items-center justify-center ">
                 <CardProjects 
                 text="A decoração de espaços pequenos requer criatividade e planejamento estratégico para maximizar o espaço limitado. Móveis funcionais e..."
                 title="Design em espaços pequenos: Estilo e funcionalidade"
                 Imag={Imag}
                 textDate="25 de junho de 2024"/>
                 <CardProjects 
                 text="A decoração de espaços pequenos requer criatividade e planejamento estratégico para maximizar o espaço limitado. Móveis funcionais e..."
                 title="Design em espaços pequenos: Estilo e funcionalidade"
                 Imag={Imag05}
                 textDate="25 de junho de 2024"/>
                 <CardProjects 
                 text="A decoração de espaços pequenos requer criatividade e planejamento estratégico para maximizar o espaço limitado. Móveis funcionais e..."
                 title="Design em espaços pequenos: Estilo e funcionalidade"
                 Imag={Imag02}
                 textDate="25 de junho de 2024"/>
            </div>
        </section>
        <section className="flex flex-col gap-5  py-20 mb-20 ">
            <H1 className="text-center text-[3rem] text-blue-400">
                Nossos Serviços
            </H1>
        <div className="w-[100vw] items-center justify-around min-h-[120vh] p-10 grid gap-10 grid-rows-3 sm:grid-cols-2 lg:grid-cols-3">
        
               <CardService01 img={Imag03}/>
               <CardService01 img={Imag01}/>
               <CardService01 img={Imag02}/>
               <CardService01 img={Imag03}/>
               <CardService01 img={Imag04}/>
               <CardService01 img={Imag05}/>
               <CardService01 img={Imag06}/>
               <CardService01 img={Imag07}/>
               <CardService01 img={Imag08}/>
    
         </div>
         <div className="w-[100vw] flex items-center justify-center   text-[2.2rem]">
         <Link href="/contact" className="py-4 md:py-5 text-center text-gray-200 px-10 md:px-20 pr-5 bg-blue-950 hover:bg-slate-800 rounded-2xl">
            Quero saber mais!
         </Link>
         </div>
         </section>
         <section className="mb-20 flex items-center justify-center flex-wrap gap-10 w-[100vw] py-10 bg-gray-200">
          <h1 className="w-[80%] text-[2rem] text-center lg:text-[3rem] text-gray-800 pt-10">
            <strong className=" py-3 text-gray-800">
             Conheça meu time
            </strong>
          </h1>
          <ul className="flex items-center justify-center flex-wrap gap-10 w-[90vw] py-20 lg:py-0 lg:p-10">
          {data.map((date)=>(
            <li key={date.nome}>
                <CardDate name={date.nome} subtitle={date.subtitle} Icon={date.icon} />
            </li>
          ))}
          </ul>
         </section>

        <section className="relative flex items-center justify-around w-[100vw] h-[22vh] mb-20 bg-blue-950">
           <div className="absolute z-[-10] bg-blue-950 opacity-90 top-0 w-[100%] h-[100%]">

           </div>
           <p className=" text-gray-200 w-[50%] text-[.8rem] md:text-[1.2rem] ">   
               Nós realizamos consultorias e serviços em Engenharia Civil e Arquitetura com o propósito de 
                O que podemos fazer para lhe ajudar?
            </p>
            <Link href="/contact" className="px-5 py-4 md:py-10 md:px-10 bg-blue-800 hover:bg-blue-900 rounded-lg text-gray-200">
                Fale conosco !
            </Link>
        </section>
           <Map/>
           
        </>
    )
}