import H1 from "@/components/h1"
import Image from "next/image"
import Imag from "../../../images/gramsa rubens.jpeg"

type ChildProps = {
    title: string

}

export default function Child(props:ChildProps){
    return(
        <>
        <H1 className="w-[20vw] mt-20 text-center text-white text-[2rem] border-solid border-b-4">
                Inovação
         </H1>
        <div className="flex flex-wrap items-center justify-center gap-5 min-h-[100vh] w-[100vw]">
             <div className="lg:w-[45%] h-[100vh] flex items-center justify-center ">
                <Image src={Imag} className="w-[90%] lg:w-[80%] h-[90%] lg:h-[70%] rounded-tl-[3rem] rounded-br-[3rem]" width={500} height={500} alt="imagem"/>
             </div>
            <div className="lg:w-[45%] flex flex-col items-center gap-5">
              <H1 className="text-blue-400 text-[2rem]">
                {props.title}
              </H1>
              <div className="w-[80%] text-center text-white flex flex-col items-center gap-4">
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et recusandae impedit natus dicta laborum quidem adipisci, animi in! Rerum, enim voluptatum! A tempora inventore et sint pariatur asperiores iste ut!
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et recusandae impedit natus dicta laborum quidem adipisci, animi in! Rerum, enim voluptatum! A tempora inventore et sint pariatur asperiores iste ut!
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et recusandae impedit natus dicta laborum quidem adipisci, animi in! Rerum, enim voluptatum! A tempora inventore et sint pariatur asperiores iste ut!
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et recusandae impedit natus dicta laborum quidem adipisci, animi in! Rerum, enim voluptatum! A tempora inventore et sint pariatur asperiores iste ut!
                </p>
              </div>
            </div>
        
        </div>
        <div className="w-[100vw] flex flex-col items-center gap-10 pb-20">
              <H1 className="text-blue-400 text-[2rem]">
                GRAMSA
              </H1>
              <div className="w-[80%]  text-white sm:columns-2 lg:columns-3">
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et recusandae impedit natus dicta laborum quidem adipisci, animi in! Rerum, enim voluptatum! A tempora inventore et sint pariatur asperiores iste ut!
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et recusandae impedit natus dicta laborum quidem adipisci, animi in! Rerum, enim voluptatum! A tempora inventore et sint pariatur asperiores iste ut!
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et recusandae impedit natus dicta laborum quidem adipisci, animi in! Rerum, enim voluptatum! A tempora inventore et sint pariatur asperiores iste ut!
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et recusandae impedit natus dicta laborum quidem adipisci, animi in! Rerum, enim voluptatum! A tempora inventore et sint pariatur asperiores iste ut!
                </p>
              </div>
            </div>
        </>
    )
}