import Image from "next/image"
interface CardAboutPropos{
 text1:string
 text2?:string
 text3?:string
 imag:any
 title:string

}

export default function CardAbout(props:CardAboutPropos){
    return(
        <>
           <div className="w-[100%] min-h-[80vh] text-black flex flex-col md:flex-row flex-wrap items-center justify-center bg-gray-200">
             <div className="md:w-[50%]">
             <Image className="w-[100%] min-h-[80vh] fill" src={props.imag} width={1500} height={1000} alt="about" />
            </div>
            <div className="flex flex-col gap-2 items-center justify-center md:w-[50%] pb-10 md:pb-0">
             <h1 className="text-[2rem] text-blue-400">
                <strong>
                {props.title}
                </strong>
             </h1>
               <p className="w-[80%]">
                 {props.text1}
               </p>
                <p className="w-[80%]">
                {props.text2}               </p>
               <p className="w-[80%]">
               {props.text3}               </p>
             </div>
          </div>
        </>
    )
}