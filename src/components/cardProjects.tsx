import Image from "next/image"
import H1 from "./h1"
import Link from "next/link"

type CardProjectsProps = {
Imag: any|never
textDate: string
text: string
title: string
}
export const CardProjects=(props:CardProjectsProps)=>{
    return(
        <>
        <div className="bg-white text-blue-400 flex flex-col items-center justify-around gap-2  w-[22rem] h-[42.5rem] rounded-sm shadow-2xl">
           <div className="w-[100%] h-[50vh] bg-gray-700 rounded-sm overflow-hidden">
              <Image src={props.Imag} className="rounded-sm w-[100%] h-[100%] transition-transform hover:scale-110 ease-in-out duration-300" width={350} height={350} alt="11"/>
           </div>
           <H1 className="w-[85%] text-[1.2rem] h-[10vh] pt-5 mb-5">
            {props.title}
           </H1>
           <div className="w-[90%] gap-3 flex flex-col items-center justify-centerv h-[35vh]">
            <p className="w-[95%] text-[.8rem] text-gray-300">
             {props.textDate}
            </p>
            <p className="w-[95%] text-[1rem] text-black">
             {props.text}
             </p>
             
             <div className="w-[100%] pt-2">
               <Link href="/knowHow" className="bg-blue-950 ml-2 text-white py-2 px-10 rounded-2xl hover:bg-blue-800 hover:text-gray-200">
                Saiba mais
               </Link>
             </div>
           </div>
           
        </div>
        </>
    )
}