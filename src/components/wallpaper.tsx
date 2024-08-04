import Image, { StaticImageData } from "next/image";
import Title from "./text";

type WallpaperProps = {
    imag: StaticImageData; // Use StaticImageData for better type safety with Next.js images
};

export default function Wallpaper({ imag }: WallpaperProps) {
    return (
        <section className="relative flex items-center justify-center w-full h-screen bg-blue-500">
            <div className="absolute inset-0 z-20 bg-black opacity-30" />
            <Image 
                src={imag} 
                width={2800} 
                height={2000} 
                className="w-full h-full object-cover" 
                alt="wallpaper"
            />
            <Title
                Text1="Engineering Solution"
                text2="For Industrial Assets"
                text3="Lifecycle Management"
                className="absolute text-[4rem] transform  w-4/5 text-center z-30 left-6 sm:left-[10rem] top-[14rem] sm:top-[18rem]"
            />
        </section>
    );
}
