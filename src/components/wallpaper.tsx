import Image from "next/image"
import Title from "./title"

interface WallpaperProps{
 imag: any 
}

export default function Wallpaper(props:WallpaperProps){
    return(
        <>
        <section className="relative  flex items-center justify-center w-[100vw] h-[100vh] bg-blue-500">
        <div className="top-0 absolute z-20 w-[100%] h-[100%] bg-black opacity-30">
        </div>
        <Image src={props.imag} width={2800} height={2000} className="w-[100%] h-[100%] object-cover"  alt="wallpaper"/>
        <Title
        Text1="Engineering solution"
        text2="for industrialasset" 
        text3="lifecycle management."
        className={`absolute w-[80%] h-[30%] z-30 top-[22rem]`}/>
      </section>
        </>
    )
}