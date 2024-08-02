import Image from "next/image"
import Title from "./text"

type WallpaperServiceProps={
 imag: any 
}

export default function WallpaperService(props:WallpaperServiceProps){
    return(
        <>
        <section className="relative object-scale-down flex items-center justify-center w-[100vw] h-[100vh] bg-blue-500">
        <div className="top-0 absolute z-20 w-[100%] h-[100%] bg-black opacity-30">
        </div>
        <Image src={props.imag} width={2800} height={2000} className="w-[100%] h-[100%] object-fill"  alt="wallpaper"/>
        <Title className={`absolute w-[80%] h-[30%] z-30`} Text1={"Gramsa"} text2={"nós transformos seus sonhos em realidade"} text3={"Consultoria, modelagens, estudo de viabilidade."} classNameP="text-blue-900"/>
      </section>
        </>
    )
}