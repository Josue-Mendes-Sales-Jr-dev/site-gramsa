import Image from "next/image"

type CardAboutPropos ={
 text1:string
 text2?:string
 text3?:string
 imag:any|never
 title:string

}

export default function CardAbout02(props:CardAboutPropos){
    return(
        <>
           <div className="p-5 sm:p-0  gap-20 sm:gap-0 w-[100%] min-h-[80vh] text-black flex flex-wrap items-center justify-center bg-gray-100">
            <div className="flex flex-col gap-2 items-center justify-center  md:w-[50%] pb-10 md:pb-0">
             <h1 className="text-[2rem] text-blue-500">
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
             <div className="md:w-[50%] pb-10 md:pb-0">
             <Image className="w-[100%] sm:min-h-[80vh]" src={props.imag} width={1500} height={1000} alt="about" />
            </div>
          </div>
        </>
    )
}