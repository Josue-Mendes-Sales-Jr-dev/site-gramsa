'use client';
import Card from "@/components/card";
import About from "@/components/about";
import { PiStarThin } from "react-icons/pi";
import Imag02 from "../../images/GRAMSA01.jpg";
import Imag03 from "../../images/GRAMSA02.jpg";
import Imag04 from "../../images/GRAMSA05.png";
import Carousel from "@/components/carousel";
import Testimonials from "@/components/testimonials";
import CardFlip from "@/components/cardFlip";

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col gap-2 items-center justify-between pb-10">
      <Carousel />
      <About />
      <section className="w-full p-7 flex flex-col items-center justify-center bg-gray-300">
        <h1 className="w-4/5 text-2xl py-10 lg:py-0 lg:text-3xl text-gray-800">
          <strong>Nossos Diferenciais</strong>
        </h1>
        <div className="flex items-center justify-center gap-10 lg:gap-4 flex-wrap w-full min-h-[75vh] py-10">
          <Card title="Excelência" subtitle="Trabalhos entregues dentro do prazo e com ótima experiência" img={Imag02}>
            <CardFlip textBack="Colaboração e solidariedade" textFront="Consultoria" />
          </Card>
          <Card title="Versionamento" subtitle="Trabalhos com alta compatibilidade" img={Imag04}>
            <CardFlip textBack="Colaboração e solidariedade" textFront="Qualidade de Entrega" />
          </Card>
          <Card title="Inovação" subtitle="Tecnologia de alto nível" img={Imag03}>
            <CardFlip textBack="Colaboração e solidariedade" textFront="Alto Impacto" />
          </Card>
          <Card title="Sucesso do Cliente" subtitle="Trabalhos com alta compatibilidade" img={Imag04}>
            <CardFlip textBack="Colaboração e solidariedade" textFront="Sucesso do Cliente" />
          </Card>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center">
        <h1 className="w-4/5 md:w-full text-2xl lg:text-3xl text-gray-800 pt-10">
          <strong className="w-full py-3">Opiniões de Clientes</strong>
          <div className="flex items-center gap-3 text-lg">
            <PiStarThin />
            <PiStarThin />
            <PiStarThin />
            <PiStarThin />
            <PiStarThin />
            <span className="text-gray-400">4.9 de 39 Avaliações</span>
          </div>
        </h1>
        <Testimonials />
      </section>
    </main>
  );
}
