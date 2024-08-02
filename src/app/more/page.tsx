import H1 from "@/components/h1";
import Image from "next/image";
import Imag from "../../../images/gramsa rubens.jpeg";

type ChildProps = {
    title: string;
};

export default function More({ title }: ChildProps) {
    return (
        <div className="flex flex-col gap-20 items-center mt-20 sm:mt-5">
            <H1 className="text-center text-white text-2xl border-b-4 border-solid w-full sm:w-[20vw]">
                Inovação
            </H1>
            <div className="flex flex-col lg:flex-row items-center justify-center w-full min-h-screen">
                <div className="flex flex-col items-center justify-center w-full sm:w-[50%] bg-white py-10 rounded-tl-[3rem] min-h-[70vh]">
                    <H1 className="text-blue-400 text-2xl">{title}</H1>
                    <div className="w-4/5 text-center text-black flex flex-col items-center gap-4">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et recusandae impedit natus dicta laborum quidem adipisci, animi in! Rerum, enim voluptatum! A tempora inventore et sint pariatur asperiores iste ut!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et recusandae impedit natus dicta laborum quidem adipisci, animi in! Rerum, enim voluptatum! A tempora inventore et sint pariatur asperiores iste ut!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et recusandae impedit natus dicta laborum quidem adipisci, animi in! Rerum, enim voluptatum! A tempora inventore et sint pariatur asperiores iste ut!
                        </p>
                    </div>
                </div>
                <div className="w-full sm:w-[50%] h-[70vh] flex items-center justify-center">
                    <Image 
                        src={Imag} 
                        className="rounded-br-[3rem] object-cover" 
                        width={500} 
                        height={500} 
                        alt="Imagem de Inovação" 
                    />
                </div>
            </div>
            <div className="w-full flex flex-col items-center gap-10 pb-20">
                <H1 className="text-blue-400 text-2xl">GRAMSA</H1>
                <div className="w-4/5 lg:w-[80%] text-white columns-1 sm:columns-2 lg:columns-3 gap-4 text-center">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et recusandae impedit natus dicta laborum quidem adipisci, animi in! Rerum, enim voluptatum! A tempora inventore et sint pariatur asperiores iste ut!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et recusandae impedit natus dicta laborum quidem adipisci, animi in! Rerum, enim voluptatum! A tempora inventore et sint pariatur asperiores iste ut!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et recusandae impedit natus dicta laborum quidem adipisci, animi in! Rerum, enim voluptatum! A tempora inventore et sint pariatur asperiores iste ut!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et recusandae impedit natus dicta laborum quidem adipisci, animi in! Rerum, enim voluptatum! A tempora inventore et sint pariatur asperiores iste ut!
                    </p>
                </div>
            </div>
        </div>
    );
}
