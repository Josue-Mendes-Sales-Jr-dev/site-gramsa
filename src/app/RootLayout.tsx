"use client"
import { Inter } from "next/font/google";
import 'leaflet/dist/leaflet.css';
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Tarja from "@/components/tarja";
import NavbarClosed from "@/components/navbarClosed";
import Image from "next/image";
import Link from "next/link";
import Whatsapp from "../../images/what.png";
import Instagram from "../../images/instagram.webp";
import facebook from "../../images/facebook.png";
import linkedin from "../../images/linkedin.png";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [isCheck, setIsCheck] = useState(true);

  useEffect(() => {
    const handleChange = () => {
      if (window.scrollY >= 250) {
        setIsCheck(true);
      } else {
        setIsCheck(false);
      }
    };
    window.addEventListener("scroll", handleChange);

    return () => {
      window.removeEventListener("scroll", handleChange);
    };
  }, []);

  return (
    <html lang="en">
      <body className={`${inter.className} w-[100vw] overflow-x-hidden relative`}>
        <NavbarClosed className="z-30"/>
        <Tarja/>
        <Navbar className={"absolute top-[6rem] z-30"}/>
        {children}
        <Link href="https://w.app/UMYpCH" type="blank" className={isCheck ? "fixed bottom-5 right-5" : "hidden"}>
          <Image src={Whatsapp} width={400} height={500} alt="whatsapp" className="rounded-full w-[4rem] z-50"/>
        </Link>
        <Link href="/" type="blank" className={isCheck ? "fixed bottom-[26rem] right-5 w-[1.5rem] bg-white rounded-full" : "hidden"}>
          <Image src={facebook} width={400} height={500} alt="whatsapp" className="rounded-full w-[4rem] z-50"/>
        </Link>
        <Link href="/" type="blank" className={isCheck ? "fixed bottom-[23.5rem] right-5  w-[1.5rem] bg-white rounded-full" : "hidden"}>
          <Image src={Instagram} width={400} height={500} alt="whatsapp" className="rounded-full w-[4rem] z-50"/>
        </Link>
        <Link href="/" type="blank" className={isCheck ? "fixed bottom-[21rem] right-5  w-[1.5rem] bg-white rounded-full" : "hidden"}>
          <Image src={linkedin} width={400} height={500} alt="whatsapp" className="rounded-full w-[4rem] z-50"/>
        </Link>
        <Footer/>
      </body>
    </html>
  );
}