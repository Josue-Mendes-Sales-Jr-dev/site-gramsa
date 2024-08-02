import Image from "next/image"
import Link from "next/link"
import Imag from "../../images/s4.jpg"

export default function About(){
    return(
        <>
        <div className="flex  justify-center flex-wrap gap-10 items-center w-[100vw] lg:h-[80vh] p-10">
            
            <div className="w-[100vw] lg:w-1/2 flex flex-col gap-10 items-center">
                <h1 className="strong text-3xl w-[70%]">
                    About us.
                </h1>
                <div className="w-[70%] flex flex-col gap-3">
                <p className="w-[100%]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic debitis, itaque beatae nostrum magni est natus molestiae voluptas quasi! Quae eius quidem deleniti rem libero explicabo officiis quos sint rerum.
                </p>
                <p className="w-[100%]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic debitis, itaque beatae nostrum magni est natus molestiae voluptas quasi! Quae eius quidem deleniti rem libero explicabo officiis quos sint rerum.
                </p>
                </div>
                <div className="w-[70%]">
                <Link href="/contact" className="px-8 py-3 bg-blueGray-800 text-white rounded-xl hover:text-white hover:bg-blue-950">
                    Talk with us
                </Link>
                </div>
            </div>
               <Image className="w-[80%] lg:w-[40%] bg-blue-400" width={1300} height={2000} alt="obra" src={Imag} />
        </div>
        </>
    )
}