import Imag from "../../../images/GRAMSA01.jpg";
import Imag04 from "../../../images/gramsa Ludmila.jpeg";
import Imag02 from "../../../images/GRAMSA06.png";
import Imag03 from "../../../images/GRAMSA05.png";
import CardAbout from "@/components/cardAbout";
import CardAbout02 from "@/components/cardAbout02";
import Wallpaper from "@/components/wallpaper";
import H1 from "@/components/h1";

export default function About() {
    return (
        <>
            <Wallpaper imag={Imag04} />
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center justify-center min-h-screen pt-10 pb-20 text-black px-4">
                <div className="w-full flex flex-col items-center lg:w-1/2">
                    <h1 className="text-2xl text-blue-400 text-center mb-5">
                        <strong>Quem somos</strong>
                    </h1>
                    <p className="mb-4 w-[90%]">
                        Somos uma empresa com mais de 20 anos de experiência no desenvolvimento de projetos integrais (multidisciplinares). Esta experiência é baseada exclusivamente na capacidade de identificar e entender que cada projeto é único e precisa de um plano de trabalho específico.
                    </p>
                    <p className="w-[90%]">
                        Como política da empresa, estabelecemos que a qualidade dos nossos serviços sempre irá exceder as exigências dos nossos clientes, ajudando assim a definir os objetivos e metas de cada um dos seus projetos.
                    </p>
                </div>
                <div className="w-full lg:w-3/4">
                <div  className="embed-responsive embed-responsive-21by9 relative w-full overflow-hidden" style={{paddingTop: "42.857143%"}}>
                   <iframe
                     className="embed-responsive-item absolute bottom-0 left-0 right-0 top-0 h-full w-[80%]"
                     src="https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1&amp;origin=https%3A%2F%2Fmdbootstrap.com"
                     allowFullScreen
                     data-gtm-yt-inspected-2340190_699="true"
                     id="240632615"></iframe>
                 </div>
                </div>
            </div>

            <CardAbout
                text1="Ser reconhecido como líder na prestação de serviços de Consultoria, Supervisão e Controle de Qualidade, Projetos e Engenharia no campo das atividades de Infraestrutura, Indústria, Energia, Mineração e Petróleo, em aplicação de gestão responsável em sua relação com clientes, fornecedores e colaboradores."
                imag={Imag}
                title="Visão e Valores"
            />

            <CardAbout02
                text1="Desenvolver com nossas atividades uma gestão que ofereça soluções tecnológicas baseadas em um tratamento de confiança, competitividade e rentabilidade na prestação de serviços, com uma engenharia cuidando do meio ambiente, cumprindo com as normas de segurança e saúde ocupacional, propiciando um desenvolvimento sustentável em todos os processos no campo da Infraestrutura, Indústria, Energia, Mineração, Gás e Petróleo."
                imag={Imag02}
                title="Missão"
            />

            <CardAbout
                text1="Sabemos que ao escolher uma empresa para o desenvolvimento de seu projeto, você encontrará várias alternativas que parecerão semelhantes às nossas. Por isso, expomos aqui as razões para escolher a GRAMSA, para que você possa entender que elas podem ser semelhantes, mas não iguais."
                imag={Imag03}
                title="Por que a Gramsa?"
            />

            <section className="flex flex-col items-center text-black gap-5 pt-10 pb-20 w-full lg:w-3/4 mx-auto">
                <h1 className="text-3xl text-blue-400 text-center">
                    <strong>Por que a GRAMSA?</strong>
                </h1>
                <p className="text-center mb-4 w-[90%]">
                    Sabemos que ao escolher uma empresa para o desenvolvimento de seu projeto, você encontrará várias alternativas que parecerão semelhantes às nossas. Por isso, expomos aqui as razões para escolher a GRAMSA, para que você possa entender que elas podem ser semelhantes, mas não iguais.
                </p>
                <ul className="list-disc list-inside mb-4 w-[80%] sm:w-[90%]">
                    <li>Mais de 20 anos de experiência com crescimento exponencial e sustentável.</li>
                    <li>Desenvolvimento de projetos em sua totalidade por nossa equipe, sem depender de terceiros.</li>
                    <li>Capacidade de avaliar seu projeto e ajustá-lo perfeitamente às suas necessidades.</li>
                    <li>Cumprimento dos prazos acordados com qualidade, suporte e garantia permanente em todos os nossos serviços.</li>
                    <li>Serviço integral e multidisciplinar em todas as etapas do projeto.</li>
                    <li>Preço competitivo e construção de relações de confiança a longo prazo com nossos clientes.</li>
                </ul>
                <p className="text-center mb-4 w-[90%]">
                    Desde 2000, a GRAMSA vem formando uma rede de profissionais especialistas em todas as filiais da América do Sul que trabalham em equipe para fornecer soluções inteligentes para cada um de nossos clientes.
                </p>
                <H1 className="text-2xl text-blue-400 w-full text-center">
                    No Brasil:
                </H1>
                <p className="text-center w-[90%]">
                    Desde 2012, a GRAMSA tem expandido seus projetos e filiais no Brasil, formando uma rede de profissionais especialistas em várias regiões que trabalham em equipe para fornecer soluções inteligentes para cada um de nossos clientes.
                </p>
                <p className="text-center w-[90%]">
                    Gestão de construção, administrativa, contratos, planejamento, controle, supervisão de construção, segurança e logística de suprimentos. Especialistas em gestão de projetos integrais em infraestrutura, indústria, mineração, gás e petróleo.
                </p>
            </section>
        </>
    );
}
