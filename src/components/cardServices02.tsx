
type ICardProps={
    title?: string
     number01?: string
    text01: string
}

export default function CardServices02(props:ICardProps){
    return(
        <>
         <div className="relative flex flex-col items-center justify-center w-[30rem] h-[22rem]  rounded-xl">
                <strong className="text-[5rem]">
                {props.number01}
                </strong>
            <h1 className="text-[1.3rem]">
                {props.title}
            </h1>
             <p className="text-[1.2rem]" >
                 {props.text01}
             </p>
             <div className="absolute z-[-10] bg-gray-100 w-[19rem] h-[19rem] rounded-full border-solid border-[.5rem] border-black">
             </div>
         </div>
        </>
    )
}