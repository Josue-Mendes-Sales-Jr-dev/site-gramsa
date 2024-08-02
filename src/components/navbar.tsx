'use client'
import Link from "next/link"
import Image from "next/image"
import Img from "../../images/Logo GRAMSA sem fundo.png"
import { useEffect, useState } from "react"
import { GiHamburgerMenu } from 'react-icons/gi';


type INavbarProps={
    className?: string
}

export default function Navbar(props:INavbarProps){
    const [isCheck, setIsCheck] = useState(true);

    useEffect(() => {
      const handleActive = () => {
        if (window.scrollY >= 1) {
          setIsCheck(false);
        } else {
          setIsCheck(true);
        }
      };
  
      window.addEventListener('scroll', handleActive);
  
      return () => {
        window.removeEventListener('scroll', handleActive);
      };
    }, []);
  
    const handleClick = () => {
      // Adicione a lógica que deseja executar ao clicar no botão do hambúrguer
    };
  
    return(
        <div className={ isCheck ? ` ${props.className} w-[100vw] h-[5rem] absolute  top-0 lg:mt-20  items-center text-white justify-between lg:justify-around flex` : `hidden`}>
            <div className={` absolute top-0 w-[100%] h-[5rem] flex  opacity-60 z-[-10] items-center text-white justify-around `}>
                
            </div>
           <div className=" lg:w-[30%] h-[100%]">
           <Link href='/' className="h-[100%]">
           <Image src={Img} className=" absolute top-2 sm:top-0 mt-3 object-fill w-[8rem] h-[5em] rounded-full" width={500} height={500} alt="logo" />
           </Link>
           </div>
           <nav className="hidden lg:flex w-[45%] h-[90%] items-center justify-center gap-10 rounded pr-10">
            <Link className=" py-7 p-3 hover:text-blue-400 hover:border-t-2 border-gray-900" href="/" >Home</Link>
            <Link className=" py-7 p-3 hover:text-blue-400 hover:border-t-2 border-gray-900" href="/about">About</Link>
            <Link className=" py-7 p-3 hover:text-blue-400 hover:border-t-2 border-gray-900" href="/services">Services</Link>
            <Link className=" py-7 p-3 hover:text-blue-400 hover:border-t-2 border-gray-900" href="/projects">Projetos</Link>
            <Link className=" py-7 p-3 hover:text-blue-400 hover:border-t-2 border-gray-900" href="/contact">Fale conosco</Link>
            </nav>
            <button className="lg:hidden w-[2%]" id="hamburger">
             <GiHamburgerMenu className="absolute top-6 right-2 text-[2rem] mr-4" onClick={handleClick} />
            </button>
        </div>
    )}