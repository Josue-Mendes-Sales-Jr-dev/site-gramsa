
import Image from "next/image"

type ICardProps = {
    Icon?: any|never
    title?: string
    subtitle?: string
    img?:any|never
    children?:React.ReactNode
}

export default function Card(props:ICardProps){
    return(
        <>
 <div className="shadow-2xl relative flex-col bg-white min-w-[18rem] h-[23rem] rounded-3xl hover:shadow-2xl">
  <figure className="absolute z-[1] top-[-20px] flex items-center justify-center">
    <Image
      src={props.img}
      alt="Shoes"
      className="rounded-xl w-[90%] shadow-2xl" 
      width={500} height={500}/>
  </figure>
  <div className="absolute  flex w-[100%] gap-2 flex-col items-center justify-around top-[160px] card-body text-center pt-5 ">

    <div className="absolute top-7">
      {props.children}
    </div>
  </div>
</div>
        </>
    )
}