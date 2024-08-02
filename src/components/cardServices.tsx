import Image from "next/image";
import H1 from "./h1";

type CardServiceProps={
 className?: string;
 text1?: string
 imag?: any|never

}

export const CardServices=(props:CardServiceProps)=>{
    return(
        <>
        <div className={`${props.className} flex gap-5 flex-col items-center justify-center min-w-[24rem] h-[22.5rem] border border-t-2 border-white`}>
          <Image className="w-[5rem] h-[5rem] transition-transform hover:scale-150 ease-in-out duration-300 rounded-full" src={props.imag} width={300} height={400} alt="imagem"/>
          <H1 className="text-[2rem] text-gray-400">
            {props.text1}
          </H1>
        </div>
        </>
    )
}