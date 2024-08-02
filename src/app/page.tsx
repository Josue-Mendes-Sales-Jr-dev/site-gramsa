'use client'
import Card from "@/components/card";
import About from "@/components/about";
import { PiStarThin } from "react-icons/pi";
import Imag02 from "../../images/GRAMSA01.jpg"
import Imag03 from "../../images/GRAMSA02.jpg"
import Imag04 from "../../images/GRAMSA05.png"
import Carousel from "@/components/carousel";
import Testimonials from "@/components/testimonials";
import CardFlip from "@/components/cardFlip";






export default function Home() {

  return (
    <>
    <main className="flex w-[100vw] min-h-screen flex-col gap-2 items-center justify-between pb-10">
      <Carousel/>
      <About/>
      <div className="w-[100vw] p-7 flex flex-col items-center justify-center bg-gray-300">
         <h1 className="w-[80%] text-[2rem] py-10 lg:py-0 lg:text-[3rem] text-gray-800">
          <strong>
           Nossos Diferenciais
          </strong>
         </h1>
         <section className="flex items-center justify-center gap-10 lg:gap-4  flex-wrap w-[100vw] min-h-[75vh] py-10" >       
              <Card title="Excelência" subtitle="Trabalhos entregues dentro do prazo e com ótima experiência" Icon="Saiba mais" img={Imag02}>
              <CardFlip textBack="Colaboração e solidariedade" textFront="Consutoria"/>
              </Card>
              <Card title="Versionamento" subtitle="Tabalhos com alta compatibilidade" Icon="Saiba mais" img={Imag04}>
              <CardFlip textBack="Colaboração e solidariedade" textFront="Qualidade de Entrega"/>
              </Card>
              <Card title="Inovação" subtitle="Tecnologia de alto nível" Icon="Saiba mais" img={Imag03}>
              <CardFlip textBack="Colaboração e solidariedade" textFront=" Alto Impacto"/>
              </Card>
              <Card title="Versionamento" subtitle="Tabalhos com alta compatibilidade" Icon="Saiba mais" img={Imag04}>
                <CardFlip textBack="Colaboração e solidariedade" textFront="Sucesso do Cliente"/>
              </Card>
         </section>
      </div>
      
      <div className="flex flex-col items-center justify-center">
          <h1 className="w-[80vw] md:w-[100%] text-[2rem] lg:text-[3rem] text-gray-800 pt-10">
            <strong className="w-[100%]  py-3 ">
            Opiniões De Clientes
            </strong>
            <div className="flex items-center gap-3 text-[1.2rem]">
            <PiStarThin />
            <PiStarThin />
            <PiStarThin />
            <PiStarThin />
            <PiStarThin />
            <span className="text-gray-400">4.9 rating of 39 Reviews</span>  
            </div>          
          </h1>
          <Testimonials/>
        </div>
    </main>
    </>
  );
}
