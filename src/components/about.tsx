import Image from "next/image";
import Link from "next/link";
import Imag from "../../images/s4.jpg";

export default function About() {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 p-10 w-full lg:h-[80vh]">
            <div className="flex flex-col gap-10 items-center w-full lg:w-1/2">
                <h1 className="text-3xl font-bold text-center w-[70%]">
                    About Us
                </h1>
                <div className="w-[70%] flex flex-col gap-3">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic debitis, itaque beatae nostrum magni est natus molestiae voluptas quasi! Quae eius quidem deleniti rem libero explicabo officiis quos sint rerum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic debitis, itaque beatae nostrum magni est natus molestiae voluptas quasi! Quae eius quidem deleniti rem libero explicabo officiis quos sint rerum.
                    </p>
                </div>
                <Link href="/contact" className="px-8 py-3 bg-blue-800 text-white rounded-xl hover:bg-blue-950">
                        Talk with Us
                </Link>
            </div>
            <Image
                className="w-[80%] lg:w-[40%] rounded-lg"
                width={1300}
                height={2000}
                alt="obra"
                src={Imag}
            />
        </div>
    );
}
