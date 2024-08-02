import Image from "next/image";
import Title from "./text";

type WallpaperServiceProps = {
    imag: any; // Alterado para string, pois é o tipo esperado para o src da imagem
};

export default function WallpaperService({ imag }: WallpaperServiceProps) {
    return (
        <section className="relative flex items-center justify-center w-full h-screen bg-blue-500">
            {/* Overlay to darken the image */}
            <div className="absolute inset-0 bg-black opacity-30 z-20"></div>

            {/* Background image */}
            <Image
                src={imag}
                width={2800}
                height={2000}
                className="w-full h-full object-cover" // Alterado para object-cover para melhor ajuste da imagem
                alt="Wallpaper"
            />

            {/* Title component */}
            <Title
                className="absolute w-4/5 h-1/3 z-30 text-center" // Usando w-4/5 e h-1/3 para responsividade e melhor ajuste
                Text1="Gramsa"
                text2="Nós transformamos seus sonhos em realidade"
                text3="Consultoria, modelagens, estudo de viabilidade."
                classNameP="text-blue-900"
            />
        </section>
    );
}
