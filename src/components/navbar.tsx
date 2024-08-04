'use client'
import Link from "next/link"
import Image from "next/image"
import Img from "../../images/Logo GRAMSA sem fundo.png"
import { useEffect, useState } from "react"
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineX } from "react-icons/ai";



type INavbarProps={
    className?: string
}

export default function Navbar(props:INavbarProps){
    const [isCheck, setIsCheck] = useState(true);
    const [isShow, setIsShow] = useState(true);


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
      console.log("click")
        if(isShow==true){
          setIsShow(false)
        }else{
          setIsShow(true)
        }
    };
    
    const handleRemove = () => {
      console.log("click")
          setIsShow(true)
       
    };
    

    
  
    return(
        <div className={ isCheck ? ` ${props.className} w-[100vw] h-[5rem] absolute  top-0 lg:mt-20  items-center text-white justify-between lg:justify-around flex` : `hidden`}>
           <div className={"absolute top-0 w-[100%] h-[5rem] flex opacity-60 z-[-10] items-center text-white justify-around"}>
      </div>
      <div className="w-[50%] lg:w-[30%] h-[100%]">
        <Link href="/" className="h-[100%]">
          <Image src={Img} className="absolute top-1 mt-3 object-fill w-[7rem] h-[4rem] rounded-full" width={500} height={500} alt="logo" />
        </Link>
      </div>
      <nav className={isShow? "hidden lg:flex w-[45%] h-[90%] items-center justify-center gap-10 rounded" : "absolute top-[0rem] flex w-[100vw] h-[90vh] flex-col items-center justify-center gap-10 rounded bg-teal-950 z-[50]"}>
        <Link className="py-7 p-3 hover:text-blue-400 hover:border-t-2 border-gray-900" href="/"onClick={handleRemove} >Home</Link>
        <Link className="py-7 p-3 hover:text-blue-400 hover:border-t-2 border-gray-900" href="/about"onClick={handleRemove} >About</Link>
        <Link className="py-7 p-3 hover:text-blue-400 hover:border-t-2 border-gray-900" href="/services"onClick={handleRemove} >Services</Link>
        <Link className="py-7 p-3 hover:text-blue-400 hover:border-t-2 border-gray-900" href="/projects" onClick={handleRemove} >Projetos</Link>
        <Link className="py-4 px-4 bg-white text-teal-950 hover:bg-teal-800 text-[1.2rem] rounded-xl hover:text-white hover:border-t-2 border-gray-900" href="/contact" onClick={handleRemove} >Fale conosco</Link>
      </nav>
      <button className="lg:hidden w-[2%]" id="hamburger">
        {
          isShow? <GiHamburgerMenu className="absolute right-2 z-[30] top-6 text-[2rem] mr-4" onClick={handleClick}/> : <AiOutlineX className="absolute right-2 z-[50] top-6 text-[2rem] mr-4" onClick={handleClick} />
        } 
      </button>
    </div>
    )}