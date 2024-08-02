import Image from "next/image"

type ICardProps={
    title:string
    subtitle:string
    value:string
    className?:string
  }

export default function Segments(props:ICardProps){
    return(
        <div className="flex flex-col gap-5">
            <div>
              <Image src={props.value} width={2300} height={2000} alt="icon"/>
            </div>
            <div>
                <p>
                    {props.title}
                </p>
            </div>
        </div>
    )
}