import CardContact from "@/components/cardContact";
import H1 from "@/components/h1";
import Input from "@/components/input";
import { FaPhone } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { SiWhatsapp } from "react-icons/si";





export default function Contact(){
    return(
    <>
      <div className="flex flex-col w-[30%] items-center gap-10 min-h-[110vh]">
      <H1 className="text-gray-300 text-center"> ONDE NOS ENCONTRAR: </H1>

      <div className="flex flex-col gap-10">
      <CardContact title="+55 47 98849-6355" Icon={<FaPhone/>}/>
      <CardContact title="+55 47 3326-5023" Icon={<SiWhatsapp/>}/>
      <CardContact title="contato@neoplan.com.br" Icon={<MdOutlineMailOutline/>}/>
      <CardContact title="NEOplan Projetos Industriais Ltda" subtitle="Rua Doutor Amadeu da Luz, 100 | Sl 804Bairro Centro | BLUMENAU, SC | 89010-910" Icon={<MdLocationPin/>}/>
      </div>

      </div>

      
      <div className="flex flex-col gap-4 min-w-[22.5rem] md:w-[60%] md:min-h-[110vh]">
       <H1 className="text-gray-300 text-center">
        AGENDE SEU DIAGNÓSTICO GRATUITO!
        </H1>
      <div className="flex flex-col gap-10 w-[100%]">
      
      <form action="" className="flex w-[100%] items-center flex-col py-10 gap-6">
        
        <div className=" flex gap-5 w-[80%]">
          <Input type="text" className="w-[50%]" palceHolder="Nome*"/>
          <Input type="text" className="w-[50%]" palceHolder="Empresa*"/>
        </div>
        <Input type="email" className="w-[80%]" palceHolder="E-mail*"/>
        <textarea name="" placeholder="Mensagem:" className="w-[80%] rounded-md" rows={8} id=""></textarea>
        <Input type="btn" palceHolder="Faça seu diagnóstico!!!" className="hover:bg-gray-900 text-center rounded-md cursor-pointer text-gray-100 bg-blue-950 "/>
       
      </form>
      </div>
      </div>
      
    </>
    )
}