import CardContact from "@/components/cardContact";
import H1 from "@/components/h1";
import Input from "@/components/input";
import { FaPhone } from "react-icons/fa";
import { MdLocationPin, MdOutlineMailOutline } from "react-icons/md";
import { SiWhatsapp } from "react-icons/si";

export default function Contact() {
    return (
        <div className="flex flex-col gap-20 min-h-screen py-10 px-4">
            {/* Contact Information Section */}
            <div className="flex flex-col items-center gap-10 w-full md:w-1/3 mx-auto">
                <H1 className="text-gray-300 text-center">ONDE NOS ENCONTRAR:</H1>
                <div className="flex flex-col gap-6 w-full">
                    <CardContact title="+55 47 98849-6355" Icon={<FaPhone />} />
                    <CardContact title="+55 47 3326-5023" Icon={<SiWhatsapp />} />
                    <CardContact title="contato@neoplan.com.br" Icon={<MdOutlineMailOutline />} />
                    <CardContact
                        title="NEOplan Projetos Industriais Ltda"
                        subtitle="Rua Doutor Amadeu da Luz, 100 | Sl 804Bairro Centro | BLUMENAU, SC | 89010-910"
                        Icon={<MdLocationPin />}
                    />
                </div>
            </div>

            {/* Contact Form Section */}
            <div className="flex flex-col gap-10 w-full md:w-2/3 mx-auto">
                <H1 className="text-gray-300 text-center">AGENDE SEU DIAGNÓSTICO GRATUITO!</H1>
                <form action="" className="flex flex-col gap-6 w-full">
                    <div className="flex flex-col md:flex-row gap-6 w-full">
                        <Input type="text" className="w-full md:w-1/2" palceHolder="Nome*" />
                        <Input type="text" className="w-full md:w-1/2" palceHolder="Empresa*" />
                    </div>
                    <Input type="email" className="w-full" palceHolder="E-mail*" />
                    <textarea
                        name="message"
                        placeholder="Mensagem:"
                        className="w-full rounded-md border-gray-300 p-2"
                        rows={8}
                    ></textarea>
                    <Input
                        type="submit"
                        className="bg-blue-950 hover:bg-blue-800 text-white text-center rounded-md cursor-pointer py-2"
                        value="Faça seu diagnóstico!!!"
                    />
                </form>
            </div>
        </div>
    );
}
