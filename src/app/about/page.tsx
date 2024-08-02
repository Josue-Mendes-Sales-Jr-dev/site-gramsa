import Image from "next/image"
import Imag from "../../../images/GRAMSA01.jpg"
import Imag04 from "../../../images/gramsa Ludmila.jpeg"
import Imag02 from "../../../images/GRAMSA06.png"
import Imag03 from "../../../images/GRAMSA05.png"
import CardAbout from "@/components/cardAbout"
import CardAbout02 from "@/components/cardAbout02"
import Wallpaper from "@/components/wallpaper"
import H1 from "@/components/h1"
export default function About(){
    return(
        <>
          <Wallpaper imag={Imag04}/>
          <div className="md:w-[90%]  min-h-[80vh] text-black pt-[10rem] pb-[5rem] flex flex-col lg:flex-row flex-wrap items-center justify-around">
            <div className="w-[80%] md:w-[55%]">
              <h1 className="text-[2rem] text-blue-400 text-center pb-5 w-[80%]">
                <strong>
                Quem somos
                </strong>
              </h1>
              <p className="md:w-[90%]">
              Somos uma empresa com mais de 20 anos de experiência no desenvolvimento de projetos integrais. (multidisciplinar). Essa experiência é baseada exclusivamente na capacidade de identificar e entender que cada projeto é único e precisa de um plano de trabalho específico.</p>
              <p className="md:w-[90%]">
              Como Política da Empresa, estabelecemos que a Qualidade dos nossos serviços irá sempre exceder as exigências dos nossos Clientes, ajudando assim a definir os objetivos e metas em cada um dos seus Projetos.
                 </p>
             </div>
             <div className="md:w-[45%]">
               <iframe className="w-[100%] " width="560" height="315" src="https://www.youtube.com/embed/o_H05TTh2MY?si=AB5QzomwRzI_Y01x" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
             </div>
         </div>
         
         <CardAbout 
         text1="Ser reconhecido como líder na prestação de serviços de Consultoria, Supervisão e Controle de Qualidade, Projetos e Engenharia no campo das atividades de Infraestrutura, Indústria, Energia, Mineração e Petróleo, em aplicação de gestão responsável em sua relação com clientes, fornecedores e colaboradores."
          imag={Imag} 
          title={"Visão e Valores"}/>
         
         <CardAbout02 
         text1="Desenvolver com nossas atividades uma gestão que ofereça soluções tecnológicas baseadas em um tratamento de confiança, competitividade e rentabilidade na prestação de serviços, com uma engenharia cuidando do meio ambiente, cumprindo com  as normas de segurança e saúde ocupacional, propiciando um desenvolvimento sustentável, a todo tipo de processo no campo da Infraestrutura, Indústria Energia, Mineração,  Gás e Petróleo."
         imag={Imag02} 
         title={"Missão"}/>

          <CardAbout text1="Sabemos perfeitamente que ao escolher uma empresa para o desenvolvimento de seu projeto, você encontrará várias alternativas que parecerão semelhantes às nossas e é por isso que expomos aqui as razões para escolher GRAMSA, para que  você possa entender que elas podem ser semelhantes, mas não iguais."
          imag={Imag03} 
          title={"Por que a Gramsa?"}/>

          <section className="flex flex-col items-center text-black justify-center w-[70%] pt-10 pb-20 gap-5">
            <h1 className="text-[3rem] text-blue-400">
                <strong>
                 Por que a GRAMSA?
                </strong>
            </h1>
            <p>
            Sabemos perfeitamente que ao escolher uma empresa para o desenvolvimento de seu projeto, você encontrará várias alternativas que parecerão semelhantes às nossas e é por isso que expomos aqui as razões para escolher GRAMSA, para que  você possa entender que elas podem ser semelhantes, mas não iguais  </p>
            <ul typeof="square">
              <li>
              mais de 20 anos de experiência com crescimento exponencial e sustentável.
              </li>
              <li>
              Desenvolvimento de Projetos em sua totalidade por nossa equipe e NÃO dependemos de terceiros. 
              </li>
              <li>
              Temos a capacidade de avaliar seu projeto e o ajustar perfeitamente as suas necessidades.
              </li>
              <li>
              Cumprimos os prazos acordados com Qualidade, suporte e garantia permanente em todos nossos serviços. 
              </li>
              <li>
              Nosso serviço é integral e multidisciplinar em todas as etapas do projeto.  
              </li>
              <li>
              Temos preço competitivo. Construímos relações de confiança a longo prazo com cada um dos nossos clientes.
              </li>
            </ul>
             <p>
              Desde 2000, a Gramsa vem formando uma rede de Profissionais Especialistas em todas as filiais da América do Sul que trabalham em equipe para fornecer soluções inteligentes para cada um de nossos Clientes.
             </p>
             <H1 className="text-[2rem] w-[100%] text-blue-400">
               No Brasil:
             </H1>
            <p>
            Desde o ano de 2012 a GRAMSA vem expandindo em projetos e filias no Brasil, formando uma rede de Profissionais Especialistas em várias regiões que trabalham em equipe para fornecer soluções inteligentes para cada um de nossos Clientes.
            </p>
            <p>
            Gestão de construção, gestão Administrativa, gestão de contratos, gestão de Planejamento e Controle Supervisao de construcao Gestão de segurança Logística de Suprimentos ESPECIALISTAS EM GESTÃO DE PROJETOS INTEGRAIS Gestão deConstrução Barragem Mineração Taboca Manaos, Brasil Projeto Pitinga Mineração Taboca, BRASIL Gerenciamos com abrangência integral e multidisciplinar projetos de Infraestrutura, Indústrial, Mineração, Gás e Petróleo. Os serviços de Administração, Contratos, Construção, Segurança, Planejamento e Controle podem ser realizados de forma individual ou integrada. Gestão de qualidade o Serviço de Qualidade envolve a Garantia e Controle de Qualidade de projetos Civis, Mecânicos e Elétricos. Possuímos equipamentos e pessoal qualificado para ensaios de solo, agregados e concretos, ensaios hidráulicos (Tubulações), Gamagafria
            </p>
          </section>
        </>
    )
}