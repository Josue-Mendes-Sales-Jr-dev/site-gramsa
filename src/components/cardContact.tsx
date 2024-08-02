
type ICardProps ={
    Icon?: any|never
    title?: string
    subtitle?: string
}

export default function CardContact(props:ICardProps){
    return(
        <>
         <div className="flex flex-col items-center justify-center gap-1 w-[20.5rem] min-h-[6.5rem] py-4 bg-gray-200 rounded-xl">
            <div className="h-[15%]">
            </div> 
            <h1 className="flex gap-3 items-center justify-center">
           <span className="text-[2rem]">
            {props.Icon}
           </span>
            <strong>
            {props.title}
            </strong> 
            </h1>
             <p className="w-[80%] h-[50%] text-center text-[.8rem]">
                 {props.subtitle}
             </p>
         </div>
        </>
    )
}