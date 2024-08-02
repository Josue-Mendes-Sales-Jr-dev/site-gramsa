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
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 text-center z-30"
            />
        </section>
    );
}
