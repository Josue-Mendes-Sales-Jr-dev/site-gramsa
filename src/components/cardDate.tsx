import { ReactNode } from "react"

interface ICardProps{
    Icon?: any
    name?: string
    subtitle?: string
    date?: string
    avaliacao?: ReactNode 
}

export default function CardDate(props:ICardProps){
    return(
        <>
        
         <div className="mb-0 w-[16rem] flex flex-col items-center justify-center">
    <div className="mb-6 flex justify-center items-center ">
      <img
        src={props.Icon}
        className="w-32 rounded-full shadow-lg dark:shadow-black/30" />
    </div>
    <h5 className="mb-4 text-xl font-semibold">                 
        {props.name}
    </h5>
    <h6 className="mb-4 font-semibold text-primary dark:text-primary-400">
     {props.subtitle}
    </h6>
    <p className="mb-4 text-neutral-600 dark:text-neutral-300">
      
   
    </p>
 </div>
        </>
    )
}