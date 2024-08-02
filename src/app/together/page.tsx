import H1 from "@/components/h1";
import Image from "next/image";
import Imag from "../../../images/gramsa rubens.jpeg";

type ChildProps = {
  title: string;
};

export default function Child({ title }: ChildProps) {
  return (
    <>
      <H1 className="w-1/5 mt-20 text-center text-white text-2xl border-b-4 border-solid">
        Inovação
      </H1>
      <div className="flex flex-wrap items-center justify-center gap-5 min-h-screen w-full">
        <div className="lg:w-1/2 h-screen flex items-center justify-center">
          <Image
            src={Imag}
            alt="Imagem ilustrativa"
            className="w-9/10 lg:w-4/5 h-9/10 lg:h-7/10 rounded-tl-xl rounded-br-xl"
            width={500}
            height={500}
          />
        </div>
        <div className="lg:w-1/2 flex flex-col items-center gap-5">
          <H1 className="text-blue-400 text-2xl">{title}</H1>
          <div className="w-4/5 text-center text-white flex flex-col items-center gap-4">
            {Array(4)
              .fill("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et recusandae impedit natus dicta laborum quidem adipisci, animi in! Rerum, enim voluptatum! A tempora inventore et sint pariatur asperiores iste ut!")
              .map((text, index) => (
                <p key={index}>{text}</p>
              ))}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center gap-10 pb-20">
        <H1 className="text-blue-400 text-2xl">GRAMSA</H1>
        <div className="w-4/5 text-white sm:columns-2 lg:columns-3">
          {Array(4)
            .fill("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et recusandae impedit natus dicta laborum quidem adipisci, animi in! Rerum, enim voluptatum! A tempora inventore et sint pariatur asperiores iste ut!")
            .map((text, index) => (
              <p key={index}>{text}</p>
            ))}
        </div>
      </div>
    </>
  );
}
