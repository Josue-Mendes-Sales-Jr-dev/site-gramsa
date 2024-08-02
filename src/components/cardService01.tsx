
import Image from "next/image"
import H1 from "./h1"
import Link from "next/link"
interface ICardProps{
    img?:any
}

export default function CardService01(props:ICardProps){
    return(
        <>
        <div className="rounded-sm w-[95%] h-[22rem] shadow-3xl">
                <Image src={props.img} className="rounded-sm w-[100%] h-[80%] hover:scale-110 transition-transform duration-500" width={500} height={500} alt="13"/>
                 <div className="w-[100%] h-[20%] bg-blue-950 opacity-90">
                  <div className="flex flex-col items-center justify-center w-[95%] h-[90%]">
              
                    <div className=" flex items-center justify-between w-[100%]">
                       <div className="w-[60%] flex flex-col items-center">
                          <H1 className="text-[1rem] py-[.25rem] w-[85%] text-gray-300">
                          Engenharia de barragem
                          </H1>
                          <p className="text-white text-[.75rem] w-[85%]">
                           Topografia, Equipamentos
                          </p>
                       </div>
                       <Link href="/" className=" px-4 py-1 rounded-lg text-[.8rem] text-gray-200"> 
                         Saiba mais...
                       </Link>
                    </div>
                    
                    
                  </div>
                 </div>
               </div>
        </>
    )
}